import {expect, Locator, Page} from '@playwright/test'

export class TransferPage{
    readonly page: Page
    readonly transferFromAccount: Locator
    readonly transferToAccount: Locator
    readonly transferAmount: Locator
    readonly transferDescription: Locator
    readonly submitButton: Locator
    readonly successAlert: Locator

    constructor(page:Page){
        this.page = page
        this.transferFromAccount = page.locator('#tf_fromAccountId')
        this.transferToAccount = page.locator('#tf_toAccountId')
        this.transferAmount = page.locator('#tf_amount')
        this.transferDescription = page.locator('#tf_description')
        this.submitButton = page.locator('#btn_submit')
        this.successAlert = page.locator('.alert-success')
    }

    async createTransfer(){
        await this.transferFromAccount.selectOption('2')
        await this.transferToAccount.selectOption('3')
        await this.transferAmount.type('500')
        await this.transferDescription.type('Some message')
        await this.submitButton.click()
    }

    async verifyTransfer(){
        await expect(this.page).toHaveURL('http://zero.webappsecurity.com/bank/transfer-funds-verify.html')
        await this.submitButton.click()
    }

    async assertSuccessMessage(){
        await expect(this.successAlert).toContainText('You successfully submitted your transaction.')
    }
}