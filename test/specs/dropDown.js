const assert = require('assert')

describe('Handle dropdowns', ()=>{
    it('Select DOB place', async ()=>{
       await browser.url('https://www.facebook.com/')
       const creatNewAccount = await $('//a[text()="Create new account"]')
       await creatNewAccount.click();
       await browser.pause(2000);

       const monthDD = await $('#month')
       await monthDD.selectByVisibleText('Oct');
       const selectValue = await monthDD.getValue()
       console.log("Value is ",selectValue)
       await assert.equal(selectValue,'10')
       await browser.pause(2000)


       const dayDD = await $('#day')
       await dayDD.selectByIndex(6);
       const selectDay = await dayDD.getValue();
       await assert.equal(selectDay,'7')
       await browser.pause(2000);


       const yearDD = await $('#year')
       await yearDD.selectByAttribute('value',2011)
       const selectYear = await yearDD.getValue()
       await assert.equal(selectYear,'2011')
       await browser.pause(3000)


    })
})