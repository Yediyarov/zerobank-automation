import { test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { TransferPage } from '../../page-objects/TransferPage'
import { Navbar } from '../../page-objects/components/Navbar'
 
test.describe('Transfer funds and make payments', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let transferPage: TransferPage
    let navbar: Navbar

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        transferPage = new TransferPage(page)
        navbar = new Navbar(page)

        await homePage.visit()
        await homePage.clickOnSignIn()
        await loginPage.login('username', 'password')
        
    })
    
    test('Transfer funds', async ({ page }) => {
        await navbar.clickOnTab('Transfer funds')
        await transferPage.createTransfer()
        await transferPage.verifyTransfer()
        await transferPage.assertSuccessMessage()
    })
    
})
