const automator = require('miniprogram-automator')
const sweetTools = require("../client/sweet_tools")
const sweetConfig = require("../client/sweet_config")
const miniProgram = automator.launch({
    cliPath: sweetConfig.cliPath,
    projectPath: sweetConfig.projectPath // 项目文件地址
}).then(async miniProgram => {
    sweetTools.clearStorage(miniProgram)
    const page = await miniProgram.reLaunch('/pages/home/home')
    sweetTools.closeBox(page)
    await page.waitFor(5000)
    const sweets = await page.$$('.topBand_item')
    await sweets[1].tap()
    await page.waitFor(5000)
    const pageA = await miniProgram.currentPage()//获取当前页面
    await pageA.waitFor(5000)
    const pageIndex = miniProgram.navigateBack(pageA)//返回上一级页面
    await sweets[2].tap()
    await pageA.waitFor(5000)
    const pageB = await miniProgram.currentPage()//获取当前页面
    await pageB.waitFor(5000)
    const video = await pageB.$('.sweetbox-video-btn')
    await video.tap()


    await miniProgram.close()

})


// await pageA.callMethod('onShareAppMessage')//调取当前页面指定方法