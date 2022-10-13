

// import 'chai/register-expect';
// import 'chai/register-should';
// import 'chai/register-assert';
// import chaiPage from '../pagesnew/chai.page';
// import searchPage from "../pagesnew/search.page";



// describe('Chai Example', () => {

//    it('should display first banner', async() => {
//     //await browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
//       searchPage.open();
//     //   const banner = await $('.b-promobanner__info');
//       console.log(await chaiPage.banner.isDisplayed);
//    });


//    it('should banner have the title', async() => {
//     //   const title = await $('.b-promobanner__info-title');
//       const titleText = await chaiPage.title.getText();
//       await expect(titleText).to.not.be.empty;
//       await titleText.should.not.be.empty;
//       await assert.isNotEmpty(titleText);

//    });  
   
//    it('should have link on banner button and it clickable',async () => {
//     //   const link = await $('.b-promobanner__info-btn');
//       const tag = await chaiPage.link.getTagName();
//       await expect(tag).to.equal('a');
//       console.log(await chaiPage.link.isClickable);
//       await tag.should.be.equal('a' );
//       await assert.equal(tag,'a');
//    });


//     it('should click the link and verify the new url',async () => {
//     //    const link = await $('.b-promobanner__info-btn');
//        await chaiPage.link.click;
//        await browser.url('https://www.ebay.com/e/fashion/luxe-watches-holiday-110121');
//        await expect(browser).to.exist;
      
//     });


// });