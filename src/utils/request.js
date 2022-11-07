import axios from 'axios'
import { userStore } from '@/stores/user'
import { TOKEN } from '@/constant'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加接口校验码
    config.headers.icode = 'DE31B80D68BC2A25'
    const token = userStore()[TOKEN]
    if (token) {
      if (isCheckTimeout()) {
        // 登出操作
        userStore().logout()
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误，提示错误消息
      ElMessage.error({
        type: 'error',
        message: message,
        grouping: true
      })
      return Promise.reject(new Error(message))
    }
  },
  error => {
    // TODO: 将来处理 token 超时问题
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token超时，自动退出
      userStore().logout()
    } else {
      // 提示错误信息
      ElMessage.error({
        type: 'error',
        message: error.message,
        grouping: true
      })
    }

    return Promise.reject(error)
  }
)

export default service
