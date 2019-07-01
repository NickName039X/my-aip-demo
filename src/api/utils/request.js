import axios from 'axios';

let baseUrl = process.env.VUE_APP_BASE_API;
console.log('获取baseUrl', baseUrl);

// 创建axios实例
const service = axios.create({
  // api的base_url
  baseURL: baseUrl,
  // 请求超时时间
  timeout: 30000,
  // `headers` 是即将被发送的自定义请求头
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded'},

});

// service.defaults.headers.common['access_token'] = localStorage.getItem('accessToken')


function axiosInterface (param) {
  service({
    url: param.url,
    method: param.method,
    data: param.data,
    params: param.params,
    headers: param.headers ? param.headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).then((res) => {
      param.call(res.data)
  }).catch((res) => {
    if (param.fal && typeof (param.fal) === 'function') {
      param.fal(res)
    } else {
      console.log('网络连接超时')
    }
  })
}

export default axiosInterface;
