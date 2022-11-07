import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { userStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
/**
 * 获取时间戳
 */
export function getTimeStamp() {
  const timeStamp = userStore()[TIME_STAMP]
  return timeStamp
}
/**
 * 设置时间戳
 */
export function setTimeStamp() {
  let timeStamp = storeToRefs(userStore())[TIME_STAMP]
  timeStamp.value = Date.now()
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间戳
  var currentTime = Date.now()
  // 缓存时间戳
  var timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
