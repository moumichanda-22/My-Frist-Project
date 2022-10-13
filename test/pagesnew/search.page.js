
// import Page from "./page";

const { default: Page } = require("./page");
// import Page from '../pagesnew/page'

class SearchPage extends Page{
    
    get searchBar(){
        return $('#gh-ac');
    }
    get searchBtn(){
        return $('#gh-btn');
    }
    // const select = await $('#gh-cat');
    get select(){
        return $('#gh-cat');
    }
    // const selectBox = await $('#gh-cat');
    get selectBox(){
        return $('#gh-cat');
    }

    open(){
        super.open('https://www.ebay.com/');
    }
    performSearch(searchTerm){
        this.searchBar.setValue(searchTerm)
        this.searchBtn.click()
        await expect(searchPage.searchBar).toHaveValue(searchTerm);

    }
    


}
export default new SearchPage();