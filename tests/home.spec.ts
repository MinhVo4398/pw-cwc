import { expect, test } from "@playwright/test";
import HomePage from "../pages/home.page";

test("Verify the url and the logo", async ({ page }) => {
  let homePage: HomePage;
  homePage = new HomePage(page);
  await homePage.goto();
  expect(page.url()).toContain("cricket");
  await expect(homePage.logo).toBeVisible();
});

test("Search and Verify new url and heading", async ({ page }) => {
  await page.goto("https://www.cricketworld.com/");
  await page.getByRole("button", { name: "AGREE" }).first().click();

  await page.locator("//a[@class='search-link']").click();
  const searchInput = await page.locator(
    "(//input[@id='appendedInputButton'])[2]"
  );

  await searchInput.fill("India");
  await searchInput.press("Enter");
  expect(page.url()).toContain("/search/?q=India");
  await expect(page.locator("//div[@class='column_one']//h2")).toHaveText(
    'Search Results for "India"'
  );
});

test("Verify menu tab and link", async ({ page }) => {
  await page.goto("https://www.cricketworld.com/");

  const menuTabs = [
    "Live Scores",
    "Live",
    "Betting",
    "News",
    "Photos",
    "TV",
    "Women",
    "Countries",
    "County Cricket 2024",
    "Features",
    "Club",
    "Groundcare",
  ];

  const listItems = page.locator(
    "//ul[@class='etoz-slide']//li//a[contains(@href,'cricket')]//span"
  );
  console.log(await listItems.allInnerTexts());
  expect(await listItems.allInnerTexts()).toEqual(menuTabs);
});
