import axios from 'axios'
import { userStore } from '@/stores/user'
import { TOKEN } from '@/constant'

const service = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加接口校验码
    config.headers.icode = 'DE31B80D68BC2A25'
    config.headers.Authorization = `Bearer ${userStore()[TOKEN]}`
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
    // 提示错误信息
    ElMessage.error({
      type: 'error',
      message: error.message,
      grouping: true
    })
    return Promise.reject(error)
  }
)

export default service
