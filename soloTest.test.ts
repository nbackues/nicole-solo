import { enchantedLiving } from "./soloPage";
const el = new enchantedLiving();
const fs = require('fs')

test('adding item to cart', async() => {
    await el.navigate();
    await el.driver.sleep(2000);
    await el.click(el.signUpClose);
    await el.click(el.jewelryMenu);
    await el.click(el.braceMenu);
    await el.driver.sleep(2000);
    await el.scrollToElement(el.blueResBrace);
    await el.click(el.blueResBrace);
    await el.click(el.addToCart);
    await el.click(el.shopCart);
    await fs.writeFile(`${__dirname}/itemInCart.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
        //await el.driver.quit()
});

test('edit cart items', async() => {
    await el.navigate();
    await el.click(el.jewelryMenu);
    await el.click(el.braceMenu);
    await el.driver.sleep(2000);
    await el.scrollToElement(el.blueResBrace);
    await el.click(el.blueResBrace);
    await el.click(el.addToCart);
    await el.click(el.shopCart);
    await el.click(el.quantity);
    await el.number('2');
    await el.click(el.updateCart);
    await el.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/quantityUpdate.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
    //await el.driver.quit();
});

test('cart count matches items in cart', async() => {
    await el.navigate();
    await el.click(el.jewelryMenu);
    await el.click(el.braceMenu);
    await el.driver.sleep(2000);
    await el.scrollToElement(el.blueResBrace);
    await el.click(el.blueResBrace);
    await el.click(el.addToCart);
    await el.click(el.shopCart);
    await el.click(el.quantity);
    await el.number('2');
    await el.click(el.updateCart);
    await el.click(el.stickers);
    await el.click(el.stickerBookKing);
    await el.click(el.addToCart);
    await el.click(el.shopCart);
    await fs.writeFile(`${__dirname}/cartCount.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
    //await el.driver.quit()
});

test('checking out', async() => {
    await el.navigate();
    await el.click(el.jewelryMenu);
    await el.click(el.braceMenu);
    await el.driver.sleep(2000);
    await el.scrollToElement(el.blueResBrace);
    await el.click(el.blueResBrace);
    await el.click(el.addToCart);
    await el.click(el.shopCart);
    await el.click(el.checkOut);
    await fs.writeFile(`${__dirname}/checkOut.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
});
    //await el.driver.quit()
});

test('shopping cart button', async() => {
    await el.navigate();
    await el.click(el.enamelPins);
    await el.click(el.midMargPin);
    await el.click(el.addToCart);
    await el.click(el.keepShop);
    await el.click(el.stickers);
    await el.click(el.stickerBookCelest);
    await el.click(el.shopCart);
    await fs.writeFile(`${__dirname}/shopCart.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
});
    //await el.driver.quit();
});

test('previous and next buttons', async() => {
    await el.navigate();
    await el.click(el.enamelPins);
    await el.scrollToElement(el.brewPin);
    await el.click(el.brewPin);
    await el.click(el.previous);
    await el.click(el.previous);
    await el.click(el.next);
    await el.click(el.next);
    //await el.driver.quit();
});


test('search test', async() => {
    await el.navigate();
    await el.click(el.search);
    await el.find('tealight');
    await fs.writeFile(`${__dirname}/searchFindings.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
});
    //await el.driver.quit();
});

test('search error test', async() => {
    await el.navigate();
    await el.click(el.search);
    await el.find('pitbulls');
    await fs.writeFile(`${__dirname}/searchNoResults.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
});
    //await el.driver.quit();
});

test('social media links', async() => {
    await el.navigate();
    await el.click(el.facebook);
    await el.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/facebook.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
            await el.tabSwitch(); 
    await el.click(el.twitter);
    await el.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/twitter.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
            await el.tabSwitch(); 
    await el.click(el.pinterest);
    await el.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/pinterest.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
            await el.tabSwitch(); 
    await el.click(el.instagram);
    await el.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/instagram.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
            await el.tabSwitch();    
    await el.click(el.tumblr);
    await el.driver.sleep(2000);
    await fs.writeFile(`${__dirname}/tumblr.png`,
        await el.driver.takeScreenshot(), 'base64', (e) => {
            if (e) console.error(e)
            else console.log('page saved');
        });
            await el.tabSwitch(); 
});
await el.driver.quit();