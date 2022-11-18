<template>
  <el-config-provider :locale="language === 'en' ? en : zhCn">
    <RouterView />
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { appStore } from '@/stores/app'
import { LANG } from '@/constant'
const language = storeToRefs(appStore())[LANG]
</script>

<style scoped></style>
