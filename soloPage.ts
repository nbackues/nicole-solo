import { BasePage } from "./basePage";
import { By } from 'selenium-webdriver';
const fs = require('fs')

export class enchantedLiving extends BasePage {
    signUpClose: By = By.xpath('//a[@class = "fancyboxPop-item fancyboxPop-close-pop"]');
    jewelryMenu: By = By.xpath('(//span[@class = "exp"])[3]');
    braceMenu: By = By.xpath('(//a[text() = "BRACELETS"])[2]');
    blueResBrace: By = By.xpath('//div[text() = "Blue Flower Resin Bracelet"]');
    addToCart: By = By.xpath('(//input[@class = "addtocart cartbutton"])[1]');
    shopCart: By = By.xpath('//a[@class = "button"]');
    quantity: By = By.xpath('//input[@class = "select-on-focus"]');
    updateCart: By = By.xpath('//input[@name = "update"]');
    stickers: By = By.xpath('//a[text() = "Stickers"]');
    stickerBookKing: By = By.xpath('//div[text() = "Faerie Kingdom Sticker Book"]');
    checkOut: By = By.xpath('//input[@class = "altaltcolour bold_ro_checkout"]');
    enamelPins: By = By.xpath('//a[text() = "Enamel Pins"]');
    midMargPin: By = By.xpath('(//a[@class = "image-link "])[3]');
    keepShop: By = By.id('shop-more');
    stickerBookCelest: By = By.xpath('//div[text() = "Celestial Wonders Sticker Book"]');
    shopCartCount: By = By.xpath('//a[@class = "cart-count button"]');
    brewPin: By = By.xpath('//div[text() = "Brewing Mischief enamel pin"]');
    previous: By = By.xpath('//a[@class = "control-prev"]');
    next: By = By.xpath('//a[@class = "control-prev"]');
    search: By = By.xpath('//input[@name = "q"]');
    facebook: By = By.xpath('//li[@class = "facebook"]');
    twitter: By = By.xpath('//li[@class = "twitter"]');
    pinterest: By = By.xpath('//li[@class = "pinterest"]');
    instagram: By = By.xpath('//li[@class = "instagram"]')
    tumblr: By = By.xpath('//li[@class = "tumblr"]');

    
    constructor() {
        super({url: 'https://enchantedlivingmag.com/'});
    };
    async number(quantityNumber: string) {
        return this.setInput(this.quantity, `${quantityNumber}`);
    };
    async find(text: string) {
        return this.setInput(this.search, `${text}\n`);
    };
    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1000); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    };
};