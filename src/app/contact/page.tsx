"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";
import { RevealSection } from "@/lib/motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmissionStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] =
    useState<SubmissionStatus>("idle");

  const [serverError, setServerError] = useState("");
  const [startedAt] = useState(() => Date.now());

  const firstInvalidFieldRef =
    useRef<keyof FormErrors | null>(null);

  useEffect(() => {
    const field =
      firstInvalidFieldRef.current;

    if (
      !field ||
      !errors[field]
    ) {
      return;
    }

    const element =
      document.getElementById(
        `contact-${field}`,
      );

    if (
      element instanceof HTMLElement
    ) {
      element.focus();
    }

    firstInvalidFieldRef.current =
      null;
  }, [errors]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length > 120) {
      newErrors.name = "Name must be 120 characters or fewer";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (email.length > 320) {
      newErrors.email = "Email address is too long";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email =
        "Please enter a valid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!message) {
      newErrors.message = "Message is required";
    } else if (message.length > 5000) {
      newErrors.message =
        "Message must be 5,000 characters or fewer";
    }

    const firstInvalidField = (
      [
        "name",
        "email",
        "subject",
        "message",
      ] as const
    ).find(
      (field) =>
        newErrors[field],
    );

    firstInvalidFieldRef.current =
      firstInvalidField ??
      null;

    setErrors(newErrors);

    return !firstInvalidField;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          website: form.website,
          startedAt,
        }),
      });

      const result = (await response
        .json()
        .catch(() => null)) as
        | {
            success?: boolean;
            error?: string;
          }
        | null;

      if (!response.ok || !result?.success) {
        setStatus("error");
        setServerError(
          result?.error ??
            "Your message could not be sent right now. Please try again.",
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setServerError(
        "Your message could not be sent right now. Please try again.",
      );
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }

    if (status === "error") {
      setStatus("idle");
      setServerError("");
    }
  };

  const inputBase =
    "w-full bg-transparent border-b border-stone/45 pb-3 pt-1 font-sans text-[16px] text-ink placeholder:text-body/60 transition-colors focus:border-bronze-deep focus:outline-none";

  return (
    <>
      <section className="pb-16 pt-28 lg:pb-32 lg:pt-40">
        <div className="site-shell">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-eyebrow mb-4">
                Contact
              </p>

              <h1 className="mb-8 font-serif text-[clamp(3.25rem,12vw,4.35rem)] leading-[0.94] tracking-[-0.04em] text-ink lg:text-[clamp(4.25rem,4.5vw,5.25rem)] lg:leading-[0.92]">
                <span className="block lg:whitespace-nowrap">
                  Let&apos;s start
                </span>

                <span className="block lg:whitespace-nowrap">
                  a conversation.
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-body-lg text-body">
                Whether you&apos;re reaching out for yourself,
                someone you care about, or simply have questions,
                you can start by calling, emailing, or using the
                contact options here.
              </p>

              <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="text-eyebrow mb-2">
                    Call
                  </p>

                  <a
                    href="tel:+13234043759"
                    className="font-sans text-xl text-ink transition-colors hover:text-bronze"
                  >
                    323.404.3759
                  </a>
                </div>

                <div>
                  <p className="text-eyebrow mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:joeyrubino@gmail.com"
                    className="font-sans text-xl text-ink transition-colors hover:text-bronze"
                  >
                    joeyrubino@gmail.com
                  </a>
                </div>
              </div>

              <p className="text-eyebrow">
                Private. Personal. No pressure.
              </p>
            </div>

            <div>
              <RevealSection>
                {status === "success" ? (
                  <div
                    className="flex flex-col items-center justify-center py-20 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-olive/30">
                      <svg
                        className="h-6 w-6 text-olive"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h2 className="text-subtitle mb-3">
                      Message Received
                    </h2>

                    <p className="font-sans text-[15px] text-body">
                      Thank you for reaching out. Your message was
                      sent successfully.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6 border-t border-stone/25 pt-7"
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-field-label"
                      >
                        Name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        maxLength={120}
                        value={form.name}
                        onChange={handleChange}
                        className={inputBase}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name
                            ? "name-error"
                            : undefined
                        }
                      />

                      {errors.name && (
                        <p
                          id="name-error"
                          className="mt-1 text-[13px] text-red-700"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-field-label"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        maxLength={320}
                        value={form.email}
                        onChange={handleChange}
                        className={inputBase}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email
                            ? "email-error"
                            : undefined
                        }
                      />

                      {errors.email && (
                        <p
                          id="email-error"
                          className="mt-1 text-[13px] text-red-700"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-field-label"
                      >
                        Phone (optional)
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Optional"
                        maxLength={50}
                        value={form.phone}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-field-label"
                      >
                        Subject
                      </label>

                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`${inputBase} ${
                          !form.subject
                            ? "text-body/60"
                            : ""
                        }`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject
                            ? "subject-error"
                            : undefined
                        }
                      >
                        <option value="" disabled>
                          Subject *
                        </option>

                        <option value="sober-companioning">
                          Sober Companioning
                        </option>

                        <option value="fitness">
                          Fitness &amp; Transformation
                        </option>

                        <option value="intervention">
                          Interventions
                        </option>

                        <option value="finding-meaning">
                          Finding Meaning
                        </option>

                        <option value="general">
                          General Inquiry
                        </option>

                        <option value="family">
                          Family Member Reaching Out
                        </option>
                      </select>

                      {errors.subject && (
                        <p
                          id="subject-error"
                          className="mt-1 text-[13px] text-red-700"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-field-label"
                      >
                        Message
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Share what you are looking for"
                        rows={4}
                        maxLength={5000}
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputBase} min-h-[120px] resize-none`}
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message
                            ? "message-error"
                            : undefined
                        }
                      />

                      {errors.message && (
                        <p
                          id="message-error"
                          className="mt-1 text-[13px] text-red-700"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div
                      className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                      aria-hidden="true"
                    >
                      <label htmlFor="contact-website">
                        Website
                      </label>

                      <input
                        id="contact-website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.website}
                        onChange={handleChange}
                      />
                    </div>

                    {status === "error" && (
                      <div
                        className="border-l-2 border-red-700/60 pl-4"
                        role="alert"
                        aria-live="assertive"
                      >
                        <p className="font-sans text-[13px] leading-relaxed text-red-700">
                          {serverError}
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status === "loading"}
                      className="min-h-[54px] w-full sm:max-w-[240px] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "loading"
                        ? "Sending..."
                        : "Send Message"}
                    </Button>
                  </form>
                )}
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}