import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/',
          name: 'step1',
          component: () => import('./components/Step1.vue')
        },
        {
          path: '/credit-card',
          name: 'credit-card',
          props: true,
          component: () => import('./components/credit-card.vue')
        },
        {
          path: '/web-shop',
          name: 'web-shop',
          props: true,
          component: () => import('./components/web-shop.vue')
        },
        {
          path: '/finish',
          name: 'finish',
          component: () => import('./components/finish.vue')
        }
      ]
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
