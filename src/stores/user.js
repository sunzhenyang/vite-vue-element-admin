import { defineStore } from 'pinia'
import md5 from 'md5'
import { login } from '../api/sys'
import { TOKEN } from '../constant'
export const userStore = defineStore('user', {
  state: () => ({
    [TOKEN]: ''
  }),
  getters: {},
  actions: {
    async login(userInfo) {
      const { username, password } = userInfo
      return await login({ username, password: md5(password) })
    }
  },
  persist: true
})
