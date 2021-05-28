// pages/order/order.js
var util = require('../../utils/util.js')

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'page/component/pages/radio/radio',
    }
  },

  data: {
    value1: [],
    imgList:[
      {
        url: "https://activity.vtuzx.com/doc/vtuui/weapp/avatar/1.png"
      },
      {
        url: "https://activity.vtuzx.com/doc/vtuui/weapp/avatar/2.png"
      },
      {
        url: "https://activity.vtuzx.com/doc/vtuui/weapp/avatar/3.png"
      }
    ],
    items: [
      {value: 1, name: '上门'},
      {value: 2, name: '邮寄'},
      {value: 3, name: '到店', checked: 'true'}
    ],
    useraddress:'',
    radioValue: 0,
    address: app.globalData.dpAddress,
    displayValue1: '请选择',
    lang: 'zh_CN',
    yuyuemindate: '2021-01-01 00:00:00'
  },
  radioChange(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items,
      radioValue: e.detail.value
    })

    

  },

  getLables(){
    //新增多一个输入框
    
  },  

  onChange(e) {
    // console.log(e)
    const { key, values } = e.detail
    const lang = values[key]

    this.setData({
        lang,
    })
  },
  setValue(values, key, mode) {
    this.setData({
        [`value${key}`]: values.value,
        [`displayValue${key}`]: values.label,
        // [`displayValue${key}`]: values.displayValue.join(' '),
    })
  },
  onConfirm(e) {
    const { index, mode } = e.currentTarget.dataset
    this.setValue(e.detail, index, mode)
    // console.log(`onConfirm${index}`, e.detail)
  },
  onVisibleChange(e) {
    this.setData({ visible: e.detail.visible })
  },
  onClick() {
    this.setData({ visible: true })
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
    this.setData({
      imgList: [],
      yuyuemindate: util.formatTime(new Date())
    })


    
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