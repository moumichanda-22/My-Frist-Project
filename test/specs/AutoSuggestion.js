describe('AutoSuggestions',()=>{

    it(' Click on google autosuggestions',async()=>{
         await browser.url("https://www.google.com/")
         const searchBox = await $('//input[@name="q"]')
         await searchBox.setValue("Mukesh Otwani")
         await browser.pause(2000);

        const allValues = await $$('//ul[@role="listbox"]//li//div[@role="option"]') 
         
        for(let i = 0; i< allValues.length; i++){
            const elements = await allValues[i]
            const value = await elements.getText()
            console.log("Valuse from autosuggestion = ", value) 

            if (value.includes('mukesh otwani youtube')) {
                await elements.click();
                await browser.pause(2000)
                break
                
            }
        }
    })
})