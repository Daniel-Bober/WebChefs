import { createRouter, createWebHistory } from 'vue-router'
import UserEditView from "@/views/UserEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user-edit',
      name: 'user-edit',
      component: UserEditView
    },
    {
      path: '/user-list',
      name: 'user-list',
      component: () => import('../views/UserListView.vue')
    }
  ]
})

export default router
