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
        await el.driver.quit()
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
    await el.driver.quit();
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
    await el.driver.quit()
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
    await el.driver.quit()
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
    await el.driver.quit();
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
    await el.driver.quit();
});