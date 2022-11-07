import router from '@/router'
import { userStore } from '@/stores/user'
import { TOKEN } from '@/constant'

const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 根据是否有token判断用户是否登录
  const token = userStore()[TOKEN]
  if (token) {
    // 已登录不允许进入白名单页面
    if (whiteList.includes(to.path)) {
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录不允许进入白名单以外的界面
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
