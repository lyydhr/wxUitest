// const automator = require("miniprogram-automator");
//
// automator
//     .connect({
//         wsEndpoint: "ws://localhost:9420",
//     })
//     .then(async (miniProgram) => {
//
//         const page = await miniProgram.reLaunch("/page/component/index");
//         await page.waitFor(10000);
//         console.log("10s后断开连接..");
//         miniProgram.disconnect();
//     })
//     .catch((errMsg) => {
//         console.log("失败：", errMsg);
//     });



const automator = require("miniprogram-automator")

automator.connect({
            wsEndpoint: "ws://localhost:9420",
        })
    .then(async miniProgram => {
    const page = await miniProgram.reLaunch('/pages/tjhuoyun/nologin/nologin')
    await page.waitFor(500)
    const element = await page.$('.login')
    console.log(await element.attribute('class'))
    await element.tap()
    // await miniProgram.close()

})
