const puppeteer = require("puppeteer");

describe("renders without crashing", () => {
  let browser;
  let titleImage;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true
    });
    const page = await browser.newPage();
    await page.goto("http://designers-of-vietnam-prod");
    titleImage = await page.waitForSelector(".title-image");
  });

  test("There is a title image", async () => {
    expect(titleImage).toBeDefined();
  });

  afterAll(async () => {
    await browser.close();
  });
});
