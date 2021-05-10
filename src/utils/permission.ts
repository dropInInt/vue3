import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import router from '../router'
import { ACCESS_TOKEN } from '../store/muation-type'
import NProgress from '../utils/nprogress'

NProgress.configure({ showSpinner: false })

const whiteList: string[] = ['/login', '/register']

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  NProgress.start()
  if (localStorage.getItem(ACCESS_TOKEN) && localStorage.getItem(ACCESS_TOKEN) !== 'undefined') {
    if (to.path === '/login') {
      next({path: '/home'})
      NProgress.done()
    } else {
     next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
      NProgress.done()
    } else {
      next({path: '/login'})
      NProgress.done()
    }
  }
})

router.afterEach(()=> {
 NProgress.done()
})