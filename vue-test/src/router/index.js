import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage
  },
  {
    path: '/create-user',
    name: 'Create',
    component: () => import('@/views/CreateUser')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
