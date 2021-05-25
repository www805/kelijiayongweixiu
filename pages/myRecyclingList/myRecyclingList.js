var app = getApp();
Page({
    data: {
        page: 1,
        pageSize: 50,
        array: [],
        MyStatus: 0
    },
    onLoad: function (e) {
        this.loadData();
    },
    onPullDownRefresh: function () {
        this.setData({
            page: 1,
            array: []
        });
        wx.stopPullDownRefresh();
        this.loadData();
    },
    onReachBottom: function () {
        if (this.data.loadText == '上滑加载更多') {
            this.loadData();
        }
    },
    changeMyStatus: function (e) {
        this.setData({
            page: 1,
            array: [],
            MyStatus: e.target.dataset.mystatus
        });
        this.loadData();
    },
    retry: function (e) {
        if (this.data.loadText == '加载失败，点此重试') {
            this.loadData();
        }
    },
    itemTap: function (e) {
        wx.navigateTo({
            url: 'detail?id=' + e.currentTarget.dataset.id
        });
    },
    loadData: function () {
        app.loadData(this, 'http://127.0.0.1:8080/laoshu', {
            MyStatus: this.data.MyStatus
        });
    }
});