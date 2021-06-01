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
    imgList:[],
    productTitle: "",
    originalPrice: "",
    price: "",
    inputList:[""],
    inputIndex: 0,
    inputKey:0,
    ziying: true,
    miaoshu: ""
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

  addLables(){
    //新增多一个输入框
    const inputList = this.data.inputList;
    inputList.push("");
    this.setData({
      inputList: inputList,
    })
  },  
  delLables(){
    const inputList = this.data.inputList;
    inputList.pop(); //实质是删除lists数组内容，使for循环少一次
    this.setData({
      inputList: inputList,
    })
  },
  ziyingBindchange(){
    const ziying = this.data.ziying;
    this.setData({
      ziying: !ziying,
    })
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