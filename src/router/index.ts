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
    },
    {
      path: '/roles-and-permissions',
      name: 'roles-and-permissions',
      component: () => import('../views/RolesAndPermissionsView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/dummy-1',
      name: 'dummy-1',
      component: () => import('../views/Dummy1View.vue')
    },
    {
      path: '/dummy-2',
      name: 'dummy-2',
      component: () => import('../views/Dummy2View.vue')
    }
  ]
})

export default router
