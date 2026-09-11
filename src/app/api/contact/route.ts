import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  organisation?: string;
  phone?: string;
  challenge?: string;
  message?: string;
  botcheck?: string;
  "h-captcha-response"?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const organisation = String(body.organisation || "").trim();
  const phone = String(body.phone || "").trim();
  const challenge = String(body.challenge || "").trim();
  const captcha = String(body["h-captcha-response"] || "").trim();
  const botcheck = String(body.botcheck || "");

  if (botcheck) {
    return NextResponse.json({ success: true });
  }

  if (
    !name ||
    !email ||
    !organisation ||
    !phone ||
    !challenge ||
    !captcha ||
    !isValidEmail(email)
  ) {
    return NextResponse.json(
      { success: false, message: "Please complete the required fields." },
      { status: 400 },
    );
  }

  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        message:
          "The contact form is not configured yet. Please email hello@sureclear.com.",
      },
      { status: 500 },
    );
  }

  const payload = new FormData();
  payload.append("access_key", accessKey);
  payload.append("subject", `SureClear enquiry — ${challenge}`);
  payload.append("from_name", "SureClear website");
  payload.append("name", name);
  payload.append("email", email);
  payload.append("organisation", organisation);
  payload.append("phone", phone);
  payload.append("challenge", challenge);
  payload.append(
    "message",
    [
      `Challenge: ${challenge}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation}`,
      `Phone: ${phone}`,
    ].join("\n"),
  );
  payload.append("h-captcha-response", captcha);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
      headers: {
        Accept: "application/json",
      },
    });

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message:
            "The form service could not be reached. Please try again shortly or email hello@sureclear.com.",
        },
        { status: 502 },
      );
    }

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Submission failed.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong sending your message. Please try again or email hello@sureclear.com.",
      },
      { status: 502 },
    );
  }
}
