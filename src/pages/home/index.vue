<template>
  <div class="w-800 m-auto">
    <div>{{ userStore.info.name || '未登录' }}</div>
    <div>count: {{ counterStore.count }}</div>
    <div>dobule count: {{ counterStore.double }}</div>
    <div>count2: {{ counterStore.count2 }}</div>
    <div>all: {{ counterStore.all }}</div>
    <div>obj的a：{{ counterStore.obj?.a }}</div>
    <button @click.stop="add" class="w-60 h-32 lh-32 cursor-pointer">加</button>
    <button class="w-160 m-l20 h-32 lh-32 cursor-pointer" @click.stop="setall">
      修改多个 store 数据
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
import { useCounterStore } from '@/store';
const counterStore = useCounterStore();
const add = () => {
  counterStore.addCount();
};
// 这样定义的基础类型数据没有双向绑定，如果对象类型的数据，则会因为浅拷贝而有双向绑定的效果
let { count, count2, obj } = counterStore;

const setall = () => {
  count++;
  count2++;
  obj.a += 2;

  counterStore.$patch({
    count,
    count2,
  });
};
</script>
