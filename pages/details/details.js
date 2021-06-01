// pages/details/details.js
import Dialog from "../../components/vtu/dialog/vtu-index";

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: [
      'http://n.sinaimg.cn/news/518/w311h207/20200103/87fa-imrkkfx1541172.jpg',
      'http://n.sinaimg.cn/news/518/w311h207/20200103/87fa-imrkkfx1541172.jpg',
      'http://n.sinaimg.cn/news/518/w311h207/20200103/87fa-imrkkfx1541172.jpg',
      'http://n.sinaimg.cn/news/518/w311h207/20200103/87fa-imrkkfx1541172.jpg',
    ],
    orderid:'1233333333333333',
    strArr:["上门","邮寄","到店"],
    weixiuStrArr:["等待修理","待确认","修理中","待验收","维修完成"],
    weixiuColorArr:["tag_darkgray","tag_orange","tag_red","tag_LimeGreen","tag_green"],
    describe:'我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了我的坏了',
    money:'12.00',
    isweixiu:2, //等待维修1、待确认2、修理中3、待验收4、维修完成5
    isState:3, //上门1、邮寄2、到店3
    othadAddress:app.globalData.othadAddress,
    value1: 0
  },

  next1 (){
    this.setData({
      value1: this.data.value1>2?0: this.data.value1 + 1
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

  },
  showGallery(e) {
    const { current } = e.currentTarget.dataset
    const { urls } = this.data

    this.$wuxGallery = $wuxGallery()

    this.$wuxGallery.show({
        current,
        urls,
        [`delete`]: (current, urls) => {
            urls.splice(current, 1)
            this.setData({
                urls,
            })
            return true
        },
        cancel() {
            console.log('Close gallery')
        },
        onTap(current, urls) {
            console.log(current, urls)
            return true
        },
        onChange(e) {
            console.log(e)
        },
    })
  },
  showGallery2(e) {
      const { current } = e.currentTarget.dataset
      const { urls } = this.data

      $wuxGallery().show({
          current,
          urls: urls.map((n) => ({ image: n, remark: n })),
          indicatorDots: true,
          indicatorColor: '#fff',
          indicatorActiveColor: '#04BE02',
          icon: 'http://cdn.skyvow.cn/logo.png',
          [`delete`]: (current, urls) => {
              console.log('onIconClick')
              return true
          },
      })
  },
  previewImage(e) {
      const { current } = e.currentTarget.dataset
      const { urls } = this.data

      wx.previewImage({
          current,
          urls,
      })
  },
  gotoEdit(){
    wx.navigateTo({
      url: '/pages/order/order'
    })
  },
  delAlert: function() {
    Dialog().open({
      content: '真的要删除该维修单吗？',
      verticalButtons: false,
      buttons: [
        {
          type: 'default',
          label: '取消',
          click: function(e) {
            Dialog().close()
          }
        },
        {
          type: 'danger',
          label: '删除',
          click: function(e) {
            setTimeout(function() {
              Dialog().close()
            }, 2000)
          }
        },
      ]
    })
  },
  successAlert: function() {
    Dialog().open({
      content: '确认完成维修，并且支付吗？',
      verticalButtons: false,
      buttons: [
        {
          type: 'default',
          label: '取消',
          click: function(e) {
            Dialog().close()
          }
        },
        {
          type: 'success',
          label: '确认',
          click: function(e) {
            Dialog().close()
          }
        },
      ]
    })
  },
})