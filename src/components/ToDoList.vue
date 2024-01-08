<template>
  <div class="w-400 m-auto">
    <input class="h-32 inp"  @keydown.enter="add"  type="text" v-model="inp" />
    <button @click.stop="add" class="h-32 m-l10 w-50 cursor-pointer">添加</button>
    <ul class="list p-t10">
      <li class="h-24 lh-24 fs-14" v-for="(item, key) in list" :key="key">
        <input type="checkbox" v-model="item.done" /> {{ item.label }}
      </li>
    </ul>
    <div>
      <span>全选：</span>
      <input type="checkbox" v-model="allDone" />
      <span class="m-l10">{{ total }} / {{ active }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
const inp = ref('');
interface ListItem {
  label: string;
  done: boolean;
}
const list = ref<Array<ListItem>>([{ label: '吃饭', done: false }]);
const add = () => {
  if (!inp.value) {
    alert('请输入内容')
    return
  }
  list.value.push({
    label: inp.value,
    done: false,
  });
  inp.value = ''
};

const total = computed(() => list.value.length)

const active = computed(() => {
  return list.value.filter((el) => el.done).length
})

const allDone = computed({
  get () {
    return active.value === total.value
  },
  set (val) {
    list.value.forEach((el) => {
      el.done = Boolean(val)
    })
  }
})
</script>
<style lang="scss" scoped>
.inp {
  text-indent: 1em;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>
