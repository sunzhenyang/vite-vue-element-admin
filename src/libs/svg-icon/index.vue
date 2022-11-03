<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 图标名称（剔除 icon- 之后的）
  name: {
    type: String,
    required: true
  },
  // 图标颜色
  color: {
    type: String
  },
  // 自定义图标类名
  fillClass: {
    type: String
  }
})
// 真实显示的 svg 图标名（拼接 #icon-）
const symbolId = computed(() => `#icon-${props.name}`)
</script>
