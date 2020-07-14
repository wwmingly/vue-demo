

const router = [
{
  path: '/vue',
  name: 'vue',
  component: () => import('@/components/layout/Container'),
  meta: {
    title: 'vue',
    icon: 'el-icon-tickets',
    showMenu: true
  },
  children: [{
    path: '/vueInit',
    name: 'VueInit',
    component: () => import('@/views/vue/vueInit/vueInit'),
    meta: {
      title: 'vue初始化',
      icon: 'el-icon-tickets',
      showMenu: true
    }
  }, {
    path: '/vueRouter',
    name: 'VueRouter',
    component: () => import('@/views/vue/vueRouter/vueRouter'),
    meta: {
      title: 'vue路由配置',
      icon: 'el-icon-tickets',
      showMenu: true
    }
  }, {
    path: '/vueVuex',
    name: 'VueVuex',
    component: () => import('@/views/vue/vueVuex/vueVuex'),
    meta: {
      title: 'vuex状态管理',
      icon: 'el-icon-tickets',
      showMenu: true
    }
  }]
}]
export default router