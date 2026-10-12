import { chromium } from "playwright";
import fs from "node:fs";

const outDir = "/opt/cursor/artifacts";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: outDir, size: { width: 1440, height: 900 } },
});
const page = await context.newPage();

await page.goto("http://localhost:3000/home", {
  waitUntil: "domcontentloaded",
});
await page.waitForSelector("#approach .approach-scroll-strip", {
  timeout: 15000,
});
await page.evaluate(() => {
  document.querySelector("#approach")?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(700);

const before = await page.evaluate(() => {
  const strip = document.querySelector(".approach-scroll-strip");
  const track = strip?.querySelector(":scope > div");
  const cards = [...document.querySelectorAll("#approach article")];
  const first = cards[0]?.getBoundingClientRect();
  const last = cards[cards.length - 1]?.getBoundingClientRect();
  const cta = document.querySelector(".approach-scroll-cta");
  const contact = document.querySelector("#contact");
  const approach = document.querySelector("#approach");
  return {
    scrollLeft: strip?.scrollLeft ?? -1,
    cardCount: cards.length,
    firstLeft: first?.left ?? -1,
    lastRight: last?.right ?? -1,
    viewport: window.innerWidth,
    hasCta: !!cta,
    ctaDisabled: cta?.hasAttribute("disabled") ?? true,
    approachHasBlend: (approach?.className || "").includes("approach-section"),
    contactBg: contact ? getComputedStyle(contact).backgroundColor : "",
    contactHeading: contact?.querySelector("h2")?.textContent?.trim() || "",
  };
});

await page.locator("#approach").screenshot({
  path: `${outDir}/approach-offset-arrow-start.png`,
});

await page
  .getByRole("button", { name: "Show the final process step" })
  .click({ force: true });
await page.waitForFunction(() => {
  const strip = document.querySelector(".approach-scroll-strip");
  return (strip?.scrollLeft ?? 0) > 40;
}, null, { timeout: 5000 });
await page.waitForTimeout(700);

const afterClick = await page.evaluate(() => {
  const strip = document.querySelector(".approach-scroll-strip");
  const cards = [...document.querySelectorAll("#approach article")];
  const last = cards[cards.length - 1]?.getBoundingClientRect();
  const cta = document.querySelector(".approach-scroll-cta");
  return {
    scrollLeft: strip?.scrollLeft ?? -1,
    lastRight: last?.right ?? -1,
    viewport: window.innerWidth,
    lastFullyInView:
      !!last && last.left >= 0 && last.right <= window.innerWidth + 2,
    ctaDisabled: cta?.hasAttribute("disabled") ?? false,
  };
});

await page.locator("#approach").screenshot({
  path: `${outDir}/approach-offset-arrow-after-click.png`,
});

await page.evaluate(() => {
  document.querySelector("#contact")?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(400);
await page.locator("#contact").screenshot({
  path: `${outDir}/contact-cta-white-blend.png`,
});

const videoPath = await page.video().path();
await context.close();
await browser.close();

const destVideo = `${outDir}/approach-offset-arrow.webm`;
fs.renameSync(videoPath, destVideo);

const ok =
  before.cardCount === 4 &&
  before.scrollLeft === 0 &&
  before.firstLeft > 120 &&
  before.hasCta &&
  before.approachHasBlend &&
  before.contactBg.includes("245, 244, 239") &&
  afterClick.scrollLeft > before.scrollLeft + 80 &&
  afterClick.lastRight <= afterClick.viewport + 4;

console.log(JSON.stringify({ before, afterClick, video: destVideo, ok }, null, 2));
if (!ok) process.exit(1);
console.log("PASS");
