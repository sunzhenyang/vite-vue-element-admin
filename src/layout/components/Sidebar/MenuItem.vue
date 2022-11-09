<template>
  <component class="icon" :is="iconName" />
  <i-ep-setting class="icon" />
  <Setting />
  <!-- <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <svg-icon v-else :name="icon"></svg-icon> -->
  <span>{{ title }}</span>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const iconName = `i-ep-${props.icon}`
</script>

<style lang="scss" scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  line-height: 1.5em;
  font-weight: bold;
  font-size: 15px;
  background: #f00;
  margin-right: 4px;
}
</style>
