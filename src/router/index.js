import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',component: Page}
  ]
})

