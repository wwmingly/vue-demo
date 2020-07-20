 <template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo no_scroll_box"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :background-color="variable.menuBackgroundColor"
    @select="select"
    :text-color="variable.menuTextColor"
    :active-text-color="variable.menuActiveTextColor"
    ref="leftNavigation"
  >
    <template v-for="(item,index) in $router.options.routes">
      <template v-if="item.meta.showMenu&&item.children">
        <MenuNav :key="index" :menuData="item.children"></MenuNav>
      </template>
    </template>
  </el-menu>
</template>

<script>
import MenuNav from "./MenuNav";
import variable from "@/assets/styles/variable.scss";
// import debounce from "@/common/debounce";

export default {
  name: "leftMenu",
  data() {
    return {
      de: null
    };
  },
  computed: {
    // 侧边导航栏是否打开
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    // 标签路由栈
    routerTabs() {
      return this.$store.state.routerTabs;
    },
    // 当前所在的模块
    menuModule() {
      return "Index";
    },
    variable() {
      return variable;
    }
  },
  watch: {
    $route(val) {
      this.select(val.path);
    }
  },
  components: {
    MenuNav
  },
  mounted() {
    // FIXME 暂时注释
    // this.initLeftMenu();
    // 初始化展示首页
    this.select(this.$route.path);
  },
  methods: {
    // 判断要打开的父级路由
    initLeftMenu() {
      // 获取所有的路由对象,循环子菜单,分级成菜单树展示
      // 获取当前路由
      // let elSubmenu = null;
      // let needOpenSubmenu = false;
      // const curRoute = this.$route.path;
      // const allRoutes = this.$router.options.routes;
      // for (let i = 0; i < allRoutes.length; i += 1) {
      //   const { children } = allRoutes[i];
      //   // 如果有子路由
      //   if (children) {
      //     // 循环子路由 如果子路由和当前路由相等的直接退出循环
      //     for (let j = 0; i < children.length; j += 1) {
      //       // console.log('进来了');
      //       if (children[j].path === curRoute) break;
      //       // 如果该菜单下还有子菜单
      //       if (children[j].children) {
      //         const grandChild = children[j].children;
      //         for (let z = 0; z < grandChild[z].length; z += 1) {
      //           if (grandChild[z].path === curRoute) {
      //             elSubmenu = j;
      //             needOpenSubmenu = true;
      //             break;
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
      // if (this.$refs.leftNavigation && needOpenSubmenu) {
      //   this.$refs.leftNavigation.open(elSubmenu); // 打开子菜单
      // }
    },

    /**
     *@description: FIXME选中路由跳转
     *@param{}
     *@return:
     */
    select(index) {
      // // 路由不相等的时候push(解决路由相等时报错问题)
      if (this.$route.path !== index) {
        this.$router.push(index);
      }
      // 判断之前路由栈里没有此路由对象,否则不入栈
      if (this.routerTabs.every(item => item.path !== this.$route.path)) {
        this.routerTabs.push(this.$route);
        this.$store.commit("routerTabs", this.routerTabs);
      }
    },

    /**
     *@description: FIXME打开菜单
     */
    handleOpen() {
      // console.log('打开菜单');
    },

    /**
     *@description: FIXME关闭菜单
     */
    handleClose() {
      // console.log('菜单关闭');
    },
    /**
     *@description: 执行控制方法的时候加入节流或防抖
     *@param{}
     *@return:
     */
    control() {
      // debounce(
      //   "leftmenu",
      //   () => {
      //     this.$store.commit("isCollapse", !this.isCollapse);
      //   },
      //   300,
      //   true
      // );
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: calc(100% - 60px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>