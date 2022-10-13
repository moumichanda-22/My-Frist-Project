var assert = require('assert')
describe('Dynamic Wait',()=>{

    it('should wait for text', async  ()=> {

        await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1')
        await browser.maximizeWindow()

        const button = await $("#start > button")
        await button.click();

        const displayedText = await $('#finish > h4')
         console.log('The text is ',await displayedText.isDisplayed())

         await displayedText.waitForDisplayed({timeout:20000})
        //  await displayedText.waitForDisplayed({reverse:true});
         
        //  assert.equal(await displayedText.isDisplayed(),true);
        
        
    });
})
