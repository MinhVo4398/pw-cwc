import { expect, type Locator, type Page } from '@playwright/test';

class HomePage {
    readonly page: Page;
    logo: Locator;
    searchButton: Locator;
    searchInput: Locator;
    searchResultsTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator("//img[@class='img-fluid logo']");
        this.searchButton = page.locator('')
        this.searchInput = page.locator('')
        this.searchResultsTitle = page.locator('')
      
      }

      async goto() {
        await this.page.goto('https://www.cricketworld.com/');
      }
    
}

export default HomePage;