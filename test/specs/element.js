
describe('Elements comands',()=>{
    it('Filling form',async ()=>{
        await browser.url('https://opensource-demo.orangehrmlive.com/');

        await browser.maximizeWindow();

        const userName = await $('input[id="txtUsername"]');

        await userName.setValue('admin');

        await browser.pause(3000); 

        await userName.clearValue();

        await browser.pause(3000);

        await userName.setValue('admin' );

        const value= await userName.getValue();
        console.log("value added to user name is ",value);
        
        const loginStatus = await $('//input[@id= "btnLogin"]')

        const isClickable = await loginStatus.isClickable();
        console.log('Clikable?',isClickable);

        // const isEnable = await loginStatus.isEnable();
        // console.log("Enable?",isEnable);

        const isDisplayed = await loginStatus.isDisplayed();
        console.log("Displayed?",isDisplayed);

        await expect(loginStatus).toBeClickable();
        // await expect(loginStatus).toBeEnable();
        await expect(loginStatus).toBeDisplayed();

        const loginBtnValue = await loginStatus.getAttribute('value');
        console.log('log in value',loginBtnValue);
        // await expect(loginStatus).toHaveAtrribute('value')

        const color = await loginStatus.getCSSProperty('color')
        console.log('login color is ',color)
        
         
        const text = await $('a[href="/index.php/auth/requestPasswordResetCode"]')
        const link = await text.getText();

        console.log('Text from the link ',link); 
         
        // await expect(link).toHaveTextContaining('Forgot ')

    })
})