import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BasicLayout from '/@/layouts/BasicLayout.vue'
import { generateSyncRouter } from './routerUtils'


// let routes: Array<RouteRecordRaw> = []

// async function getRoutes() {
//   const routers = await generateSyncRouter()
//   debugger
// }

// getRoutes()
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: BasicLayout,
//     redirect: '/dashboard/home',
//     children: [
//       {
//         path: '/dashboard/home',
//         name: 'home',
//         component: () => import('/@/views/dashboard/Home.vue'),
//         meta: {
//           title: '首页',
//           showlink: true,
//           savedPosition: false,
//           icon: 'home'
//         }
//       }
//     ]
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('/@/views/login/LoginRegister.vue')
//   },
//   {
//     path: '/404',
//     name: '404',
//     component: () => import('/@/views/404/404.vue')
//   },
//   {
//     path: '/:pathMatch(.*)',
//     redirect: '/404'
//   }
// ]
new Promise(resolve => {
  generateSyncRouter().then(routers => {
    debugger
  })

// console.log(routesMy)

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes
})

export default router