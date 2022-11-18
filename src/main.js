import { createApp } from 'vue'
import { createPinia } from 'pinia'

// i18n （PS：导入放到 APP.vue 导入之前，因为会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/permission'
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
app.use(i18n)

app.mount('#app')
