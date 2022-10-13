describe('wait until example', () => {
    it('should wait for text example', async () => {
        await browser.url("https://seleniumpractise.blogspot.com/search?q=how+to+use+explicit+wait+")

        const timerButton = await $("//button[text()='Click me to start timer']")
        await timerButton.click();

        const text = await $('p[id="demo"]')
        await text.waitUntil(
            async ()=>{
                return (await text.getText()) === "WebDriver"
            },
            {timeout:20000,timeoutMsg : 'text is not gettong displayed'}
        )
        
    });
    
});