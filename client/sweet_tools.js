module.exports = {
    clearStorage: clearStorage,
    closeBox:closeBox
};

//清除缓存
async function clearStorage(miniProgram) {
    await miniProgram.callWxMethod('clearStorage', {})//每次运行前清除缓存
}

//关闭弹窗
async function closeBox(thisPage) {
    const newBox = await thisPage.$('.close_box')
    if (newBox.attribute('class') != null) {
        await thisPage.waitFor(5000)
        console.log(await newBox.attribute('class'))
        await newBox.tap()
    }
}
