// @ts-ignore
import axios from '/@/utils/requset'

const api: any = {
 login: 'spd/v1/login'
}

export function Login (param: any) {
 return axios ({
  url: api.login,
  method: 'post',
  data: param
 })
}