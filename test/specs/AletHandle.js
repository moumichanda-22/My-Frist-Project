var assert = require('assert')
describe('Handle Alert', () => {
    it('capture alert',async ()=>{
        await browser.url('https://mail.rediff.com/cgi-bin/login.cgi')
        const button = await $('input[name="proceed"]')
        await button.click();
        const alertText = await browser.getAlertText()
        await browser.pause(2000)
        await browser.acceptAlert()
        await browser.pause(2000)
        assert.deepEqual(alertText,"Please enter a valid user name")

    })
    
});