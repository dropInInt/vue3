import { getSystemMenu } from '../api/auth/auth'
import BasicLayout from '/@/layouts/BasicLayout.vue'

export const generateSyncRouter: () => Promise<unknown> = () => {
 return new Promise((resolve, reject) => {
  getSystemMenu().then( (res: any) => {
   const routerData: any[] = formatData(res.data)
   const routers: any = generteRouter(routerData, null)
   resolve(routers)
  }).catch((err: any) => {
   reject(err)
  })
 })
}



// 格式化数据
const formatData: (routerData: any) => any[] = (routerData: any) => {
 let newData: any[] = []
 routerData.forEach((item: any) => {
  let obj: any = item
  obj.children = item.moduleChildren[0].children
  delete obj.moduleChildren
  newData.push(obj)
 })
 return newData
}

// 生成router
const generteRouter: (routerMap: any, parent: any) => any = (routerMap: any, parent: any) => {
 return routerMap.map((item: any) => {
  let currentRouter: any = {
    //path: `${(parent && parent.name) || ''}/${item.name}`,
    path: `/${item.name}`,
    name: item.name,
    component: BasicLayout,
    redirect: `${(parent && parent.name) || ''}/${item.name}`,
    meta: {
     title: item.displayName,
     showlink: true,
     savedPosition: false,
     icon: item.icon || ''
   }
  }
   if (item.children && item.children.length > 0){
    currentRouter.children = generteRouter(item.children, currentRouter)
   }
   return currentRouter
 })
}