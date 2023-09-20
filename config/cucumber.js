module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features"
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/*.ts",
            "src/helper/"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format:[
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 1
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format:[
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 1
    },
    api: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features"
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/*.ts",
            "src/helper/"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format:[
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 1
    }
}