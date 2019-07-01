import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('./views/Home.vue'),
      meta: {
        bkColor: "#3EAF6F"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        bkColor: "#BE0031"
      }
    }
  ]
})
