const toolsRouter = [

  {
    path: '/tools',
    name: 'Tools',
    component: () => import('@/components/layout/Container'),
    meta: {
      title: 'tools',
      icon: 'el-icon-tickets',
      showMenu: true
    },
    children: [{
      path: '/toolsFormValidation',
      name: 'ToolsFormValidation',
      component: () => import('@/views/tools/toolsFormValidation/toolsFormValidation'),
      meta: {
        title: '表单验证',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }, {
      path: '/toolsSecondaryDev',
      name: 'ToolsSecondaryDev',
      component: () => import('@/views/tools/toolsSecondaryDev/toolsSecondaryDev'),
      meta: {
        title: '常用组件二次开发',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }, {
      path: '/toolsStorage',
      name: 'ToolsStorage',
      component: () => import('@/views/tools/toolsStorage/toolsStorage'),
      meta: {
        title: '本地存储',
        icon: 'el-icon-tickets',
        showMenu: true
      }
    }]
  }


]

export default toolsRouter;