//获取应用实例
const app = getApp()
var util = require('../../weichatPb/src/util.js');
var protobuf = require('../../weichatPb/protobuf.js');
app.globalData._protobuf = protobuf;
var testConfig = require('../../test/test.js');
var testRoot = protobuf.Root.fromJSON(testConfig);
var SocketTask;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    goods:[],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 页面进入时
  djsj:function(){
    var that = this;
    console.log("输出  点击")
    wx.request({
      url: 'http://10.0.0.13:31516/api/test/connectTestApi',
      method:"POST",
      data:[],
      success(res) {
        console.log(res)
        that.setData({
          goods: res.data.data.group
        })
      },
      fail(res){
        //
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // this.connctAPI();
    this.websocket();



  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  connctAPI:function(){
    wx.request({
      url: 'http://10.0.0.13:31516/api/test/connectTestApi',
      method: "POST",
      data: {
        x: '123',
        y: '100'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      timeout: "10000",
      success(res) {
        console.log(res)
      }
    })
  },
  websocket:function(){
    // 启动websocket
    wx.connectSocket({
      url: 'ws://106.13.113.178:8090/websocket',
      success: function (res) {
        console.log("WebSocket成功");
      },
      fail: function (res) {
        console.log("WebSocket失败", res);
      }
    })
    // 监听连接成功事件
    wx.onSocketOpen(function(res){
      console.log("打开WebSocket成功" + res);
    })
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！' + res);
    });
    // 监听发送事件
    wx.onSocketMessage(function(res){
      console.log("监听WebSocket" + res);
      // that.handleMessage(res.data);
    })
    // // 监听服务器推送的消息
    // wx.onSocketMessage(message => {
    //   //把JSONStr转为JSON
    //   message = message.data.replace(" ", "");
    //   if (typeof message != 'object') {
    //     message = message.replace(/\ufeff/g, ""); //重点
    //     var jj = JSON.parse(message);
    //     message = jj;
    //   }
    //   console.log("【websocket监听到消息】内容如下：");
    //   console.log(message);
    // })
    // 监听连接关闭事件
    wx.onSocketClose(function(res){
      console.log("关闭WebSocket" + res);
    })
  },
  // 关闭连接
  closeWebSocket: function () {
    wx.closeSocket({})
  },
  // 测试点击按钮
  clickToSend:function(){
    // console.log(app.globalData)
    var Master = testRoot.lookup('test.MasterDataRequest');
    var master = Master.create();
    master.requestId = 1001;
    master.filterFuture = true;

    var WebRequest = testRoot.lookup('test.RequestMessage')
    var webRequest = WebRequest.create();
    webRequest.lang = "zh_cn"
    webRequest.masterData = master;

    var buffer = WebRequest.encode(webRequest).finish();
    var arrayBuffer = new ArrayBuffer(4 + buffer.length);
    var dataView = new DataView(arrayBuffer);
    var temp_array = [];
    temp_array.push(webRequest);
    wx.sendSocketMessage({
      data: temp_array,
      success: function (res) {
        console.log("sendSocketMessage成功");
      },
      fail: function (res) {
        console.log("sendSocketMessage失败", res);
      }
    })
  },
})