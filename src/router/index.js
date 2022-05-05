import auth from '@/pages/auth'
import top from '@/pages/top'
import userEdit from '@/pages/users/edit'
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
    {
      path: '/users/:id/edit',
      name: 'user_edit',
      component: userEdit,
    },
  ],
})
