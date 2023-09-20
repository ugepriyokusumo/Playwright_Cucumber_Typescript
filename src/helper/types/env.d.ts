export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit" | "safari",
            ENV: "staging", "prod", "test",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}