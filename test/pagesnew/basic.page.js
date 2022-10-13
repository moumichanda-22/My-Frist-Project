import Page from "./page";

class basic extends Page{
    open(){
        super.open('https://webdriver.io/');
    }

}
export default new basic();