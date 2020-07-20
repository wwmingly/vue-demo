

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
    }, {
      path: '/vueAxios',
      name: 'VueAxios',
      component: () => import('@/views/vue/vueAxios/vueAxios'),
      meta: {
        title: 'axios资源请求',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }, {
      path: '/vueWebpack',
      name: 'VueWebpack',
      component: () => import('@/views/vue/vueWebpack/vueWebpack'),
      meta: {
        title: 'webpack',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }, {
      path: '/vueDirective',
      name: 'VueDirective',
      component: () => import('@/views/vue/vueDirective/vueDirective'),
      meta: {
        title: '指令',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }, {
      path: '/vueFilters',
      name: 'VueFilters',
      component: () => import('@/views/vue/vueFilters/vueFilters'),
      meta: {
        title: '过滤器',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }, {
      path: '/vueSource',
      name: 'VueSource',
      component: () => import('@/views/vue/vueSource/vueSource'),
      meta: {
        title: '源码分析',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }]
  }]
export default router