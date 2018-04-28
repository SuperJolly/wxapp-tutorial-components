Page({
    data: {
        isVisible: false
    },
    toVisible: function() {
        this.setData({
            isVisible: !this.data.isVisible
        })
    }
})