import Page from "./page";
class WatchesPage extends Page{
    // const banner = await $('.b-promobanner__info');
    get banner(){
        return $('.b-promobanner__info');
    }
    // const text = await $('.b-promobanner__info-title');
    get text(){
        return $('.b-promobanner__info-title');
    }
    // const link = await $('.b-promobanner__info-btn');
    get link(){
        return $('.b-promobanner__info-btn ');
        
    }
    get watchCategory(){
        return $$('section[id="s0-16-12-0-1[0]-0-0"] ul li');
    }
    open(){
        super.open('/b/Watches-Parts-Accessories/260324/bn_2408535');
    }
    getwatchCategoryText(){
        const watchList = [];
        this.watchCategory.map((element) => 
        watchList.push(element.getText()))
        return
    }
}
export default new WatchesPage(); 