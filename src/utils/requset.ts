import axios, { AxiosResponse } from 'axios'
import { useRouter, Router } from 'vue-router'
// @ts-ignore
import { ACCESS_TOKEN } from '/@/store/muation-type'

import { ElLoading } from 'element-plus'

const router: Router = useRouter()

let loading: any;

const startLoading: () => void = () => {
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

const endLoading: () => void = () => {
  loading.close()
}

axios.defaults.baseURL = ''

axios.defaults.headers.post["content-type"] = "application/json;charset=UTF-8"

axios.defaults.timeout = 10000
//请求拦截
axios.interceptors.request.use((config: any) => {
  const urlList: string[] = config.url.split('/')
  const token: string | null = localStorage.getItem(ACCESS_TOKEN)
  if (token && token !== 'undefined') {
    config.headers['Authorization'] = 'Bearer ' + token
  }
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
  localStorage.clear()
  location.href = '#/login'
  endLoading()
  return Promise.reject(error)
})

export default axios