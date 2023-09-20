import { LaunchOptions, chromium, firefox, webkit} from "@playwright/test"

const options: LaunchOptions = {
    headless: false
}

export const requestBrowser = () => {
    const browserType = process.env.BROWSER;
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Browser set not found!");
    }

}