//获取应用实例
const app = getApp()
var util = require('../../weichatPb/src/util.js');
var Base64 = require('../../utils/base64.js');
var protobuf = require('../../weichatPb/protobuf.js');
app.globalData._protobuf = protobuf;
var testConfig = require('../../test/test.js');
var testRoot = protobuf.Root.fromJSON(testConfig);
var WebRequest = testRoot.lookup('test.RequestMessage')
var HomeSymbolListRequest = testRoot.lookup('test.HomeSymbolListRequest');
var MasterDataRespone = testRoot.lookup('test.MasterDataResponse')
var HomeListRespone = testRoot.lookup('test.HomeSymbolListResponse')
var buffer;
var protobuf = require('../../test/protobuf.js');
var websocket = require('../../test/test.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    goods: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  websocket: function() {
    var that = this;
    // 启动websocket
    wx.connectSocket({
      url: 'ws://106.13.113.178:8090/websocket',
      success: function(res) {
        console.log("连接WebSocket成功");

      },
      fail: function(res) {
        console.log("连接WebSocket失败");
      }
    })
    // 监听连接成功事件
    wx.onSocketOpen(function(res) {
      console.log("打开WebSocket成功");
    })
    wx.onSocketError(function(res) {
      console.log('WebSocket连接打开失败，请检查！');
    });
    // 监听发送事件
    wx.onSocketMessage(function(res) {
      var str = that.arrayBufferToString(res); // 这个可以看 但是会乱码

      // var msg = MasterDataRespone.decode(data);
      // var msg = HomeListRespone.decode(data);
      console.log("WebSocket收到服务器消息 msg：\n", res);
    })
    // 监听连接关闭事件
    wx.onSocketClose(function(res) {
      console.log("关闭WebSocket");
    })
  },
  // 关闭连接
  closeWebSocket: function() {
    wx.closeSocket({})
  },
  // 测试点击按钮
  clickToSend: function() {
    var that = this;
    // console.log(app.globalData)
    var Master = testRoot.lookup('test.MasterDataRequest');
    var master = Master.create();
    master.requestId = 1001;
    master.filterFuture = true;

    var homeList = HomeSymbolListRequest.create();
    homeList.requestId = 1101;
    homeList.type = "TOP";

    var webRequest = WebRequest.create();
    webRequest.lang = "SC";
    // webRequest.masterData = master;
    webRequest.homeSymbolList = homeList;

    buffer = webRequest.encode().finish();
    wx.sendSocketMessage({
      data: buffer,
      success: function(res) {
        console.log("sendSocketMessage成功\nbuffer：", buffer, "\nwebRequest.decode(buffer)：", webRequest.decode(buffer));
      },
      fail: function(res) {
        console.log("sendSocketMessage失败");
      }
    })
  },










  // 转arrayBuffer
  stringToArrayBuffer: function(str) {
    var bytes = new Array();
    var len, c;
    len = str.length;
    for (var i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if (c >= 0x010000 && c <= 0x10FFFF) {
        bytes.push(((c >> 18) & 0x07) | 0xF0);
        bytes.push(((c >> 12) & 0x3F) | 0x80);
        bytes.push(((c >> 6) & 0x3F) | 0x80);
        bytes.push((c & 0x3F) | 0x80);
      } else if (c >= 0x000800 && c <= 0x00FFFF) {
        bytes.push(((c >> 12) & 0x0F) | 0xE0);
        bytes.push(((c >> 6) & 0x3F) | 0x80);
        bytes.push((c & 0x3F) | 0x80);
      } else if (c >= 0x000080 && c <= 0x0007FF) {
        bytes.push(((c >> 6) & 0x1F) | 0xC0);
        bytes.push((c & 0x3F) | 0x80);
      } else {
        bytes.push(c & 0xFF);
      }
    }
    var array = new Int8Array(bytes.length);
    for (var i in bytes) {
      array[i] = bytes[i];
    }
    return array.buffer;
  },
  // arrayBuffer转字符串
  arrayBufferToString: function(arr) {
    if (typeof arr === 'string') {
      return arr;
    }
    var dataview = new DataView(arr.data);
    var ints = new Uint8Array(arr.data.byteLength);
    for (var i = 0; i < ints.length; i++) {
      ints[i] = dataview.getUint8(i);
    }
    arr = ints;
    var str = '',
      _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
      var one = _arr[i].toString(2),
        v = one.match(/^1+?(?=0)/);
      if (v && one.length == 8) {
        var bytesLength = v[0].length;
        var store = _arr[i].toString(2).slice(7 - bytesLength);
        for (var st = 1; st < bytesLength; st++) {
          store += _arr[st + i].toString(2).slice(2);
        }
        str += String.fromCharCode(parseInt(store, 2));
        i += bytesLength - 1;
      } else {
        str += String.fromCharCode(_arr[i]);
      }
    }
    return str;
  },
})