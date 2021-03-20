// pages/purchase/purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goumaishow: false,
    pickerIndex: 0,
    pickerArray1: [{type: 1, label: '送货上门(仅茂名)'}, {type: 2, label: '快递邮寄'}, {type: 3, label: '到店自取'}],
  },


  pickerChange: function(e) {

    this.setData({
      goumaishow: e.detail.value == 2? true:false
    })

    this.setData({
      pickerIndex: parseInt(e.detail.value)
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