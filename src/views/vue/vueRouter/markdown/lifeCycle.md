
  路由生命周期，也叫路由导航守卫
<slot name="title_1"></slot>
  let router = new Router();
  router.beforeEach((to,from,next)=>{                         // 全局前置守卫
    // to           是即将进入的页面（信息）
    // from         是即将离开的页面（信息）
    // next()       是一个方法，必须调用该方法resolve这个钩子，
  })
  next使用方式: 
    next()                                     // 正常进入下一个钩子
    next('/login')或者next({path:'/login'})    // 指定进入 path = 'login' 页面
    next(false)                                // 中断当前导航
  router.beforeResolve((to,from,next)=>{                      // 全局解析守卫, 时间触发比 全局前置守卫慢些
    // 参数同beforeEach
  })
  router.afterEach((to, from) => {})                           // 全局后置守卫、钩子，没有next
  ...
<slot name="title_2"></slot>
  const router = new VueRouter({
    routes: [
      {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
        }
      }
    ]
  })
<slot name="title_3"></slot>
  const Foo = {
    template: `...`,
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    }
  }
参考地址：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
