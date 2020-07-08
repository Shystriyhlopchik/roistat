import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create-user',
    name: 'create',
    meta: {layout: 'empty'},
    component: () => import('../views/CreateUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
