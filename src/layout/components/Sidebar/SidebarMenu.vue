<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :unique-opened="true"
    default-active="2-1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子集 menu 菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><i-ep-location /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><i-ep-location /></el-icon>
        <span>导航二</span>
      </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
    </el-sub-menu>
    <!-- 具体菜单项 -->
    <el-menu-item index="4">
      <el-icon><i-ep-setting /></el-icon>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
console.log(routes.value)
</script>

<style lang="scss" scoped></style>
