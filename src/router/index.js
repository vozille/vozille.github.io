import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home'
import AboutComponent from '@/components/About'
import DateMeComponent from '@/components/DateMe'
import SkillComponent from '@/components/SkillSet'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/dateme',
      name: 'Timeline',
      component: DateMeComponent,
      props: (route) => ({
        limit: route.query.limit
      })
    },
    {
      path: '/hireme',
      name: 'SkillSet',
      component: SkillComponent
    }
  ]
})
