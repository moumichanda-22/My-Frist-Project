describe('Selenium Test',function (){

    it('should fiil up the name text box', async function () {
        await browser.maximizeWindow()
        await browser.url("https://seleniumpractise.blogspot.com/search?q=how+to+work+with+disable+password")
        const firstName = await $('input[id="fname"]')
        await firstName.setValue('Moumi')
       
    });

    it('should detect the disable password box', async function () {
        const showMeBtn = await $('input[value="Show me"]')
        await showMeBtn.click()
        const password = await $('input[id="passnew"]')
        await password.waitForEnabled({timeout:16000})
        await password.setValue('Chanda')
        await browser.pause(1000)

    });

    it('should submit the result and verfity the upcoming page',async ()=>{
        const submit = await $('input[value="Submit"]')
        await submit.click()

        const nextPageTitle = await $('h1[class="title"]')
        await expect(nextPageTitle).toHaveTitle('Selenium Practise')
        await browser.pause(2000)
    })
})
