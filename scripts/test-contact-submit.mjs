import { chromium } from "playwright";
import fs from "node:fs";

const base = process.env.CONTACT_BASE_URL || "http://127.0.0.1:3001";
const outDir = "/opt/cursor/artifacts";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto(`${base}/contact`, { waitUntil: "networkidle" });
await page.screenshot({
  path: `${outDir}/contact-3step-step1.png`,
  fullPage: true,
});

await page
  .getByLabel("What challenge would you like to discuss?")
  .selectOption("Clearing strategy");
await page.getByLabel("Work email address").fill("test@example.com");
await page.waitForFunction(() => {
  const btn = [...document.querySelectorAll("button")].find((b) =>
    b.textContent?.includes("Continue"),
  );
  return btn && !btn.disabled;
});
await page.getByRole("button", { name: "Continue" }).click({ force: true });

await page.waitForSelector("#contact-discussion");
await page.getByText("Step 2/3").waitFor();
await page
  .getByLabel("Briefly tell us what you would like to discuss")
  .fill(
    "We are reviewing CCP membership options and want a focused conversation.",
  );
await page.screenshot({
  path: `${outDir}/contact-3step-step2-message.png`,
  fullPage: true,
});
await page.getByRole("button", { name: "Continue" }).click({ force: true });

await page.waitForSelector("#contact-name");
await page.getByText("Step 3/3").waitFor();
await page.getByLabel("Name", { exact: true }).fill("Test User");
await page.getByLabel("Organisation name").fill("SureClear QA");
await page.getByLabel("Phone number").fill("+440000000000");
await page.screenshot({
  path: `${outDir}/contact-3step-step3-details.png`,
  fullPage: true,
});
await page.getByRole("button", { name: "Submit" }).click({ force: true });
await page.getByText("Please complete the captcha").waitFor();
await page.screenshot({
  path: `${outDir}/contact-3step-captcha-validation.png`,
  fullPage: true,
});

const html = await page.content();
const scripts = [
  ...new Set(
    [...html.matchAll(/\/_next\/static\/chunks\/[^"']+\.js/g)].map((m) => m[0]),
  ),
];
let foundDiscussion = false;
let foundWeb3 = false;
for (const s of scripts) {
  const js = await (await fetch(`${base}${s}`)).text();
  if (js.includes("contact-discussion") || js.includes("discussion"))
    foundDiscussion = true;
  if (js.includes("api.web3forms.com")) foundWeb3 = true;
}

const report = {
  uiFlow: "step1 -> step2 message -> step3 details/captcha validation ok",
  foundDiscussion,
  foundWeb3,
};
fs.writeFileSync(
  `${outDir}/contact-3step-proof.json`,
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report, null, 2));
await browser.close();

if (!foundDiscussion || !foundWeb3) process.exit(1);
console.log("ALL CHECKS PASSED");
