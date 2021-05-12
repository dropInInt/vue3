// @ts-ignore
import axios from '/@/utils/requset'

const api: any = {
 systemMenu: 'spd/v1/user/permissions'
}

export function getSystemMenu () {
 return axios({
  url: api.systemMenu,
  method: 'post'
 })
}