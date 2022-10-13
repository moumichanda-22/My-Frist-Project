// describe('login test',()=>{
    
//     it('Verify the Url',async()=>{
//         browser.url('https://www.stealmylogin.com/demo.html')
//         await expect(browser).toHaveUrl('https://www.stealmylogin.com/demo.html')
//     })
//     it('Verify the title',async()=>{
//         await expect(browser).toHaveTitle('StealMyLogin.com Demo')
//     })
//     it('user should be able to log in',async()=>{
//         await(await $('input[name="username"]')).setValue('moumi');
//         await(await $('input[name="password"]')).setValue('moumi123');
//         await(await $('input[value="login"]')).click();
//         await expect(browser).toHaveTitle('Example Domain')
        
//     })
//     it('go back to the 1st page and click on the link',async () => {
//         browser.back();
//         const link = await $('/html/body/div/p[3]/a');
//         await link.click
//         // await expect(browser).toHaveUrl('body > div > p:nth-child(3) > a');  
//     });
//     it('click on godaddy and verify the next page',async()=>{
//         // await(await $('a[href="http://www.godaddy.com/"]')).click();
//         await browser.click('=godaddy')
//         await expect(browser).toHaveTitle('Domain Names, Websites, Hosting & Online Marketing Tools - GoDaddy');
//     })
//     it('search domain name',async () => {
//         await (await $('input[class="searchInput form-control    "]')).setValue('testDomain')
//         await (await $('button[class="btn btn-search bg-teal-550  "]')).click();
        
//     });
//     it('Verify that buy it now button visible', async() => {
//         const elem = await $('//*[@id="exact-match"]/div/div/div/div/div/p/span');
//         console.log(await elem.getText());
//         // await $('#exact-match > div > div > div > div > div > p > span').getText()
//         // const el = await $('')
//     });    

    
    
    
// })