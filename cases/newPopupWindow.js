const automator = require('miniprogram-automator')
const sweetTools = require("../client/sweet_tools")
const sweetConfig = require("../client/sweet_config")
const miniProgram = automator.launch({
    cliPath: sweetConfig.cliPath,
    projectPath: sweetConfig.projectPath
}).then(async miniProgram => {
    sweetTools.clearStorage(miniProgram);
    const page = await miniProgram.reLaunch('/pages/home/home')
    await page.waitFor(5000)
    let noob = await page.$('.boxAD_animation')
    console.log(await noob.attribute('class'))
    if (noob.attribute('class') != null) {//如果存在新人弹窗
        sweetTools.tapThis(noob,page,'temp-third');
        const pageA = await miniProgram.currentPage()//获取当前页面赋值
        const contentElement = await pageA.$('temp-third');
        const goodsIconElement = await  contentElement.$$(".goods-icon")
        sweetTools.tapThis(goodsIconElement[2],pageA,'sweet_img');
        const goodsDetails = await miniProgram.currentPage()//获取当前页面赋值
        const understand = await goodsDetails.$('.sweet_img')
        sweetTools.tapThis(understand,goodsDetails,'closeSweet');
        const pageIndex = miniProgram.navigateBack(pageA)//返回上一级页面
        const understandback = await goodsDetails.$('.closeSweet')
        sweetTools.tapThis(understandback,pageA,'pay_now');
        const pay_now = await goodsDetails.$('.pay_now')
        sweetTools.tapThis(pay_now,pageA,'buy_button');
        const buy_button = await goodsDetails.$('.buy_button')
        sweetTools.tapThis(buy_button,pageA,5000);
    }

    const element = await page.$('.tag_item')
    await element.tap()
    await miniProgram.close()


})


//
// //如果有新手引导就进游戏专区，否则就点击关闭弹窗
// const pagepopup = await page.$('.close_box')
// console.log(await pagepopup.attribute('class'))
// if (pagepopup.attribute('class') != null) {
//     await pagepopup.tap()
//     await page.waitFor(5000)
// } else {
//     const gamepage = await miniProgram.reLaunch('pages/gameHome/gameHome')
//     await gamepage.waitFor(5000)
// }
// const element = await page.$('.tag_item')
// console.log(await element.attribute('class'))
// await element.tap()
// await page.waitFor(7000)
// //循环点开首页各个页面
//     for (iount = 0; iount < 8; iount++) {
//         // const pageIndex = miniProgram.navigateBack('/pages/home/home')
//         await page.waitFor(2000)
//         const elements = await page.$$('.goods_shop')
//         console.log(await iount)
//         await elements[iount].tap()
//         await page.waitFor(2000)
//     }