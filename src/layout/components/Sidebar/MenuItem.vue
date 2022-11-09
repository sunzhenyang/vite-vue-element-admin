<template>
  <i
    v-if="icon.includes('iconfont')"
    class="iconfont"
    :class="`icon-${icon}`"
  ></i>
  <svg-icon v-else :name="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup>
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
