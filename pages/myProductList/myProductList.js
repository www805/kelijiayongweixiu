// pages/ceshiyixia/ceshiyixia.js
var app = getApp();
Page({
  data: {
    items: [],
    startX: 0, //开始坐标
    startY: 0,
    count: 0,
    scrollTop: 0
  },

  onLoad: function (e) {
      var that = this;
      //common是自己写的公共JS方法，可忽略
      // common.sys_main(app, that, e);
      for (var i = 0; i < 20; i++) {
        this.data.items.push({
          content: i + " 向左滑动删除哦,向左滑动删除哦,向左滑动删除哦,向左滑动删除哦,向左滑动删除哦",
          isTouchMove: false //默认隐藏删除
        })
      }
      this.setData({
        items: this.data.items
      });

      
    },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })

    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },

  //滑动事件处理
  touchmove: function (e) {
    var that = this,
    index = e.currentTarget.dataset.index, //当前索引
    // console.log("666")
    // console.log("e.currentTarget", e.currentTarget.dataset.index)
      startX = that.__data__.startX, //开始X坐
      startY = that.__data__.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      // 获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })

    //更新数据
    that.setData({
      items: that.data.items
    })
  },

  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  edit: function(e){
    var index = e.currentTarget.dataset.index //当前索引
    console.log("编辑。。。。" + index)
    wx.navigateTo({url: '/pages/postProduct/postProduct?idx=' + index});
  },
  //删除事件
  del: function (e) {
    this.data.items.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      items: this.data.items
    })
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

  /**
   * 页面上拉触底事件的处理函数
   */
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
      url: '/pages/goods/goods?id=' + e.currentTarget.dataset.id
    });
  },
  loadData: function () {
    
  },
  
  goTop:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  fabubtn:function(){
    wx.navigateTo({
      url: '/pages/postProduct/postProduct'
    });
  }
})