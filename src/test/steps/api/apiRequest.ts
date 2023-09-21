import {Given,When,Then} from "@cucumber/cucumber"
import {expect,APIRequestContext,request} from "@playwright/test"
import { assertJsonHaveValue, getOKResponse, getTextBodyResponse, getUrlPath } from "../../../helper/api_helper";

Given('user get request booking', async function () {
    await getUrlPath("/booking/1");
});

Then('user should get ok response', async function () {
    getOKResponse();
    assertJsonHaveValue("lastname","Brown");
});

Then('user should get response {string} with value {string}', async function (jsonPath, value) {
    assertJsonHaveValue(jsonPath,value);
});
