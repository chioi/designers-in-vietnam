const puppeteer = require("puppeteer");

describe("renders without crashing", () => {
  let browser;
  let title;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      executablePath: "google-chrome-unstable",
      headless: true
    });
    page = await browser.newPage();
  }, 40000);

  test("There is a title", async () => {
    await page.goto("http://designers-of-vietnam-prod", { waitUntil: "load" });
    title = await page.waitForSelector("title");
    const titleText = await page.evaluate(
      () => document.querySelector("title").innerText
    );
    expect(title).toBeDefined();
    expect(titleText).toEqual("Designers of Vietnam");
  }, 60000);

  afterAll(async () => {
    await browser.close();
  });
});
