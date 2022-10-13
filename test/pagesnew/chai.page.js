import Page from "./page";
class ChaiPage extends Page{
    get banner(){
        return  $('.b-promobanner__info');
    }
    get title(){
        return $('.b-promobanner__info-title');
    }
    get link(){
        return $('.b-promobanner__info-btn');
    }
    open(){
        super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535')
    }

}
export default new ChaiPage;