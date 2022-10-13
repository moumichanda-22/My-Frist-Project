import {Given, Then, When} from "cucumber";
Given(/^I have a "([^"]*)" with a "([^"]*)"$/, function (fruit, value) {
    const item = new Map
    item.set(fruit, value)
});
When(/^I enter the "([^"]*)" of fruit sold$/, function () {

});
Then(/^I should get total amount of sale$/, function () {

});
