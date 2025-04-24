const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:5173"); // or your dev server URL
  await page.setViewport({ width: 1200, height: 800 });
  await page.waitForSelector("canvas"); // wait for the canvas to render
  await page.screenshot({ path: "screenshot.png" });
  await browser.close();
})();
