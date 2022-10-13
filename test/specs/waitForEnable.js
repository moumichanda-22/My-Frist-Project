describe("Dynamic Enable",()=>{
    it('should check the type box is enable ',async function(){
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
        await browser.maximizeWindow()

        const inputType = await $('//input[@type="text"]')
        console.log('Enable status before ', await inputType.isEnabled())

        
        const enableBtn = await $('//button[text()="Enable"]')
        await enableBtn.click();

        
        await inputType.waitForEnabled()

        console.log('Enable status after ',await inputType.isEnabled())
        await inputType.setValue('Moumi');

        await browser.pause(2000)
       




    })
})