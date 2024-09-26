import { BasePage } from "./basePage";
import { By } from 'selenium-webdriver';

export class Enchant extends BasePage {
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
    Search: By = By.xpath('//input[@name = "q"]');
    
    constructor() {
        super({url: 'https://enchantedlivingmag.com/'});
    };
};