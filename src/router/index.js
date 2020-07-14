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
      path: '/layout',
      name: 'Layout',
      component: Layout,
      meta: {
        title: 'vue',
        icon: 'el-icon-tickets',
        showMenu: true // 是否显示
      },
      children: [
        // 左侧菜单中的所有路由出口
        ...vueRouter
      ]
    }
  ]
})
