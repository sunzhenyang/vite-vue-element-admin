import { createI18n } from 'vue-i18n'
import { LANG, LANG_DEFAULT } from '@/constant'

// 数据源
const messages = {
  en: {
    msg: {
      test: 'Hello, World'
    }
  },
  zh: {
    msg: {
      test: '你好，世界'
    }
  }
}

// 语言变量
const appStore = localStorage.getItem('app')
const language = (appStore && JSON.parse(appStore)[LANG]) || ''
const locale = language || LANG_DEFAULT

// 初始化实例
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
