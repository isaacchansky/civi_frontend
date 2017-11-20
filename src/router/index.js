import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
