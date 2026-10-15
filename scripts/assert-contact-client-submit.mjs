import fs from "node:fs";
const src = fs.readFileSync("src/components/home/ContactForm.tsx", "utf8");
const checks = [
  [/api\.web3forms\.com\/submit/, "posts to Web3Forms"],
  [/fetch\("\/api\/contact"/, "must NOT post to /api/contact", true],
  [/4e54d961-2c6d-49f4-a382-ce7e909f8763/, "includes public access key fallback"],
  [/h-captcha-response/, "sends hCaptcha token"],
  [/type Step = 1 \| 2 \| 3/, "three-step form"],
  [/contact-discussion/, "message field on step 2"],
  [/Briefly tell us what you would like to discuss/, "discussion prompt copy"],
];
let failed = false;
for (const [re, label, mustBeAbsent] of checks) {
  const hit = re.test(src);
  const ok = mustBeAbsent ? !hit : hit;
  console.log(`${ok ? "PASS" : "FAIL"}: ${label}`);
  if (!ok) failed = true;
}
if (failed) process.exit(1);
