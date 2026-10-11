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
await page.waitForSelector("#approach", { timeout: 15000 });
await page.evaluate(() => {
  document.querySelector("#approach")?.scrollIntoView({ block: "center" });
});
await page.waitForFunction(
  () =>
    document
      .querySelector(".approach-marquee-track")
      ?.classList.contains("approach-marquee-running"),
  { timeout: 10000 },
);
await page.waitForTimeout(800);

const section = page.locator("#approach");
await section.screenshot({ path: `${outDir}/approach-green-marquee.png` });

const styles = await page.evaluate(() => {
  const sectionEl = document.querySelector("#approach");
  const track = document.querySelector(".approach-marquee-track");
  const card = document.querySelector("#approach article");
  const number = card?.querySelector("span");
  const cs = getComputedStyle(sectionEl);
  const cardCs = getComputedStyle(card);
  const numCs = getComputedStyle(number);
  const trackCs = getComputedStyle(track);
  return {
    sectionBg: cs.backgroundImage,
    cardBg: cardCs.backgroundColor,
    numberColor: numCs.color,
    numberWeight: numCs.fontWeight,
    trackAnimation: trackCs.animationName,
    trackPlayState: trackCs.animationPlayState,
    hasRunning: track.classList.contains("approach-marquee-running"),
    cardCount: document.querySelectorAll("#approach article").length,
  };
});

console.log("STYLES", JSON.stringify(styles, null, 2));

// Speed up once to observe a full seamless loop within the test window.
await page.addStyleTag({
  content:
    ".approach-marquee-running{animation-duration:8s!important;}",
});
await page.waitForTimeout(100);

const samples = [];
for (let i = 0; i < 40; i++) {
  const t = await page.evaluate(() => {
    const track = document.querySelector(".approach-marquee-track");
    const m = getComputedStyle(track).transform;
    const width = track.getBoundingClientRect().width;
    let tx = 0;
    if (m.startsWith("matrix3d")) {
      const parts = m.slice(9, -1).split(",").map(Number);
      tx = parts[12];
    } else if (m.startsWith("matrix(")) {
      const parts = m.slice(7, -1).split(",").map(Number);
      tx = parts[4];
    }
    return { tx, width, t: performance.now() };
  });
  samples.push(t);
  await page.waitForTimeout(250);
}

// For a seamless -50% loop, a wrap from near -50% width back to ~0 is expected.
// A glitch is a large positive jump that is NOT near a half-width wrap.
let wraps = 0;
let glitches = 0;
let maxNonWrapJump = 0;
for (let i = 1; i < samples.length; i++) {
  const delta = samples[i].tx - samples[i - 1].tx;
  const half = samples[i].width / 2;
  if (delta > 40) {
    const looksLikeWrap =
      samples[i - 1].tx < -half * 0.7 && samples[i].tx > -half * 0.35;
    if (looksLikeWrap) wraps++;
    else {
      glitches++;
      maxNonWrapJump = Math.max(maxNonWrapJump, delta);
    }
  }
}

const first = samples[0].tx;
const mid = samples[Math.floor(samples.length / 2)].tx;
const last = samples[samples.length - 1].tx;
const progressed = samples.some((s, i) => i > 0 && s.tx < samples[0].tx - 50);

console.log(
  "MOTION",
  JSON.stringify(
    {
      first: Math.round(first),
      mid: Math.round(mid),
      last: Math.round(last),
      halfWidth: Math.round(samples[0].width / 2),
      progressed,
      wraps,
      glitches,
      maxNonWrapJump,
      sampleCount: samples.length,
      samples: samples.map((s) => Math.round(s.tx)),
    },
    null,
    2,
  ),
);

await page.waitForTimeout(1500);
const videoPath = await page.video().path();
await context.close();
await browser.close();

const destVideo = `${outDir}/approach-marquee-scroll.webm`;
fs.renameSync(videoPath, destVideo);
console.log("VIDEO", destVideo);

const ok =
  styles.sectionBg.includes("linear-gradient") &&
  styles.sectionBg.includes("31, 64, 55") &&
  styles.cardBg.includes("11, 18, 32") &&
  styles.numberColor.includes("255, 255, 255") &&
  Number(styles.numberWeight) <= 400 &&
  styles.hasRunning &&
  styles.cardCount === 8 &&
  progressed &&
  wraps >= 1 &&
  glitches === 0;

console.log(ok ? "PASS" : "FAIL");
if (!ok) process.exit(1);
