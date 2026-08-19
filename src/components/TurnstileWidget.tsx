"use client";

import Script from "next/script";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type TurnstileRenderOptions = {
  sitekey: string;
  action: string;
  theme: "auto" | "light" | "dark";
  size: "normal" | "flexible" | "compact";
  appearance: "always" | "execute" | "interaction-only";
  "refresh-expired": "auto" | "manual" | "never";
  "refresh-timeout": "auto" | "manual" | "never";
  callback: (token: string) => void;
  "error-callback": (errorCode?: string) => void;
  "expired-callback": () => void;
  "timeout-callback": () => void;
};

type TurnstileApi = {
  render: (
    container: HTMLElement | string,
    options: TurnstileRenderOptions,
  ) => string;

  reset: (widgetId?: string) => void;

  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  resetKey: number;
};

const siteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";

export function TurnstileWidget({
  onTokenChange,
  resetKey,
}: TurnstileWidgetProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const widgetIdRef =
    useRef<string | null>(null);

  const generatedId =
    useId();

  const labelId =
    `${generatedId}-label`;

  const messageId =
    `${generatedId}-message`;

  const [message, setMessage] =
    useState(
      siteKey
        ? "Complete the security check to enable Send Message."
        : "Security verification is temporarily unavailable.",
    );

  const [hasError, setHasError] =
    useState(
      !siteKey
    );

  const resetWidget =
    useCallback(
      () => {
        onTokenChange("");

        const widgetId =
          widgetIdRef.current;

        const api =
          window.turnstile;

        if (
          !widgetId ||
          !api
        ) {
          return;
        }

        setHasError(false);

        setMessage(
          "Security verification refreshed. Complete the check to continue.",
        );

        api.reset(
          widgetId
        );
      },
      [
        onTokenChange,
      ],
    );

  const renderWidget =
    useCallback(
      () => {
        if (
          !siteKey ||
          !containerRef.current ||
          widgetIdRef.current ||
          !window.turnstile
        ) {
          return;
        }

        widgetIdRef.current =
          window.turnstile.render(
            containerRef.current,
            {
              sitekey:
                siteKey,

              action:
                "contact",

              theme:
                "light",

              size:
                "flexible",

              appearance:
                "always",

              "refresh-expired":
                "manual",

              "refresh-timeout":
                "manual",

              callback:
                (
                  token,
                ) => {
                  setHasError(false);

                  setMessage(
                    "Security verification complete.",
                  );

                  onTokenChange(
                    token
                  );
                },

              "error-callback":
                () => {
                  onTokenChange("");

                  setHasError(true);

                  setMessage(
                    "Security verification could not be completed. Please try again.",
                  );
                },

              "expired-callback":
                () => {
                  onTokenChange("");

                  setHasError(false);

                  setMessage(
                    "Security verification expired. Refreshing the check...",
                  );

                  const widgetId =
                    widgetIdRef.current;

                  if (
                    widgetId &&
                    window.turnstile
                  ) {
                    window.turnstile.reset(
                      widgetId
                    );
                  }
                },

              "timeout-callback":
                () => {
                  onTokenChange("");

                  setHasError(false);

                  setMessage(
                    "Security verification timed out. Refreshing the check...",
                  );

                  const widgetId =
                    widgetIdRef.current;

                  if (
                    widgetId &&
                    window.turnstile
                  ) {
                    window.turnstile.reset(
                      widgetId
                    );
                  }
                },
            },
          );
      },
      [
        onTokenChange,
      ],
    );

  useEffect(
    () => {
      renderWidget();
    },
    [
      renderWidget,
    ],
  );

  useEffect(
    () => {
      if (
        resetKey ===
        0
      ) {
        return;
      }

      resetWidget();
    },
    [
      resetKey,
      resetWidget,
    ],
  );

  useEffect(
    () => {
      return () => {
        const widgetId =
          widgetIdRef.current;

        if (
          widgetId &&
          window.turnstile
        ) {
          window.turnstile.remove(
            widgetId
          );
        }

        widgetIdRef.current =
          null;
      };
    },
    [],
  );

  const handleScriptError =
    () => {
      onTokenChange("");

      setHasError(true);

      setMessage(
        "Security verification could not load. Please check your connection and reload this page.",
      );
    };

  return (
    <>
      {siteKey ? (
        <Script
          id="cloudflare-turnstile-script"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={renderWidget}
          onError={handleScriptError}
        />
      ) : null}

      <div
        data-turnstile-shell="contact"
        data-reset-key={resetKey}
        className="border border-stone/25 bg-ivory/45 px-4 py-4 sm:px-5"
        aria-labelledby={labelId}
        aria-describedby={messageId}
      >
        <p
          id={labelId}
          className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-ink"
        >
          Security verification
        </p>

        {siteKey ? (
          <div
            ref={containerRef}
            className="mt-3 min-h-[65px] max-w-full"
          />
        ) : null}

        <p
          id={messageId}
          className="mt-3 font-sans text-[12px] leading-[1.65] text-body/70"
          aria-live="polite"
        >
          {message}
        </p>

        {hasError && siteKey ? (
          <button
            type="button"
            onClick={resetWidget}
            className="mt-3 font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-olive underline decoration-bronze/50 underline-offset-4"
          >
            Retry security check
          </button>
        ) : null}
      </div>
    </>
  );
}