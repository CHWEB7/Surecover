"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const fieldClass =
  "w-full rounded-lg border border-[#0b1220]/12 bg-white px-4 py-3 text-sm text-[#0b1220] shadow-sm outline-none transition placeholder:text-stone-400 focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#52b788]/35";

const labelClass = "mb-1.5 block text-left text-sm font-semibold text-[#0b1220]";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organisation = String(data.get("organisation") || "").trim();
    const message = String(data.get("message") || "").trim();
    const botcheck = String(data.get("botcheck") || "");

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your work email.";
    else if (!isValidEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Please tell us a little about what you need.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "The contact form is not configured yet. Please email hello@sureclear.com.",
      );
      return;
    }

    // Honeypot: bots that fill this are rejected silently as "success"
    if (botcheck) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "SureClear website enquiry",
          from_name: "SureClear website",
          name,
          email,
          organisation: organisation || "Not provided",
          message,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      form.reset();
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again or email hello@sureclear.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-white/40 bg-white/95 p-8 text-left shadow-[0_16px_40px_rgba(11,18,32,0.18)] sm:p-10"
        role="status"
      >
        <p className="text-xl font-semibold tracking-tight text-[#0b1220]">
          Thanks — your message is on its way.
        </p>
        <p className="mt-3 text-base leading-relaxed text-stone-600">
          We will review what you shared and come back with a focused
          conversation. If it is urgent, email{" "}
          <a
            href="mailto:hello@sureclear.com"
            className="font-semibold text-[#2d6a4f] underline-offset-2 hover:underline"
          >
            hello@sureclear.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex rounded-lg border border-[#0b1220] px-5 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#0b1220] hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-white/40 bg-white/95 p-6 text-left shadow-[0_16px_40px_rgba(11,18,32,0.18)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="contact-email" className={labelClass}>
            Work email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@organisation.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-organisation" className={labelClass}>
            Organisation <span className="font-normal text-stone-500">(optional)</span>
          </label>
          <input
            id="contact-organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Firm or institution"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            How can we help?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className={`${fieldClass} resize-y min-h-[8rem]`}
            placeholder="Share the decision, programme or operational challenge in front of you."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
          />
          {errors.message ? (
            <p
              id="contact-message-error"
              className="mt-1.5 text-sm text-red-700"
            >
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Honeypot — hidden from people, visible to simple bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === "error" && errorMessage ? (
        <p className="mt-5 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-[#0b1220] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#14201a] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-stone-600">
          Or email{" "}
          <a
            href="mailto:hello@sureclear.com"
            className="font-semibold text-[#2d6a4f] underline-offset-2 hover:underline"
          >
            hello@sureclear.com
          </a>
        </p>
      </div>
    </form>
  );
}
