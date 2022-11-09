<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!sidebarOpened"
    :unique-opened="true"
    :default-active="activeMenu"
    :background-color="cssVar.menuBg"
    :text-color="cssVar.menuText"
    :active-text-color="cssVar.menuActiveText"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { userStore } from '@/stores/user'
import { appStore } from '@/stores/app'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
import { storeToRefs } from 'pinia'

const { cssVar } = storeToRefs(userStore())

const store_app = appStore()
const { sidebarOpened } = storeToRefs(store_app)

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

// 获取当前激活菜单
const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped>
@import '@/styles/variables.module.scss';
:deep(.el-menu-item) {
  &.is-active {
    background: $menuActive;
  }
}
</style>
