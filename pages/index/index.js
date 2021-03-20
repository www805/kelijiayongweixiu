//index.js
import { $wuxLoading } from '../../components/wux/index'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
      imageList: [
        {
          url: '/assets/index.png',
          mode: "widthFix"
        }
        ,{
          url: 'https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20191217/21dd0b55fbdf4b95941b3556580c9b83.jpeg',
          mode: "widthFix"
        }
      ],
      windowWidth: wx.getSystemInfoSync().windowWidth
  },
  wxClick(e){
    this.$wuxLoading = $wuxLoading()
    this.$wuxLoading.show({
        text: '加载中...',
    })

    setTimeout(() => {
        this.$wuxLoading.hide()
    }, 3000)

    console.log(e);

    let url= e.currentTarget.dataset.url

    if(url.indexOf('my') !== -1){
      wx.switchTab({url})
    }else{
      wx.navigateTo({url})

    }

    

  },


  bindChange: function(e) {
    this.setData({
      current: e.detail.current
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