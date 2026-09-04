import { NextResponse } from "next/server";

import {
  getSupabaseServerClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!isSupabaseConfigured) {
    return NextResponse.json(
      { error: "The waitlist is not available yet. Please check back soon." },
      { status: 503 },
    );
  }

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "The waitlist is not available yet. Please check back soon." },
      { status: 503 },
    );
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: normalizedEmail, source: "coming_soon" });

  if (error) {
    // 23505 = unique_violation: the email is already on the list.
    if (error.code === "23505") {
      return NextResponse.json(
        { message: "You're already on the list — talk soon!" },
        { status: 200 },
      );
    }

    console.error("Failed to save waitlist signup:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "You're on the list. We'll be in touch soon." },
    { status: 201 },
  );
}
