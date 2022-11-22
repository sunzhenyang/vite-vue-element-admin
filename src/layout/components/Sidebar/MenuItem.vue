<template>
  <i
    v-if="icon.includes('iconfont')"
    class="iconfont sub-el-icon"
    :class="`icon-${icon}`"
  ></i>
  <svg-icon v-else :name="icon"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
