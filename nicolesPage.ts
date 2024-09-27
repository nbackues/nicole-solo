import { BasePage } from "./basePage";
import { By } from 'selenium-webdriver';

export class starWars extends BasePage {
    //locators here
    news: By = By.xpath('//span[text()="NEWS + FEATURES"]'); 
    youtube: By = By.xpath('(//li[@class="youtube social-icon"])[1]'); 
    homeBtn: By = By.id('local-nav-logo-desktop'); 
    //constructor here
    constructor() {
        super({url: 'https://www.starwars.com/'});
    };

    //method, could go on basePage but would need update each time
    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000);
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
    };
};