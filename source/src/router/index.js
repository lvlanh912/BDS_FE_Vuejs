import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/admin',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/users',
    name: 'users',
    component: ()=>import('../views/UsersView.vue')
  },
  {
    path: '/admin/news',
    name: 'news',
    component: ()=>import('../views/NewsView.vue')
  },
  {
    path: '/admin/properties',
    name: 'properties',
    component: ()=>import('../views/PropertiesView.vue')
  },
  {
    path: '/admin/sessions',
    name: 'sessions',
    component: ()=>import('../views/SessionsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
