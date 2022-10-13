describe('Handle multiple windows', () => {
    it('should switch tabs/windows',async ()=>{
        await browser.url('https://opensource-demo.orangehrmlive.com/')
        await (await $('img[alt="LinkedIn OrangeHRM group"]')).click()
        await browser.pause(2000)
    })
    
});