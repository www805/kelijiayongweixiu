//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  loadData: function (that, url, data) {
    that.setData({
      loadText: '', //正在加载
      loadClass: 'loadTip icon i-loading' + (that.data.array.length == 0 ? ' big' : '') //显示一个loading动画
    });
    data.page = that.data.page; //当前页码
    data.pageSize = that.data.pageSize; //每页记录数
    data.UserID = wx.getStorageSync('User').ID; //当前用户ID，如果不需要，可删除
    wx.request({
      url: url,
      data: data,
      success: function (res) {
        //不同于jQuery的AJAX，这里success回调还需要判断状态码，200才表示成功
        if (res.statusCode == 200) {
          that.setData({
            array: that.data.array.concat(res.data.list),
            total: res.data.Total
          });
          if (res.data.total == 0) {
            that.setData({
              loadText: '没有相关信息',
              loadClass: 'loadTip big icon i-info'
            });
          } else if (that.data.page == Math.ceil(res.data.Total / that.data.pageSize)) {
            that.setData({
              loadText: '全部加载完成',
              loadClass: 'loadTip'
            });
          } else {
            that.setData({
              page: that.data.page + 1,
              loadText: '上滑加载更多',
              loadClass: 'loadTip'
            });
          }
        } else {
          that.setData({
            loadText: '加载失败，点此重试',
            loadClass: 'loadTip' + (that.data.array.length == 0 ? ' big icon i-sad' : '')
          });
        }

       
      },
      fail: function () {
        that.setData({
          loadText: '加载失败，点此重试',
          loadClass: 'loadTip' + (that.data.array.length == 0 ? ' big icon i-sad' : '')
        });
      }
    });
  },

  globalData: {
    userInfo: null,
    dpAddress: '广东省茂名市金阳街38号科力家电维修中心，吴建波，133333333',
    othadAddress: '广东省茂名市金阳街38号科力家电维修中心'
  }
})