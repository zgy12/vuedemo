import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/index.vue'),
      name: 'home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/todolist',
      component: () => import('@/pages/todolist/index.vue'),
      name: 'todolist',
      meta: {
        title: 'todo列表'
      }
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
  next()
})

export default router