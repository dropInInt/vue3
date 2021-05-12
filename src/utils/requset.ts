import axios, { AxiosResponse } from 'axios'
import { useRouter, Router } from 'vue-router'
// @ts-ignore
import { ACCESS_TOKEN } from '/@/store/muation-type'

import { ElLoading } from 'element-plus'

const token: string | null = localStorage.getItem(ACCESS_TOKEN)

const router: Router = useRouter()

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

axios.defaults.baseURL = 'http://124.71.200.160:8885/'

axios.defaults.headers.post["content-type"] = "application/json;charset=UTF-8"

axios.defaults.timeout = 10000
//请求拦截
axios.interceptors.request.use((config: any) => {
  const urlList: string[] = config.url.split('/')
  if (token && token !== 'undefined') {
    config.headers['Authorization'] = 'Bearer ' + token
  } else if (!urlList.includes('login')){
    router.push('/login')
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
  endLoading()
  return Promise.reject(error)
})

export default axios