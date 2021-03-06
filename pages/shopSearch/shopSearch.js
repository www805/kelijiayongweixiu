// pages/shopSearch/shopSearch.js
import { $startWuxRefresher, $stopWuxRefresher, $stopWuxLoader } from '../../components/wux/index'

const getList = (count = 10, step = 0) => [...new Array(count)].map((n, i) => ({ title: `Pull down ${i + step}`, content: 'Wux Weapp' }))


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    count: 0,
    scrollTop: 0,
  },


  onPageScroll(e) {
    this.setData({
        scrollTop: e.scrollTop
    })
    if (e.scrollTop > 100) {
        this.setData({
          floorstatus: true
        });
      } else {
        this.setData({
          floorstatus: false
        });
      }
  },
  onPulling() {
      console.log('onPulling')
  },
  onRefresh() {
      console.log('onRefresh')

      this.setData({ count: 10 })

      setTimeout(() => {
          this.setData({ items: getList() })
          $stopWuxRefresher()
      }, 100)
  },
  onLoadmore() {
      console.log('onLoadmore')
      setTimeout(() => {
          this.setData({
              items: [...this.data.items, ...getList(10, this.data.count)],
              count: this.data.count + 10,
          })

          if (this.data.items.length < 30) {
              $stopWuxLoader()
          } else {
              console.log('没有更多数据')
              $stopWuxLoader('#wux-refresher', this, true)
          }
      }, 3000)
  },
  gotoDetails(){
      wx.navigateTo({
          url: '/pages/details/details',
      })
  },
  
  goTop:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $startWuxRefresher()
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