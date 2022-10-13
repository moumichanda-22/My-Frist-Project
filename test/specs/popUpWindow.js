// in dummy software website, click on safe new window and
//in the pop up window click on product and write down the number of products are available
var assert = require('assert')
describe('PopUp Window', () => {
    it('should go to the dummy website and click on safe new window', async () => {

        await browser.url('http://www.dummysoftware.com/popupdummy_testpage.html')

        // const parentWindow = browser.getWindowHandle();
        await(await $('input[name="PushButton"]').click();
        await browser.pause(5000)
        let childWindows = browser.getWindowHandles();
        for (let i=0; i<childWindows.length; i++){

            if ( await childWindows[i] !== parent ){
                await browser.switchToWindow(childWindows[i])}
            break
        }
                let maximize = await browser.maximizeWindow();
                // const productBar = await $(//td//a//img[@name="Image10"])
                // await productBar.click();
                await browser.pause(5000)
                const allProducts = await $$('//form//tbody//tr//td[@class="productslink"]')
                console.log('Numbers of products = ',allProducts.length)
                assert.deepEqual(allProducts,25)




    });
});
