describe('login test', () => {
    it('verify url', async () => {
        browser.url('https://www.stealmylogin.com/demo.html')
        await expect(browser).toHaveUrl('https://www.stealmylogin.com/demo.html')
        
    });
    it('login with dummy data and verify the next page and title', async () => {
        await(await $('input[name="username"]')).setValue('moumi');
        await (await $('input[name="password"]')).setValue('moumi123');
        await(await $('input[value="login"]')).click();
        await expect(browser).toHaveUrl('https://example.com/');
        await expect(browser).toHaveTitle('Example Domain');

    });
    
});