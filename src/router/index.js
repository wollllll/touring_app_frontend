import auth from '@/pages/auth'
import top from '@/pages/top'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'top',
      component: top,
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth,
    },
  ],
})
