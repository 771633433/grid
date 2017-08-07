import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',component: Page},
    {path:'/foo',component:Foo},
    {path:'/bar',component:Bar}
  ]
})

