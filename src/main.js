import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import mLibs from './libs'

import 'virtual:svg-icons-register'

import './assets/fonts/iconfont.css'

// 导入全局样式
import './styles/index.scss'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(mLibs)

app.mount('#app')
