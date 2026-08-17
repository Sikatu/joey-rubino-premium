import { NextResponse } from "next/server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

const MAX_BODY_BYTES = 16_384;

const allowedSubjects = new Set([
  "sober-companioning",
  "fitness",
  "intervention",
  "finding-meaning",
  "general",
  "family",
]);

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!sameOrigin(request)) {
      return NextResponse.json(
        { error: "Request origin was not accepted." },
        { status: 403 },
      );
    }

    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 415 },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? "0");

    if (
      Number.isFinite(contentLength) &&
      contentLength > MAX_BODY_BYTES
    ) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 },
      );
    }

    let body: ContactPayload;

    try {
      body = (await request.json()) as ContactPayload;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }

    // Honeypot: real visitors never fill this field.
    const website = stringValue(body.website);

    if (website) {
      // Quietly acknowledge bots without inserting anything.
      return NextResponse.json(
        { success: true },
        { status: 200 },
      );
    }

    // Very fast submissions are commonly automated.
    if (typeof body.startedAt === "number") {
      const elapsed = Date.now() - body.startedAt;

      if (elapsed >= 0 && elapsed < 1200) {
        return NextResponse.json(
          { error: "Please wait a moment and try again." },
          { status: 400 },
        );
      }
    }

    const name = stringValue(body.name);
    const email = stringValue(body.email).toLowerCase();
    const phone = stringValue(body.phone);
    const subject = stringValue(body.subject);
    const message = stringValue(body.message);

    if (!name || name.length > 120) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 },
      );
    }

    if (
      !email ||
      email.length > 320 ||
      !validEmail(email)
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (phone.length > 50) {
      return NextResponse.json(
        { error: "Phone number is too long." },
        { status: 400 },
      );
    }

    if (!allowedSubjects.has(subject)) {
      return NextResponse.json(
        { error: "Please select a valid subject." },
        { status: 400 },
      );
    }

    if (!message || message.length > 5000) {
      return NextResponse.json(
        { error: "Please enter a message of up to 5,000 characters." },
        { status: 400 },
      );
    }

    const supabase = createServerSupabaseClient();

    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone: phone || null,
        subject,
        message,
        status: "new",
        source: "website",
      });

    if (error) {
      // Do not log the visitor's message or personal information.
      console.error("Contact submission database error:", {
        code: error.code,
      });

      return NextResponse.json(
        {
          error:
            "Your message could not be sent right now. Please try again.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact route failure:", {
      name: error instanceof Error ? error.name : "UnknownError",
    });

    return NextResponse.json(
      {
        error:
          "Your message could not be sent right now. Please try again.",
      },
      { status: 500 },
    );
  }
}