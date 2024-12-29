import {test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel('Search Flow', () => {
    let homePage: HomePage

    // Before Hook
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        await homePage.visit()
    })

    // Search for a valid term
    test('Search for a valid term', async ({page}) => {
        const searchedPhase = 'bank'
        await homePage.searchFor(searchedPhase)
        await homePage.wait(3000)

        const expectedText = `The following pages were found for the query: ${searchedPhase}`
        await expect(page.getByText(expectedText)).toBeVisible();
    })

    // Search for an invalid term
    test('Search for an invalid term', async ({page}) => {
        const searchedPhase = 'invalid search term'
        await homePage.searchFor(searchedPhase)
        await homePage.wait(3000)

        const expectedText = `No results were found for the query: ${searchedPhase}`
        await expect(page.getByText(expectedText)).toBeVisible();
        
    })
})