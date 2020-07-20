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
            class="max_height no_scroll_box"
            v-for="(item) in routerTabs"
            :key="item.path"
            :label="item.meta.title"
            :name="item.path"
          >
            <router-view />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MenuLeft from "./components/MenuLeft";
import ComHeader from "../header/Index";
export default {
  name: "Layout",
  components: { MenuLeft, ComHeader },
  data() {
    return {
      routerValue: ""
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    routerTabs() {
      return this.$store.state.routerTabs;
    }
  },
  watch: {
    $route(val) {
      this.initRouter(val.path);
    }
  },
  mounted() {
    this.initRouter(this.$route.path);
  },
  methods: {
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
}
</style>
