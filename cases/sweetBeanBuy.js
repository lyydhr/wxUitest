const automator = require('miniprogram-automator')
const sweetTools = require("../client/sweet_tools")
const sweetConfig = require("../client/sweet_config")
const miniProgram = automator.launch({
    cliPath: sweetConfig.cliPath,
    projectPath: sweetConfig.projectPath // 项目文件地址
}).then(async miniProgram => {
    sweetTools.clearStorage(miniProgram)
    const page = await miniProgram.reLaunch('/pages/home/home')
    await page.waitFor(10000)
    sweetTools.closeBox(page)
    const sweetBuyElement = await page.$$('.icon_item')
    await sweetBuyElement[0].tap()
    await page.waitFor(5000)
    const pageA = await miniProgram.currentPage()//获取当前页面
    await pageA.waitFor(5000)
    const ruleElement = await pageA.$('.rule')
    await ruleElement.tap()
    await pageA.waitFor(3000)
    const knowElement = await pageA.$('.float_btn')
    await knowElement.tap()
    await pageA.waitFor(2000)
    const moneyElements = await pageA.$$('.detail_btn')
    await moneyElements[0].tap()
    await pageA.waitFor(5000)
    const pageB = await miniProgram.currentPage()//获取当前页面
    await pageB.waitFor(5000)
    const changeElement = await pageB.$('.change_btn')
    await changeElement.tap()
    await pageB.waitFor(5000)
    const pageIndex = miniProgram.navigateBack(pageA)//返回上一级页面
    await pageA.waitFor(5000)
    const pageIndex1 = miniProgram.navigateBack(page)//返回上一级页面
    await page.waitFor(5000)

    await miniProgram.close();

})