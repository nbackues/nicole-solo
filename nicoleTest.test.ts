import { starWars } from "./nicolesPage";
const sw = new starWars();

test('checking news and youtube', async() => {
    await sw.navigate();
    await sw.click(sw.news);
    await sw.driver.navigate().back();
    await sw.click(sw.homeBtn);
    await sw.click(sw.youtube);
    await sw.tabSwitch();
    await sw.driver.quit();
});