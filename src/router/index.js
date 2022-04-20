import { createRouter, createWebHistory } from 'vue-router'
import top from '@/pages/top'
import auth from '@/pages/auth'

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
