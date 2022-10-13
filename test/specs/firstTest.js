

describe('Smoke Test',()=>{
    it('Verify Url',async()=>{
        browser.url('https://opensource-demo.orangehrmlive.com/');
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/');
    })
    it('Verify the title',async()=>{
        await expect(browser).toHaveTitle('OrangeHRM');
    })
    it('Verify the login panel and next page',async()=>{
        const el =await $('input[id="txtUsername"]');
        await el.setValue('admin');
        await(await $('#txtPassword')).setValue('admin123');
        await(await $('.button')).click();
        browser.pause('50000')
        await expect(browser).toHaveUrlContaining('dashboard')
        browser.pause('50000');
    })

})