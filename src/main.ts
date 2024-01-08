import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/css/index.css'

// 使用 unocss 必须引入，否则不生效
import "uno.css";

const vm = createApp(App)

vm.use(router)
vm.mount('#app')
