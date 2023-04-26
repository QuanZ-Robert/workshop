import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = new VueRouter({ mode: 'history', routes })

export default router
