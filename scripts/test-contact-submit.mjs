import { chromium } from "playwright";
import fs from "node:fs";

const base = "http://127.0.0.1:3001";
const outDir = "/opt/cursor/artifacts";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto(`${base}/contact`, { waitUntil: "networkidle" });
await page.screenshot({ path: `${outDir}/contact-form-fix-step1.png`, fullPage: true });

await page.getByLabel("What challenge would you like to discuss?").selectOption("Clearing strategy");
await page.getByLabel("Work email address").fill("test@example.com");
await page.waitForFunction(() => {
  const btn = [...document.querySelectorAll("button")].find((b) =>
    b.textContent?.includes("Continue"),
  );
  return btn && !btn.disabled;
});
await page.screenshot({ path: `${outDir}/contact-form-fix-step1-ready.png`, fullPage: true });
await page.getByRole("button", { name: "Continue" }).click({ force: true });
await page.waitForSelector("#contact-name");
await page.getByLabel("Name", { exact: true }).fill("Test User");
await page.getByLabel("Organisation name").fill("SureClear QA");
await page.getByLabel("Phone number").fill("+440000000000");
await page.screenshot({ path: `${outDir}/contact-form-fix-step2.png`, fullPage: true });
await page.getByRole("button", { name: "Submit" }).click({ force: true });
await page.getByText("Please complete the captcha").waitFor();
await page.screenshot({
  path: `${outDir}/contact-form-fix-captcha-validation.png`,
  fullPage: true,
});

const html = await page.content();
const scripts = [
  ...new Set(
    [...html.matchAll(/\/_next\/static\/chunks\/[^"']+\.js/g)].map((m) => m[0]),
  ),
];
let foundWeb3 = false;
let foundApi = false;
let web3Snippet = "";
for (const s of scripts) {
  const js = await (await fetch(`${base}${s}`)).text();
  if (js.includes("api.web3forms.com")) {
    foundWeb3 = true;
    const idx = js.indexOf("api.web3forms.com");
    web3Snippet = js.slice(Math.max(0, idx - 40), idx + 50);
  }
  if (js.includes('fetch("/api/contact"') || js.includes("fetch('/api/contact'"))
    foundApi = true;
}

const report = { bundleCheck: { foundWeb3, foundApi, web3Snippet }, uiFlow: "step1->step2->captcha validation ok" };
fs.writeFileSync(`${outDir}/contact-submit-proof.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
if (!foundWeb3 || foundApi) process.exit(1);
console.log("ALL CHECKS PASSED");
