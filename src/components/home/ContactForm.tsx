"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState, type FormEvent } from "react";

type Step = 1 | 2;
type FormStatus = "idle" | "submitting" | "success" | "error";

type FormErrors = {
  challenge?: string;
  email?: string;
  name?: string;
  organisation?: string;
  phone?: string;
  captcha?: string;
};

const CHALLENGES = [
  "Clearing strategy",
  "Transformation & change",
  "Operations & resilience",
  "Regulatory change",
  "Fractional leadership",
  "Vendor or platform decision",
  "Programme recovery",
  "Not sure yet",
] as const;

/** Web3Forms free-plan hCaptcha site key */
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

/**
 * Web3Forms access keys are designed to be public (browser-side).
 * Env can override; this fallback keeps production builds working even if
 * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY was not set at build time.
 */
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "4e54d961-2c6d-49f4-a382-ce7e909f8763";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const fieldClass =
  "w-full rounded-lg border border-[#0b1220]/18 bg-white px-4 py-3 text-sm text-[#0b1220] outline-none transition placeholder:text-stone-400 focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#52b788]/30";

const labelClass = "mb-1.5 block text-left text-sm font-semibold text-[#0b1220]";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readWeb3FormsResult(response: Response): Promise<{
  success?: boolean;
  message?: string;
}> {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return (await response.json()) as { success?: boolean; message?: string };
  }
  const text = await response.text();
  if (text.toLowerCase().includes("just a moment") || response.status === 403) {
    return {
      success: false,
      message:
        "The form service blocked this request. Please try again in a moment.",
    };
  }
  return {
    success: false,
    message: "The form service returned an unexpected response.",
  };
}

