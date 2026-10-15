import { NextResponse } from "next/server";

/**
 * Contact submissions are handled in the browser directly against Web3Forms.
 * Free-plan Web3Forms rejects server-side proxies ("Use our API in client side").
 * This route remains only so old clients get a clear message instead of a silent failure.
 */
export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message:
        "Please refresh the page and try again. If this continues, email hello@sureclear.com.",
    },
    { status: 410 },
  );
}
