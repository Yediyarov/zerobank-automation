import { test } from '@playwright/test';
import { FeedbackPage } from '../../page-objects/FeedbackPage';
import { HomePage } from '../../page-objects/HomePage';

test.describe('Feedback form', () => {
    let homePage: HomePage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)
        await homePage.visit()
        await homePage.clickOnFeedbackLink()
    })

    // Reset feedback form
    test('Reset feedback form', async () => {
        await feedbackPage.fillForm('John', 'john@test.com', 'Test', 'Test')
        await feedbackPage.resetForm()

        await feedbackPage.assertReset()
    })
});