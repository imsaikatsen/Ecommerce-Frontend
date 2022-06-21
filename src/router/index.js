import { createRouter, createWebHistory } from 'vue-router'

const PublicLayout = () => import('@/layouts/PublicLayout');
const PrivateLayout = () => import('@/layouts/PrivateLayout');

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductsView from '../views/ProductsView.vue'
import AuthGuard from './auth.guard'

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '/',
        component: LoginView,
        name: "LoginView",
        meta: { title: "Admin Portal | Login" }
      },
],
  
},

  {
    path: '/',
    component: PrivateLayout,
    meta: { auth: true },
    children: [
      {
        path: '/dashboard',
        component: DashboardView,
        name: "DashboardView",
        meta: { auth: true, title: "Admin Portal | Dashboard" }
      },
      {
        path: '/products',
        component: ProductsView,
        name: "ProductsView",
        meta: { auth: true, title: "Admin Portal | Products" }
      },
],
  
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(AuthGuard);

export default router
