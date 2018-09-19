import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import HomeMain from '@/components/home/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/home'
    }, {
      path: '/home',
      name: '首页',
      component: Home,
      redirect:'/home/main',
      children: [
        {path: 'main', name: '首页', component: HomeMain}
      ]
    },
  ]
})
