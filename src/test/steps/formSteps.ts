import {Given,When,Then} from "@cucumber/cucumber"
import {expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

Given('user go to application web', async function () {
   await pageFixture.page.goto(process.env.BASEURL);
  });
  
Given('user click on the completed web form link', async function () {
     await pageFixture.page.locator("(//a[contains(text(),'Complete')])[2]").click();
  });

When('user fill first name with {string}', async function (first_name) {
     await pageFixture.page.locator("#first-name").type(first_name);
  });
  
When('user fill last name with {string}', async function (last_name) {
    await pageFixture.page.locator("#last-name").type(last_name);
  });
  
When('user fill job title with {string}', async function (job_title) {
    await pageFixture.page.locator("#job-title").type(job_title);
  });
  
When('user click level education', async function () {
    await pageFixture.page.locator("#radio-button-3").click();
  });
  
When('user click male gender', async function () {
    await pageFixture.page.locator("#checkbox-1").click();
  });
  
When('user click submit button', async function () {
    await pageFixture.page.locator("//*[text()='Submit']").click();
  });
  
Then('user verify The form was successfully submitted', async function () {
    const successPage = await pageFixture.page.locator(".alert-success");
    expect(successPage).toBeVisible;
    const successText = await pageFixture.page.locator(".alert-success").textContent();
    expect(successText).toContain("The form was successfully submitted!");
  });