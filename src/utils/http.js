import wepy from 'wepy'

var app = wepy.app
var http = {}
console.log(app)
http.fetchData = options => {
  if (options.toast) {
    app.showToast({
      title: options.toast.title || '加载中',
      icon: 'loading'
    })
  }

  return new Promise((resolve, reject) => {
    app.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data,
      header: options.header,
      success(res) {
        console.log(res)
        resolve()
      }
    })
  })
}

http.uploadFile = options => {

}

export default http
