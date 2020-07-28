<template>
  <el-container class="layout_layout-container">
    <!-- :width="`${isCollapse?60:200}px`" -->
    <transition name="slide-fade">
      <el-aside class="_el-aside" :style="`max-width:${isCollapse?60:200}px`">
        <div class="logo-container">
          <div class="logo-image">
            <el-image class="logo-r" :src="require(`../../assets/images/logo-r.png`)">
              <div slot="placeholder" class="image-slot">
                vvmily
                <span class="dot">vvmily</span>
              </div>
            </el-image>
            <el-image class="logo-v" :src="require(`../../assets/images/logo-v.png`)">
              <div slot="placeholder" class="image-slot">
                vvmily
                <span class="dot">vvmily</span>
              </div>
            </el-image>
          </div>
          <div v-if="!isCollapse" class="logo-txt">项目规范</div>
        </div>
        <menu-left></menu-left>
      </el-aside>
    </transition>
    <el-container>
      <el-header class="_el-header">
        <com-header></com-header>
      </el-header>
      <el-main>
        <el-tabs
          v-model="routerValue"
          type="card"
          :closable="routerTabs.length>1?true:false"
          @tab-remove="removeTab"
          @tab-click="clickTab"
        >
          <el-tab-pane
            v-for="(item) in routerTabs"
            :key="item.path"
            :label="item.meta.title"
            :name="item.path"
          >
            <!-- <router-view /> -->
          </el-tab-pane>
        </el-tabs>
        <!-- 当页面小于$mediaWidthHide宽度，处理方式 -->
        <com-tree
          class="router-left-tree"
          :data="routes"
          :current-node-key="activeRouter"
          :default-expanded-keys="[activeRouter]"
          :node-key="'path'"
          :filter="false"
          accordion
          :default-expand-all="false"
          :props="{children:'children',label:'name'}"
          @node-click="handleNodeClick"
        ></com-tree>
        <div class="max_height no_scroll_box">
          <transition name="contain-fade">
            <keep-alive>
              <router-view v-if="$route.meta.keep"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keep"></router-view>
          </transition>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MenuLeft from "./components/MenuLeft";
import ComHeader from "../header/Index";
export default {
  name: "Layout",
  components: {
    MenuLeft,
    ComHeader,
    comTree: () => import("@/components/tree/Index")
  },
  data() {
    return {
      routerValue: ""
      // include: []
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    routerTabs() {
      return this.$store.state.routerTabs;
    },
    include() {
      return this.routerTabs
        .filter(item => item.meta.keep)
        .map(item => item.name);
    },
    routes() {
      // 过滤非菜单路由
      return this.filterRoute(this.$router.options.routes);
    },
    activeRouter() {
      return this.$route.path;
    }
  },
  watch: {
    $route(to, from) {
      this.initRouter(to.path);
    }
  },
  mounted() {
    this.initRouter(this.$route.path);
    // console.log(this.$route.meta);
  },
  methods: {
    filterRoute(arr) {
      let fn = arr => {
        return arr
          .filter(item => item.meta.showMenu)
          .map(item => {
            item = Object.assign({}, item);
            if (item.children) {
              item.children = fn(item.children);
            }
            return item;
          });
      };
      return fn(arr);
    },
    initRouter(path) {
      this.routerValue = path;
    },
    // 点击tab路由
    clickTab(item) {
      if (item.name === this.$route.path) return;
      this.$router.push(item.name);
    },
    // 删除操作
    removeTab(path) {
      let tabs = this.routerTabs;
      let activePath = this.$route.path;
      if (activePath === path) {
        tabs.forEach((tab, index) => {
          if (tab.path === path) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              this.$router.push(nextTab.path);
            }
          }
        });
      }
      let _tabList = tabs.filter(tab => tab.path !== path);

      this.$store.commit("routerTabs", _tabList);
    },
    handleNodeClick(node, vm) {
      console.log(node);
      if (node.path === this.$route.path) return;
      this.$router.push(node.path);
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/variable.scss";
.layout_layout-container {
  height: 100%;
  ._el-aside {
    overflow: hidden;
    border-right: 1px solid $headerBorder;
    // height: calc(100% - 60px);
  }
  .router-left-tree {
    display: none;
  }
  .logo-container {
    display: flex;
    height: 60px;
    background: $headerBackground;
    justify-content: center;
    align-items: center;
    .logo-image {
      position: relative;
      height: 60px;
      width: 60px;
      overflow: hidden;
      .logo-v {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
      }

      .logo-r {
        animation: myfirst1 5s linear infinite;
      }
      @keyframes myfirst1 {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    .logo-txt {
      font-size: 24px;
      color: #fff;
      margin-top: -2px;
    }
  }
  .el-main {
    padding: 0;
  }
  ._el-header {
    padding: 0;
    background: $headerBackground;
  }
  .el-tabs__header {
    margin-bottom: 0;
  }
  .max_height {
    height: calc(100vh - 101px);
    overflow: auto;
  }
  .el-tabs__item:hover,
  .el-tabs__item.is-active {
    color: #5f9ea0;
  }
  @media screen and (max-width: $mediaWidthHide) {
    .el-main{
      overflow: hidden;
    }
    ._el-aside {
      display: none;
    }
    .router-left-tree {
      display: block;
      height: auto;
    }
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .contain-fade-enter-active {
    transition: all 0.2s ease;
  }
  .contain-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .contain-fade-enter,
  .contain-fade-leave-to {
    transform: translateX(10px);
    opacity: 0.2;
  }
}
</style>
