import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const outDir = "/opt/cursor/artifacts";
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1100 },
  deviceScaleFactor: 1,
});

await page.goto("http://localhost:3000/home/about", {
  waitUntil: "networkidle",
});

await page.screenshot({
  path: `${outDir}/about_hero.png`,
  fullPage: false,
});

const story = page.locator("#our-story");
await story.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await story.screenshot({ path: `${outDir}/about_story.png` });

const team = page.locator("#meet-the-team");
await team.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await team.screenshot({ path: `${outDir}/about_team.png` });

await page.screenshot({
  path: `${outDir}/about_full.png`,
  fullPage: true,
});

console.log("Saved about QA screenshots to", outDir);
await browser.close();
