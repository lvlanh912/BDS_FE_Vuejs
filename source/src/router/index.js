import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
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
    path: '/users',
    name: 'users',
    component: ()=>import('../views/Users/UsersView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: ()=>import('../views/News/NewsView.vue')
  },
  {
    path: '/properties',
    name: 'properties',
    component: ()=>import('../views/Properties/PropertiesView.vue')
  },
  {
    path: '/sessions',
    name: 'sessions',
    component: ()=>import('../views/Sessions/SessionsView.vue')
  },
  {
    path: '/users/edit/:id',
    name: 'user.edit',
    component: ()=>import('../views/Users/Edit.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
