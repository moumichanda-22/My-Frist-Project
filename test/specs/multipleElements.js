var assert = require('assert');

describe('Find multiple elements',()=>{
    it('count number of icons',async()=>{
         await browser.url('https://opensource-demo.orangehrmlive.com/')
         await browser.maximizeWindow();
         const numberIcons = await $$('//div[@id="social-icons"]//img')
         console.log("length of icons",numberIcons.length); 
        assert.strictEqual(numberIcons.length,4,'count mismatched')
    })

     it('click on the twiter',async ()=>{
         await browser.url("https://opensource-demo.orangehrmlive.com/")
         const numberIcons = await $$('//div[@id="social-icons"]//img') 

         for(let i = 0; i<=numberIcons.length; i++){

             console.log('values from images',await numberIcons[i].getAttribute('alt'));

             if( await numberIcons[i].getAttribute('alt') === "OrangeHRM on twitter"){
                 await numberIcons[i].click();
                 await browser.pause(5000)
                 break
             }
         }
     })
    it('click on youtube',async () => {
        await browser.url("https://opensource-demo.orangehrmlive.com/")
        const icons = await $$('//div[@id="social-icons"]//img')

         for(let i =0;i<=icons.length;i++){
             const youtube = await icons[i].getAttribute('alt')
             console.log(youtube);
            
             if( youtube === "OrangeHRM on youtube"){
                 await icons[i].click();
                 await browser.pause(5000);
                 break
             }
         }   
    });
    it('click on the facebook',async () => {
        await browser.url("https://opensource-demo.orangehrmlive.com/")
        const facebook = await $$('//div[@id="social-icons"]//img')

        for (let i =0;i <=facebook.length;i++) {
            const facebookOne = await facebook[i].getAttribute('alt');
            console.log(facebookOne)

            if (facebookOne  === "OrangeHRM on Facebook") {
                await facebook[i].click()
                await browser.pause(5000)
                break
                
            }   
        }         
    });
    it('click on the LinkdIn',async ()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com/")
        const linkdIn = await $$('//div[@id="social-icons"]//img')

        for (let i =0;i<= linkdIn.length;i++){
            const linkedInOne = await linkdIn[i].getAttribute('alt');
            console.log(linkedInOne)
            
            if (linkedInOne === "LinkedIn OrangeHRM group") {
                await linkdIn[i].click();
                await browser.pause(5000)
                break
                
            }

        }

    })

})