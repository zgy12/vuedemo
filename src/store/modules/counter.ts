import { defineStore } from "pinia";
import {store} from '../index'

export const useCounterStore = defineStore('counter', {
  state () {
    return {
      count: 1,
      count2: 2,
      obj: {
        a: 1
      }
    }
  },
  getters: {
    double: (state) => {
      // 计算属性
      return state.count *2
    },
    all (): number {
      return this.count + this.count2
    }
  },
  actions: {
    addCount () {
      // 这里可以做一些异步操作
      this.count ++
    }
  }
})

export function useCounterStoreWidthOut () {
  return useCounterStore(store)
}

