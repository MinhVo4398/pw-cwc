import { expect, test } from "@playwright/test";

test("Verify the url and the logo", async ({ page }) => {
  await page.goto("https://www.cricketworld.com/");
  expect(page.url()).toContain("cricket");
  await expect(page.locator("//img[@class='img-fluid logo']")).toBeVisible();
});

test("Search and Verify new url and heading", async ({ page }) => {
    await page.goto("https://www.cricketworld.com/");
    await page.getByRole('button', {name:'AGREE'}).first().click();
    
    await page.locator("//a[@class='search-link']").click();
    const searchInput = await page.locator("(//input[@id='appendedInputButton'])[2]");

    await searchInput.fill('India');
    await searchInput.press('Enter');
    expect(page.url()).toContain("/search/?q=India");
    await expect(page.locator("//div[@class='column_one']//h2")).toContainText('India');
  });
  
