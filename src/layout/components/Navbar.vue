<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="userInfo.avatar"
          ></el-avatar>
          <el-icon><Setting /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 首页 </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Hamburger from '@/components/Hamburger.vue'
import { userStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const user_store = userStore()
const { userInfo } = storeToRefs(user_store)
const { logout } = user_store
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    :deep(.avatar-container) {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
