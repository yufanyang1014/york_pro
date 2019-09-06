import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  responseEncoding: 'utf8',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF8"
  }
});

// 拦截 request
instance.interceptors.request.use((request) => {
  return request;
}, error => Promise.reject(error));

// 拦截 response
instance.interceptors.response.use((response) => {
  if (response.config.method.toLowerCase() === 'options') return false;
  if (response.status !== 200) {
    return Promise.reject();
  }
  return Promise.resolve(response.data);

}, (error) => {
  if (error.message.indexOf('code 404') > -1) {
    alert('数据不存在');
  } else if (error.message.indexOf('timeout of') > -1) {
    alert('请求超时了');
  } else {
    alert('系统繁忙，请稍候再试！');
  }
});

export default instance;
