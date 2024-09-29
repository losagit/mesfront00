import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ingresos',
    name: 'ingresos',
    component: function () {
      return import('../views/Ingresos.vue')
    }
  },
  {
    path: '/nuevoingreso',
    name: 'nuevoingreso',
    component: function () {
      return import('../views/NuevoIngreso.vue')
    }
  },
  {
    path: '/gastos',
    name: 'gastos',
    component: function () {
      return import('../views/Gastos.vue')
    }
  },
  {
    path: '/nuevogasto',
    name: 'nuevogasto',
    component: function () {
      return import('../views/Nuevogasto.vue')
    }
  },
  {
    path: '/kardex',
    name: 'kardex',
    component: function () {
      return import('../views/kardex.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
