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

await page.goto("http://localhost:3000/home#approach", {
  waitUntil: "domcontentloaded",
});
await page.waitForSelector("#approach .approach-scroll-strip", {
  timeout: 15000,
});
await page.evaluate(() => {
  document.querySelector("#approach")?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(600);

const before = await page.evaluate(() => {
  const strip = document.querySelector(".approach-scroll-strip");
  const track = document.querySelector(".approach-marquee-track");
  const cards = document.querySelectorAll("#approach article");
  const firstTitle = cards[0]?.querySelector("h3")?.textContent ?? "";
  return {
    scrollLeft: strip?.scrollLeft ?? -1,
    maxScroll: (strip?.scrollWidth ?? 0) - (strip?.clientWidth ?? 0),
    cardCount: cards.length,
    hasMarquee: !!track,
    firstTitle,
    animName: strip ? getComputedStyle(strip).animationName : "none",
  };
});

await page.locator("#approach").screenshot({
  path: `${outDir}/approach-manual-scroll-start.png`,
});

// Drag the strip to the right (content moves left).
const box = await page.locator(".approach-scroll-strip").boundingBox();
if (!box) throw new Error("missing scroll strip");
await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5);
await page.mouse.down();
await page.mouse.move(box.x + box.width * 0.25, box.y + box.height * 0.5, {
  steps: 18,
});
await page.mouse.up();
await page.waitForTimeout(400);

const afterDrag = await page.evaluate(() => {
  const strip = document.querySelector(".approach-scroll-strip");
  return {
    scrollLeft: strip?.scrollLeft ?? -1,
  };
});

await page.locator("#approach").screenshot({
  path: `${outDir}/approach-manual-scroll-after-drag.png`,
});

// Wheel should also advance horizontally.
await page.locator(".approach-scroll-strip").hover();
await page.mouse.wheel(0, 420);
await page.waitForTimeout(300);

const afterWheel = await page.evaluate(() => {
  const strip = document.querySelector(".approach-scroll-strip");
  const number = document.querySelector("#approach article span");
  const numCs = number ? getComputedStyle(number) : null;
  return {
    scrollLeft: strip?.scrollLeft ?? -1,
    numberWeight: numCs?.fontWeight ?? "",
    numberColor: numCs?.color ?? "",
    cardBg: getComputedStyle(document.querySelector("#approach article"))
      .backgroundColor,
    sectionBg: getComputedStyle(document.querySelector("#approach"))
      .backgroundImage,
  };
});

await page.locator("#approach").screenshot({
  path: `${outDir}/approach-manual-scroll-after-wheel.png`,
});

const videoPath = await page.video().path();
await context.close();
await browser.close();

const destVideo = `${outDir}/approach-manual-scroll.webm`;
fs.renameSync(videoPath, destVideo);

const ok =
  !before.hasMarquee &&
  before.cardCount === 4 &&
  before.maxScroll > 100 &&
  before.animName === "none" &&
  afterDrag.scrollLeft > before.scrollLeft + 40 &&
  afterWheel.scrollLeft >= afterDrag.scrollLeft &&
  afterWheel.sectionBg.includes("31, 64, 55") &&
  afterWheel.cardBg.includes("11, 18, 32") &&
  afterWheel.numberColor.includes("255, 255, 255") &&
  Number(afterWheel.numberWeight) <= 400;

console.log(
  JSON.stringify(
    { before, afterDrag, afterWheel, video: destVideo, ok },
    null,
    2,
  ),
);

if (!ok) process.exit(1);
console.log("PASS");
