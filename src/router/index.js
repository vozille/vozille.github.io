import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home'
import AboutComponent from '@/components/About'
import TimelineComponent from '@/components/Timeline'
import SkillComponent from '@/components/SkillSet'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/blog',
      name: 'blog',
      component: AboutComponent,
      props: (route) => ({
        akash: route.query
      })
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: TimelineComponent,
      props: (route) => ({
        limit: route.query.limit
      })
    },
    {
      path: '/skills',
      name: 'SkillSet',
      component: SkillComponent
    }
  ]
})
