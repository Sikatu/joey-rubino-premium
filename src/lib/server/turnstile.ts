const TURNSTILE_SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const TURNSTILE_EXPECTED_ACTION =
  "contact";

export const TURNSTILE_MAX_TOKEN_LENGTH =
  2048;

type SiteverifyResult = {
  success?: unknown;
  action?: unknown;
  hostname?: unknown;
  "error-codes"?: unknown;
};

export type TurnstileFailureReason =
  | "invalid-token"
  | "configuration"
  | "unavailable";

export type TurnstileVerificationResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      reason: TurnstileFailureReason;
    };

function normalizeHostname(
  value: string,
) {
  return value
    .trim()
    .toLowerCase()
    .replace(
      /\.+$/,
      "",
    );
}

export function parseTurnstileAllowedHostnames(
  value: string | undefined,
) {
  const hostnames =
    new Set<string>();

  if (
    !value
  ) {
    return hostnames;
  }

  for (
    const raw of
    value.split(",")
  ) {
    const hostname =
      normalizeHostname(
        raw
      );

    if (
      hostname &&
      /^[a-z0-9.-]+$/.test(
        hostname
      ) &&
      !hostname.includes(
        ".."
      )
    ) {
      hostnames.add(
        hostname
      );
    }
  }

  return hostnames;
}

export function isTurnstileSiteverifyAccepted(
  result: unknown,
  allowedHostnames: ReadonlySet<string>,
  expectedAction =
    TURNSTILE_EXPECTED_ACTION,
) {
  if (
    !result ||
    typeof result !==
      "object"
  ) {
    return false;
  }

  const candidate =
    result as
      SiteverifyResult;

  if (
    candidate.success !==
      true ||
    candidate.action !==
      expectedAction ||
    typeof candidate.hostname !==
      "string"
  ) {
    return false;
  }

  return allowedHostnames.has(
    normalizeHostname(
      candidate.hostname
    ),
  );
}

export async function verifyTurnstileToken(
  token: string,
): Promise<TurnstileVerificationResult> {
  const candidate =
    token.trim();

  if (
    !candidate ||
    candidate.length >
      TURNSTILE_MAX_TOKEN_LENGTH
  ) {
    return {
      ok: false,
      reason: "invalid-token",
    };
  }

  const secret =
    process.env
      .TURNSTILE_SECRET_KEY
      ?.trim() ??
    "";

  const allowedHostnames =
    parseTurnstileAllowedHostnames(
      process.env
        .TURNSTILE_ALLOWED_HOSTNAMES,
    );

  if (
    !secret ||
    allowedHostnames.size ===
      0
  ) {
    return {
      ok: false,
      reason: "configuration",
    };
  }

  const controller =
    new AbortController();

  const timeout =
    setTimeout(
      () =>
        controller.abort(),
      10_000,
    );

  try {
    const response =
      await fetch(
        TURNSTILE_SITEVERIFY_URL,
        {
          method:
            "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body:
            new URLSearchParams({
              secret,
              response:
                candidate,
            }),

          signal:
            controller.signal,

          cache:
            "no-store",
        },
      );

    if (
      !response.ok
    ) {
      return {
        ok: false,
        reason: "unavailable",
      };
    }

    let result:
      unknown;

    try {
      result =
        await response.json();
    }
    catch {
      return {
        ok: false,
        reason: "unavailable",
      };
    }

    if (
      !isTurnstileSiteverifyAccepted(
        result,
        allowedHostnames,
      )
    ) {
      return {
        ok: false,
        reason: "invalid-token",
      };
    }

    return {
      ok: true,
    };
  }
  catch {
    return {
      ok: false,
      reason: "unavailable",
    };
  }
  finally {
    clearTimeout(
      timeout
    );
  }
}