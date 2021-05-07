import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import axios from './utils/requset'
import './assets/js/mock.js'



const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(router)
app.use(ElementPlus)
app.mount('#app')