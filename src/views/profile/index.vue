<template>
  <div class="">个人中心</div>
  <div>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const disabled = ref(false)
const small = ref(false)
const background = ref(false)
const handleSizeChange = val => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = val => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped></style>
