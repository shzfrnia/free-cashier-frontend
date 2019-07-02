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
        bkColor: "rgb(203, 128, 56)",
        bkImgUrl: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/B1eYNZGrripnnry82/videoblocks-table-at-restaurant-blurred-background_rxthbuitx_thumbnail-full01.png"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        bkColor: "rgb(108, 114, 208)",
        bkImgUrl: "https://p1.zoon.ru/preview/21GwjXOddUtGt65EP1vjOw/2400x1500x75/1/9/6/original_52b02a1f40c0888d378b8e88_5a64d8ef38b5f.jpg"
      }
    }
  ]
})
