<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :name="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const store = appStore()
const { sidebarOpened } = storeToRefs(store)
const { triggerSidebarOpened } = store
const toggleClick = () => {
  triggerSidebarOpened()
}

const icon = computed(() =>
  sidebarOpened.value ? 'hamburger-opened' : 'hamburger-closed'
)
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
