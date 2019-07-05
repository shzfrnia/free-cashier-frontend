import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const redirectIfAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/admin/admin-reservation')
}

const redirectIfNotAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/admin/login')
}


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import('./views/404.vue'),
      meta: {
        bkColor: 'red',
        bkImgUrl: '/404-background-3.png'
      }
    },
    {
      path: '/',
      beforeEnter: (to, from, next) => next('/tables')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('./views/Home.vue'),
      meta: {
        bkColor: "rgb(203, 128, 56)",
        bkImgUrl: "/Table.png"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        bkColor: "rgb(203, 128, 56)",
        bkImgUrl: "/About.jpg"
      }
    },
    {
      path: '/admin',
      component: () => import('./views/AdminPanel.vue'),
      children: [
        {
          path: 'login',
          component: () => import('./components/Admin/AdminLogin'),
          meta: {
            bkImgUrl: "/adminback.jpeg",
            bkColor: '#ad2e3c'
          },
          beforeEnter: redirectIfAuthenticated
        },
        {
          path: '',
          component: () => import('./components/Admin/AdminMenu.vue'),
          meta: {
            bkImgUrl: "/adminback.jpeg",
            bkColor: '#ad2e3c'
          },
          children: [
            {
              path: '',
              name: 'admin',
              component: () => import('./components/Admin/ReservationFormAdmin.vue'),
              meta: {
                bkImgUrl: "/adminback.jpeg",
                bkColor: '#ad2e3c'
              }
            },
            {
              path: 'reservations',
              component: () => import('./components/Admin/Reservations.vue'),
              meta: {
                bkImgUrl: "/adminback.jpeg",
                bkColor: '#ad2e3c'
              }
            },
            {
              path: 'tables',
              component: () => import('./components/Admin/Tables'),
              meta: {
                bkImgUrl: "/adminback.jpeg",
                bkColor: '#ad2e3c'
              }
            }
          ],
          beforeEnter: redirectIfNotAuthenticated
        }
      ],
      meta: {
        bkImgUrl: "/adminback.jpeg",
        bkColor: '#ad2e3c'
      }
    }
  ]
})
