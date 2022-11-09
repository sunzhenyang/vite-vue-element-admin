import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => ({
    sidebarOpened: true
  }),
  getters: {},
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    }
  },
  persist: true
})