export function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [challenge, setChallenge] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [phone, setPhone] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const step1Ready = Boolean(challenge) && isValidEmail(email.trim());

  function goToStep2() {
    const nextErrors: FormErrors = {};
    if (!challenge) nextErrors.challenge = "This field is required.";
    if (!email.trim()) nextErrors.email = "Please enter your work email.";
    else if (!isValidEmail(email.trim()))
      nextErrors.email = "Enter a valid email address.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setErrorMessage(null);
    setStep(2);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!organisation.trim())
      nextErrors.organisation = "Please enter your organisation.";
    if (!phone.trim()) nextErrors.phone = "Please enter a phone number.";
    if (!captchaToken) nextErrors.captcha = "Please complete the captcha.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (!captchaToken) return;

    setStatus("submitting");

    try {
      // Free-plan Web3Forms only accepts browser submissions (not server proxies).
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("subject", `SureClear enquiry — ${challenge}`);
      payload.append("from_name", "SureClear website");
      payload.append("name", name.trim());
      payload.append("email", email.trim());
      payload.append("organisation", organisation.trim());
      payload.append("phone", phone.trim());
      payload.append("challenge", challenge);
      payload.append(
        "message",
        [
          `Challenge: ${challenge}`,
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          `Organisation: ${organisation.trim()}`,
          `Phone: ${phone.trim()}`,
        ].join("\n"),
      );
      payload.append("h-captcha-response", captchaToken);
      payload.append("botcheck", "");

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      const result = await readWeb3FormsResult(response);

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Something went wrong sending your message. Please try again.",
        );
      }

      setStatus("success");
      setErrors({});
    } catch (error) {
      const detail =
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong sending your message. Please try again.";
      setStatus("error");
      setErrorMessage(
        `${detail} If this continues, email hello@sureclear.com.`,
      );
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    }
  }

  if (status === "success") {
    return (
      <div
        className="overflow-hidden rounded-2xl bg-white text-left shadow-[0_18px_50px_rgba(11,18,32,0.18)]"
        role="status"
      >
        <div className="h-1.5 w-full bg-[#0b1220]" aria-hidden />
        <div className="p-8 sm:p-10">
          <p className="text-sm text-stone-500">Submitted</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0b1220]">
            Thanks — we have your details.
          </h3>
          <p className="mt-3 text-base leading-relaxed text-stone-600">
            We will review what you shared about{" "}
            <span className="font-medium text-[#0b1220]">{challenge}</span> and
            come back with a focused conversation. If it is urgent, email{" "}
            <a
              href="mailto:hello@sureclear.com"
              className="font-semibold text-[#2d6a4f] underline-offset-2 hover:underline"
            >
              hello@sureclear.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="overflow-hidden rounded-2xl bg-white text-left shadow-[0_18px_50px_rgba(11,18,32,0.18)]"
    >
      <div className="h-1.5 w-full bg-[#e7e5df]" aria-hidden>
        <div
          className="h-full bg-[#0b1220] transition-all duration-300"
          style={{ width: step === 1 ? "50%" : "100%" }}
        />
      </div>

      <div className="p-6 sm:p-8 lg:p-9">
        <p className="text-sm text-stone-500">Step {step}/2</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-[1.65rem]">
          {step === 1 ? "How can we help you?" : "A few details about you"}
        </h3>

        <div className="mt-4 rounded-lg bg-[#edf7f1] px-4 py-3 text-sm leading-relaxed text-[#1f4037]">
          Prefer email?{" "}
          <a
            href="mailto:hello@sureclear.com"
            className="font-semibold text-[#2d6a4f] underline-offset-2 hover:underline"
          >
            hello@sureclear.com
          </a>
        </div>

        {step === 1 ? (
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="contact-challenge" className={labelClass}>
                What challenge would you like to discuss?
              </label>
              <select
                id="contact-challenge"
                name="challenge"
                value={challenge}
                onChange={(event) => {
                  setChallenge(event.target.value);
                  setErrors((prev) => ({ ...prev, challenge: undefined }));
                }}
                className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%230b1220%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%221.75%22 d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-[length:1.1rem] bg-[right_0.85rem_center] bg-no-repeat pr-10 ${
                  errors.challenge ? "border-red-400" : ""
                }`}
                aria-invalid={Boolean(errors.challenge)}
              >
                <option value="">Select an option</option>
                {CHALLENGES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.challenge ? (
                <p className="mt-1.5 text-sm text-stone-600">
                  {errors.challenge}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Work email address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                className={`${fieldClass} ${errors.email ? "border-red-400" : ""}`}
                placeholder="you@organisation.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? (
                <p className="mt-1.5 text-sm text-red-700">{errors.email}</p>
              ) : null}
            </div>

            <button
              type="button"
              onClick={goToStep2}
              disabled={!step1Ready}
              className={`mt-2 inline-flex w-full items-center justify-center rounded-lg px-5 py-3.5 text-sm font-semibold transition ${
                step1Ready
                  ? "contact-continue-pulse bg-[#0b1220] text-white hover:bg-[#14201a]"
                  : "cursor-not-allowed bg-[#d6d3d1] text-[#78716c]"
              }`}
            >
              Continue
              <span aria-hidden="true" className="ml-1.5">
                ›
              </span>
            </button>
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                className={`${fieldClass} ${errors.name ? "border-red-400" : ""}`}
                placeholder="Your name"
              />
              {errors.name ? (
                <p className="mt-1.5 text-sm text-red-700">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-organisation" className={labelClass}>
                Organisation name
              </label>
              <input
                id="contact-organisation"
                name="organisation"
                type="text"
                autoComplete="organization"
                value={organisation}
                onChange={(event) => {
                  setOrganisation(event.target.value);
                  setErrors((prev) => ({ ...prev, organisation: undefined }));
                }}
                className={`${fieldClass} ${
                  errors.organisation ? "border-red-400" : ""
                }`}
                placeholder="Firm or institution"
              />
              {errors.organisation ? (
                <p className="mt-1.5 text-sm text-red-700">
                  {errors.organisation}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                Phone number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  setErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                className={`${fieldClass} ${errors.phone ? "border-red-400" : ""}`}
                placeholder="+44 …"
              />
              {errors.phone ? (
                <p className="mt-1.5 text-sm text-red-700">{errors.phone}</p>
              ) : null}
            </div>

            <div>
              <p className={labelClass}>Verification</p>
              <div className="overflow-hidden rounded-lg">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={HCAPTCHA_SITEKEY}
                  reCaptchaCompat={false}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setErrors((prev) => ({ ...prev, captcha: undefined }));
                  }}
                  onExpire={() => setCaptchaToken(null)}
                  onError={() => {
                    setCaptchaToken(null);
                    setErrors((prev) => ({
                      ...prev,
                      captcha: "Captcha failed to load. Please try again.",
                    }));
                  }}
                />
              </div>
              {errors.captcha ? (
                <p className="mt-1.5 text-sm text-red-700">{errors.captcha}</p>
              ) : null}
            </div>

            {/* Honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {status === "error" && errorMessage ? (
              <p className="text-sm text-red-700" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setErrorMessage(null);
                }}
                className="inline-flex w-full items-center justify-center rounded-lg border border-[#0b1220]/20 px-5 py-3.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#f5f4ef] sm:w-auto"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full flex-1 items-center justify-center rounded-lg bg-[#0b1220] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#14201a] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending…" : "Submit"}
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
