import Vue from 'vue'
import Router from 'vue-router'
import vueRouter from './vueRouter'
import Layout from '../components/layout/Index'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/login'),
      meta: {
        title: '登录',
        showMenu: false
      }
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      meta: {
        title: 'Layout',
        icon: 'el-icon-tickets',
        showMenu: true
      },
      children: [
        {
          path: '/index',
          name: 'Index',
          component: () => import('@/views/index/index'),
          meta: {
            title: '首页',
            icon: 'el-icon-tickets',
            showMenu: true
          }
        },
        ...vueRouter
      ]
    },
    
  ]
})
