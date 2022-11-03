import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mLibs from './libs'

import 'virtual:svg-icons-register'

import './assets/fonts/iconfont.css'

// 导入全局样式
import './styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(mLibs)

app.mount('#app')
