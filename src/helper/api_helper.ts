import {expect,APIRequestContext,request} from "@playwright/test"
import { getEnv } from "../helper/env/env";

var apiContext : APIRequestContext;
var responseCode: number;
var responseTextBody: Promise<string>;

export const getUrlPath = async (urlPath: string) => {
    getEnv();

    apiContext = await request.newContext();
    const response = apiContext.get(process.env.BASEURL+urlPath);

    responseCode = (await response).status();
    responseTextBody = (await response).text();
}

export const getOKResponse = async () => {
    expect(responseCode).toBe(200);
    console.log(responseCode);
}

export const getTextBodyResponse = async () => {
    // print responseBody Test
    responseTextBody.then(function(text) {
        console.log(text)
     })
}

export const assertJsonHaveValue= async (jsonPath: any,value: string) => {
    const​​ respBody​​ =​​ JSON.parse(await responseTextBody);
    expect(respBody[jsonPath]).toBe(value)
}