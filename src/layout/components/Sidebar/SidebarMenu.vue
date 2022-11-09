<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :unique-opened="true"
    default-active="2-1"
    :background-color="cssVar.menuBg"
    :text-color="cssVar.menuText"
    :active-text-color="cssVar.menuActiveText"
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
import { useRouter } from 'vue-router'
import { userStore } from '@/stores/user'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
import { storeToRefs } from 'pinia'

const { cssVar } = storeToRefs(userStore())

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
</script>

<style lang="scss" scoped></style>
