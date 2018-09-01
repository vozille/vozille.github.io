import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutComponent from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: AboutComponent,
      props: (route) => ({akash: route.query})
    }
  ]
})
