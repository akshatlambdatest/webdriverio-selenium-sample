const assert = require("assert");

describe("Google Search Function", () => {
    it("can find search results", async () => {
        await browser.url("https://duckduckgo.com/");
        await browser.setupInterceptor();
        const input = await $('[name="q"]');
        input.setValue("test123");

        const title = await browser.getTitle();
        assert.equal(title, "DuckDuckGo — Privacy, simplified.");
    });
});
