exports.config = {
    services: [
        [
            "lambdatest",
            {
                tunnel: false,
                lambdatestOpts: {
                    logFile: "tunnel.log",
                },
            },
        ],
        "intercept",
    ],
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    buildName: process.env.LT_BUILD_NAME,
    specs: ["./tests/specs/single_test.js"],
    exclude: [],

    capabilities: [
        {
            "LT:Options": {
                browserName: "safari",
                browserVersion: "14.1",
                os: "OS X",
                osVersion: "Big Sur",
                "safari.cookies": true,
                version: "latest",
                name: "Test WebdriverIO Single",
                build: "WebDriver Selenium Sample",
            },
        },
    ],
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    waitforTimeout: 100000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    path: "/wd/hub",
    hostname: "hub.lambdatest.com",
    port: 80,
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
    },
};
