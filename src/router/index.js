import { createRouter, createWebHistory } from 'vue-router'
import BoardList from '@/components/BoardList.vue'
import BoardWrite from '@/components/BoardWrite.vue'

const routes = [
  {
    path: '/',
    component: BoardList   // ⭐ 기본 화면
  },
  {
    path: '/write',
    component: BoardWrite
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
