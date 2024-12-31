/**
 * 本地数据缓存
 */
const storage = {
  /**
   * 读取数据
   */
  get: (key) => {
    return dd.getStorageSync({ key }).data
  },
  /**
   * 保存数据
   */
  set: (key, data) => {
    return dd.setStorageSync({ key, data })
  },
  /**
   * 删除数据
   */
  remove: (key) => {
    dd.removeStorageSync({ key })
  }
}

export default storage
