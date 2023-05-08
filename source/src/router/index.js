import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Admin/HomeView.vue'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'homeadmin',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/AboutView.vue')
  },
  {
    path: '/Admin/users',
    name: 'users',
    component: ()=>import('../views/Admin/Users/UsersView.vue')
  },
  {
    path: '/Admin/news',
    name: 'news',
    component: ()=>import('../views/Admin/News/NewsView.vue')
  },
  {
    path: '/Admin/properties',
    name: 'properties',
    component: ()=>import('../views/Admin/Properties/PropertiesView.vue')
  },
  {
    path: '/Admin/sessions',
    name: 'sessions',
    component: ()=>import('../views/Admin/Sessions/SessionsView.vue')
  },
  {
    path: '/Admin/users/edit/:id',
    name: 'user.edit',
    component: ()=>import('../views/Admin/Users/Edit.vue')
  },
  {
    path: '/Admin/users/:id',
    name: 'user.infor',
    component: ()=>import('../views/Admin/Users/Infor.vue')
  },
  {
    path: '/Admin/news/edit/:id',
    name: 'news.edit',
    component: ()=>import('../views/Admin/News/Edit.vue')
  },
  {
    path: '/Admin/news/:id',
    name: 'news.infor',
    component: ()=>import('../views/Admin/News/Infor.vue')
  },
  {
    path: '/Admin/properties/edit/:id',
    name: 'properties.edit',
    component: ()=>import('../views/Admin/Properties/Edit.vue')
  },
  {
    path: '/Admin/properties/:id',
    name: 'properties.infor',
    component: ()=>import('../views/Admin/Properties/Infor.vue')
  },
  {
    path: '/Admin/login',
    name: 'admin.login',
    component: ()=>import('../views/Admin/Login.vue')
  },
  {
    path: '/properties/:id',
    name: 'ItemProperties.infor',
    component: ()=>import('../views/ItemProperties.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
