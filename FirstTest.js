describe('Smoke Test ', () => {
    it('verify the url', async () => {
        browser.url('https://opensource-demo.orangehrmlive.com/');
        // console.log('Session Id',browser.sessionId);
        // console.log("Capabilities",browser.capabilities);
        // console.log("Trainer name is",browser.config.trainerName); 
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/');
        
    });
    it('verify the title',async ()=>{
        await expect(browser).toHaveTitle('OrangeHRM');

    })
    it('verify login ',async ()=>{
        const el = await $('#txtUsername');
        await el.setValue('admin');
        await (await $('#txtPassword')).setValue('admin123');
        const em = await $('#btnLogin');
        await em.click();
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/index.php/dashboard');
 

    })

});