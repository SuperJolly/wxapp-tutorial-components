// index.js
Page({
    onReady() {
        this.videoCtx = wx.createVideoContext('myVideo')
    },
    play() {
        this.videoCtx.play()
    },
    pause() {
        this.videoCtx.pause()
    }
})