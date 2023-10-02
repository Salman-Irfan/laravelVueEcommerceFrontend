// Composables
import { createRouter, createWebHistory } from 'vue-router'
// home
import HomeView from "../views/HomeView.vue"
// not found
import NotFoundView from "../views/notFound/NotFoundView.vue"
// auth
import LoginView from "../views/auth/LoginView.vue"
import RequestPasswordView from "../views/auth/RequestPasswordView.vue"
import ResetPasswordView from "../views/auth/ResetPasswordView.vue"
// admin
import AppLayout from '../layouts/admin/AppLayout.vue'
import DashboardView from "../views/admin/DashboardView.vue"
import ProductsView from "../views/admin/ProductsView.vue"
// store
import store from '../store'


const routes = [
  // admin layout
  {
    path: '/app',
    name: 'app',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      // dashboard - admin
      {
        path: 'dashboard',
        name: 'app.dashboard',
        component: DashboardView,
      },
      // products - admin
      {
        path: 'products',
        name: 'app.products',
        component: ProductsView,
      },
    ],
  },
  // home
  {
    path: '/',
    name: "HomeView",
    component: HomeView
  },
  
  // login - guest
  {
    path: '/login',
    name: "LoginView",
    component: LoginView,
    meta: {
      requiresGuest: true
    },
  },
  // forgot / request password
  {
    path: '/request-password',
    name: "RequestPasswordView",
    component: RequestPasswordView,
    meta: {
      requiresGuest: true
    },
  },
  // reset password
  {
    path: '/reset-password/:token',
    name: "ResetPasswordView",
    component: ResetPasswordView,
    meta: {
      requiresGuest: true
    },
  },
  // page not found
  {
    path: '/:pathMatch(.*)',
    name: "NotFoundView",
    component: NotFoundView,
  },
]

// make router
const router = createRouter({
  history: createWebHistory(), //describes history modes true, normal urls, not hashes
  routes,
})

// router beforeEach method
router.beforeEach((to, from, next) => {
  // if page requires auth, and token doesn't exists
  if(to.meta.requiresAuth && !store.state.user.token){
    next({ name: 'LoginView'})
  }else if (to.meta.requiresGuest && store.state.user.token){
    next({ name: 'app.dashboard'})
  }else {
    next()
  }
})

export default router
