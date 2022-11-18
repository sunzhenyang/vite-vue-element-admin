import { defineStore } from 'pinia'
import { LANG, LANG_DEFAULT } from '@/constant'

export const appStore = defineStore('app', {
  state: () => ({
    sidebarOpened: true,
    [LANG]: LANG_DEFAULT
  }),
  getters: {},
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    }
  },
  persist: true
})
