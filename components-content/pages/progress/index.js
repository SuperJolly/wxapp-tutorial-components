// index.js
Page({
    data: {
        percentValue: 0
    },
    onLoad() {
        let timer;
        timer = () => {
            setTimeout(() => {
                const value = this.data.percentValue;
                this.setData({
                    percentValue: value < 100 ? value+10 : value
                });
                timer()
            }, 2000);
        }
        timer();
    }
})