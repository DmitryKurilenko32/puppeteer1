let page;

beforeEach(async () => {
  
  page = await browser.newPage(); 
  await page.goto("https://github.com/team");
  await page.setDefaultTimeout(); 
});

afterEach(() => {
  page.close();
});

/*describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('Build and ship software on a single, collaborative platform');
  }, 80000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 40000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 30000);
});  */

describe("link create a free organization", () => {
  beforeEach(async () => {
    page2 = await browser.newPage();
    await page2.goto("https://github.com/home");   
    await page2.setDefaultTimeout();
  });

  
  test("The h1 header content page home", async () => {
    const actual = await page2.$eval("#hero-section-brand-heading", (link) => link.textContent);
    console.log(actual);
    await expect(actual).toEqual("Build and ship software on a single, collaborative platform");
    page.close();
  }, 60000);

  test("text button try copilot page home", async () => {
    const actual = await page2.$eval(".Primer_Brand__Button-module__Button___lDruK.Primer_Brand__Button-module__Button--primary___xIC7G.Primer_Brand__Button-module__Button--size-medium___EyCyw.CtaForm-primaryAction.js-hero-action", (link) => link.textContent);
    console.log(actual);
    await expect(actual).toEqual("Try GitHub Copilot");
  }, 30000);
});
