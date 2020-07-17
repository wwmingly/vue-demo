/* eslint-disable */
import axios from "axios";
import qs from "qs";
import { Loading, Message } from "element-ui";

import store from "../../vuex/index";
import { config } from "shelljs";

let loadingInstance;

axios.defaults.timeout = 30000;
axios.defaults.baseURL = '/';
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
    config.headers["formdata"] = "1";
  }
  loadingInstance = Loading.service({
    text: "加载中...",
    background: 'rgba(255,255,255,0.6)'
  })
  store.commit("changeLoading", store.getters.changeLoading + 1);
  return config;
}, err => {
  return Promise.reject(err);
});
axios.interceptors.response.use(response => {
  store.commit("changeLoading", store.getters.changeLoading - 1);
  if (store.getters.changeLoading === 0) {
    loadingInstance.close()
  }
  return response.data;
}, err => {
  store.commit("changeLoading", store.getters.changeLoading - 1);
  if (store.getters.changeLoading === 0) {
    loadingInstance.close()
  }
  if (err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        err.message = '未授权，请重新登录'
        break;
      case 403:
        err.message = '拒绝访问'
        break;
      case 404:
        err.message = '请求错误，未找到该资源'
        break;
      case 405:
        err.message = '请求方法未允许'
        break;
      case 408:
        err.message = '请求超时'
        break;
      case 500:
        err.message = '服务端出错'
        break;
      case 501:
        err.message = '网络未实现'
        break;
      case 502:
        err.message = '网络错误'
        break;
      case 503:
        err.message = '服务不可用'
        break;
      case 504:
        err.message = '网络超时'
        break;
      case 505:
        err.message = 'http版本不支持该请求'
        break;
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = '连接服务器失败'
  }
  return Promise.reject(err.message)
})
export default axios