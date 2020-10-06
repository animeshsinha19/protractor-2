const { browser } = require("protractor");

describe('Wait on non angular page', function() {

    let url = 'https://app.thoughttrace.dev/qa';

    it('login is successful', function() {

        browser.waitForAngularEnabled(false);

        browser.get(url);
        browser.manage().window().maximize();

        // console.log(element(by.css('input[title="Search"]')).isDisplayed());

        browser.wait(() => {
            return browser.isElementPresent(element(by.css('button[class="auth0-lock-submit"]')));
        }, 5000);

        console.log("Hello world!");
        /*// Waits are not getting captured
        browser.wait(function () {
            return element(by.css('div[type="email"]')).isDisplayed();
        });

        browser.wait(function () {
            return element(by.css('div[type="password"]')).isDisplayed();
        });

        browser.wait(function () {
            return element(by.buttonText('button=[class="auth0-lock-submit"]')).isDisplayed();
        });

        element(by.css('div [type="email"]')).sendKeys(userName);
        element(by.css('div [type="password"]')).sendKeys(password);
        element(by.buttonText('button=[class="auth0-lock-submit"]')).click();

        expect(browser.getTitle()).toEqual('ThoughtTrace');*/

    });
});