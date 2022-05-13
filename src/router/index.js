import auth from '@/pages/auth'
import complete from '@/pages/auth/complete'
import register from '@/pages/auth/register'
import top from '@/pages/top'
import userShow from '@/pages/users/show'
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
      name: 'auth_index',
      component: auth,
    },
    {
      path: '/auth/register',
      name: 'auth_register',
      component: register,
    },
    {
      path: '/auth/complete',
      name: 'auth_complete',
      component: complete,
    },
    {
      path: '/users/:id',
      name: 'user_show',
      component: userShow,
    },
    {
      path: '/users/:id/edit',
      name: 'user_edit',
      component: userEdit,
    },
  ],
})
