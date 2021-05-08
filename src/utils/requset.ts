import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { ElLoading } from 'element-plus'

let loading: any;

const startLoading = () => {
  interface Options {
    lock: boolean;
    text: string;
    background: string;
  }
  const options: Options = {
    lock: true,
    text: '加载中',
    background: 'rgba(0, 0, 0, .7)'
  }
  loading = ElLoading.service(options)
}

const endLoading = () => {
  loading.close()
}

axios.defaults.baseURL = 'http://192.168.2.11:7654/'

axios.defaults.headers.post["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8"

axios.defaults.timeout = 10000
//请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  startLoading()
  return config
}, err => {
  return Promise.reject(err)
})

//相应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
  endLoading()
  return response.data
}, error => {
  endLoading()
  return Promise.reject(error)
})

export default axios