import router from '@/router'
import { userStore } from '@/stores/user'
import { TOKEN } from '@/constant'
import { storeToRefs } from 'pinia'

const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 根据是否有token判断用户是否登录
  const userData = storeToRefs(userStore())
  const token = userData[TOKEN]
  const { userInfo } = userData
  const { getUserInfo, hasUserInfo } = userStore()
  if (token.value) {
    // 已登录不允许进入白名单页面
    if (whiteList.includes(to.path)) {
      next('/')
    } else {
      // 如果没有用户信息则获取用户信息
      if (!hasUserInfo) {
        userInfo.value = await getUserInfo()
      }
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
