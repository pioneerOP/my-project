const app = getApp();

var baseUrl = "http://10.0.0.13:31516/api";
// var baseUrl = "https://hrwx.dudumatou.com";

function connectNet(obj, cb) {
  wx.request({
    url: obj.url,
    data: obj.data,
    method: obj.method,
    timeout: 10000,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function(res) {
      return typeof cb == "function" && cb(res)
    },
    fail: function() {
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    },
  })
}

module.exports = {
  open: connectNet,

  testUrl: baseUrl + "/test/connectTestApi",
  // testUrl: baseUrl + "/test/connectTestApi",
};