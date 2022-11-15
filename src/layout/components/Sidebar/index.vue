<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        shape="square"
        :size="logoHeight"
        src="https://sunzhenyang.github.io/avatar.png"
      />
      <Transition>
        <h1 class="logo-title" v-if="sidebarOpened">ElementPlusAdmin</h1>
      </Transition>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

const store_app = appStore()
const { sidebarOpened } = storeToRefs(store_app)

let logoHeight = ref(44)
let logoHeightCssVal = computed(() => logoHeight.value + 'px')
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeightCssVal);
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
