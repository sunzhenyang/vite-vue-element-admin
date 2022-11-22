<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="ruleFormRef"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <lang-select class="lang-select" effect="light"></lang-select>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon name="user" />
        </span>
        <el-input
          :placeholder="$t('msg.login.usernameTip')"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon name="password" />
        </span>
        <el-input
          :placeholder="$t('msg.login.passwordTip')"
          name="password"
          v-model="loginForm.password"
          :type="passwordType"
        />
        <span class="show-pwd">
          <svg-icon
            :name="passwordType === 'password' ? 'eye' : 'eye-open'"
            @click="handlePwdTypeChange"
          />
        </span>
      </el-form-item>

      <el-button
        type="primary"
        size="large"
        class="submitBtn"
        :loading="loading"
        @click="handleSubmit"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
import LangSelect from '@/components/LangSelect/index.vue'
import { ref } from 'vue'
import { validatePassword } from './rules'
import { userStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { TOKEN } from '@/constant'
import { useRouter } from 'vue-router'
import { setTimeStamp } from '@/utils/auth'
import { useI18n } from 'vue-i18n'
const router = useRouter()

// 登录按钮加载状态
const loading = ref(false)

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 验证规则
const i18n = useI18n()
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})

// 处理密码框文本显示状态
const passwordType = ref('password')
const handlePwdTypeChange = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

// 表单元素
const ruleFormRef = ref(null)

const token = storeToRefs(userStore())[TOKEN]

// 提交表单
function handleSubmit() {
  ruleFormRef.value.validate(async valid => {
    if (valid) {
      loading.value = true
      const { login } = userStore()
      login(loginForm.value)
        .then(res => {
          loading.value = false
          token.value = res.token
          setTimeStamp()
          router.push('/')
        })
        .catch(err => {
          loading.value = false
          console.log(err)
        })
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 72%;
      .el-input__wrapper {
        width: 100%;
        background: transparent;
        box-shadow: none;
        input {
          background: transparent;
          border: 0px;
          border-radius: 0px;
          padding: 12px 0;
          color: $light_gray;
          height: 47px;
          caret-color: $cursor;
        }
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: #fff;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .submitBtn {
    width: 100%;
    margin-bottom: 30px;
    font-size: 16px;
    height: 48px;
    margin-top: 12px;
  }
  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;
  }
}
</style>
