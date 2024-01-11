import { defineStore } from "pinia";
import { store } from "../index";
interface HistoryItem {
  path: string // 页面路由
  from: string  // 从哪个页面进入
}
// 使用 store
export const useRouteStore = defineStore('route', {
  state () {
    return {
      historyList: [] as Array<HistoryItem>
    }
  },
  actions: {
    addHistory (route: HistoryItem) {
      this.historyList.push(route)
      if (this.historyList.length > 10) {
        this.historyList.shift()
      }
    }
  }
})
// 在非 vue 组件中使用 pinia
export function  useRouteStoreWidthOut () {
  return useRouteStore(store)
} 