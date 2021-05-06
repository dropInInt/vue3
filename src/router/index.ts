import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
 {
  path: '/',
  redirect: '/home'
 },
 {
  path: '/home',
  name: 'Home',
  component: () => import('../views/Index.vue')
 },
 {
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/LoginRegister.vue')
 },
 {
  path: '/404',
  name: '404',
  component: () => import('../views/404/404.vue')
 },
 {
  path: '/:pathMatch(.*)',
  redirect: '/404'
 }
]

const router = createRouter({
 history: createWebHashHistory(process.env.BASE_URL),
 routes: routes
})

export default router