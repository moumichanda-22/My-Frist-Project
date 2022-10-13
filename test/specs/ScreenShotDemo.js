describe('Screen shot of Wdio page',()=>{
    it('should take a screen shot of the page ', async function () {

        await browser.url('https://webdriver.io/docs/api/element/saveScreenshot/')
        await browser.saveScreenshot('./wdio.png')

    });

})
