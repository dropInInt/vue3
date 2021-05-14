import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './mock/mock.js'

// 引入iconfont
import './assets/iconfont/iconfont.css'

//引入公共樣式
import './style/index.css'

import './utils/permission'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')