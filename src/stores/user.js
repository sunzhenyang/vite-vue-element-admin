import { defineStore } from 'pinia'
import md5 from 'md5'
import { login, getUserInfo } from '../api/sys'
import { TOKEN } from '../constant'
import router from '@/router'
export const userStore = defineStore('user', {
  state: () => ({
    [TOKEN]: '',
    userInfo: {}
  }),
  getters: {
    hasUserInfo: state => {
      return JSON.stringify(state.userInfo) != '{}'
    }
  },
  actions: {
    async login(userInfo) {
      const { username, password } = userInfo
      return await login({ username, password: md5(password) })
    },
    async getUserInfo() {
      return await getUserInfo()
    },
    logout() {
      this[TOKEN] = ''
      this.userInfo = {}
      router.push('/login')
    }
  },
  persist: true
})
