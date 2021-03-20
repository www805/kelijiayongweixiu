// pages/goods/goods.js
Page({
  /**
   * 页面的初始数据
   */
  data: { 
    urls: [
      'http://tu.ossfiles.cn:9186/group3/M00/03/FE/rBpVfl7rHd2AR8ncAADyaHcF7o8256.jpg'
      , 'http://pic94.huitu.com/res/20170225/1260242_20170225003927269050_1.jpg'
      , 'http://image.haogongzhang.com/Uploads/news/201509/55ef96ad72d17.jpg'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    current:1,
  },

  //预览图片，放大预览
  preview(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.urls, // 需要预览的图片http链接列表
      fail: function(){
        wx.showToast({
          title: '当前网络不佳...',
          icon: none
        })
      }
    })
  },

  bindchange:function(e){//轮播图发生改变
      this.setData({
          current:e.detail.current + 1
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})