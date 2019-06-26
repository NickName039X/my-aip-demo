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
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});



export default service;
