import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel('Login/Logout Flow', () => {
    let loginPage: LoginPage
    let homePage: HomePage

    // Before Hook
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)

        await homePage.visit()
    })

    // Negative Scenario
    test('Negative Scenario for Login', async ({page}) => {
        await homePage.clickOnSignIn()
        await loginPage.login('invalid username', 'invalid password')
        await loginPage.wait(3000)
        await loginPage.assertErrorMessage()

        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
    })

    // Positive Scenario
    test('Positive Scenario for Login', async ({page}) => {
        await homePage.clickOnSignIn()
        await loginPage.login('username', 'password')

        const accountSummaryTab = await page.locator('#account_summary_tab')
        await expect(accountSummaryTab).toBeVisible({ timeout: 10000 }) // Increased timeout to 10 seconds
    })

    // Logout Scenario
    test('Logout Scenario', async ({page}) => {
        await homePage.clickOnSignIn()
        await loginPage.login('username', 'password')

        const accountSummaryTab = await page.locator('#account_summary_tab')
        await expect(accountSummaryTab).toBeVisible({ timeout: 10000 })

        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
    })
    
     // Check Remember Me functionality
     test('Remember Me functionality', async ({page}) => {
        await homePage.clickOnSignIn()
        await loginPage.login('username', 'password') // Assuming the login method accepts a third parameter for "Remember Me"

        const accountSummaryTab = await page.locator('#account_summary_tab')
        await expect(accountSummaryTab).toBeVisible({ timeout: 10000 })

        await page.reload()
        await expect(accountSummaryTab).toBeVisible({ timeout: 10000 }) // Verify user is still logged in after reload
    })
})