Page({
    data: {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 300
    },
    /**
     * swiper api
     */
    changeIndicatorDots: function (e) {
        console.log('切换指示点开关');
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        console.log('切换自动播放开关');
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        console.log(`调整自动播放间隔时长为: ${e.detail.value}ms`);
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        console.log(`调整幻灯片切换时长为: ${e.detail.value}ms`);
        this.setData({
            duration: e.detail.value
        })
    },
    animationfinish: function(e) {
        console.log(e);
    },
    change: function(e) {
        console.log(e)
    }
})