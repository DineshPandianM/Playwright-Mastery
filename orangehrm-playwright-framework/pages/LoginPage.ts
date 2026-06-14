import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async login(username: string, password: string) {
        await this.page.locator('[placeholder="Username"]').fill('Admin');
        await this.page.locator('[placeholder="Password"]').fill('admin123');
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}