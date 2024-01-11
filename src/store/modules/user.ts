import { defineStore } from 'pinia';
import { store } from '../index'
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      info: {
        id: 0,
        name: ''
      }
    }
  },
  actions: {
    getInfo () {
      // 获取用户信息
      return new Promise((reslove, reject) => {
        // 先判断是否有 token ，没有token就是没有登录状态，返回初始数据
        if (this.info.id) {
          reslove(this.info)
        } else {
          // 请求接口获取用户信息
        }
      })
    }
  }
})


// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store);
}
