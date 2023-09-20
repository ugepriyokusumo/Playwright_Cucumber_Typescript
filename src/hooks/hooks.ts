import {BeforeAll, AfterAll, Before, After, Status} from "@cucumber/cucumber"
import {chromium,Page,Browser, BrowserContext} from "@playwright/test"
import { pageFixture } from "./pageFixture";
import { requestBrowser } from "../helper/browsers/browserOptions";
import { getEnv } from "../helper/env/env";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await requestBrowser();
});

Before(async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
})

After(async function ({pickle, result}) {
    //Screenshot purpose if scenario failed
    if (result?.status == Status.FAILED) {
        const image = await pageFixture.page.screenshot({path:`./test-results/screenshots/${[pickle.name]}.png`, type: "png"})
        await this.attach(image, "image/png");
    }

    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
})