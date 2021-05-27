// pages/myRecyclingList/myRecyclingList.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value2: 'name1',
    currentTabIndex: 0,
    page: 1,
    pageSize: 50,
    array: [],
    MyStatus: 0
  },
  onTabsItemTap: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTabIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      page: 1,
      array: []
    });
    wx.stopPullDownRefresh();
    this.loadData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.loadText == '上滑加载更多') {
      this.loadData();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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
      url: '/pages/goods/goods?id=' + e.currentTarget.dataset.id
    });
  },
  loadData: function () {
    app.loadData(this, 'http://127.0.0.1:8080/laoshu', {
      MyStatus: this.data.MyStatus
    });
  }
})