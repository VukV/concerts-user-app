import Vue from 'vue'
import VueRouter from 'vue-router'
import ConcertsView from "@/views/ConcertsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/concerts',
    name: 'concerts',
    component: ConcertsView,
    alias: '/'
  },
  {
    path: '/my-reservations',
    name: 'my reservations',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReservationsView.vue')
  },
  {
    path: '/single-concert/:id',
    name: 'single concert',
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleConcertView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
