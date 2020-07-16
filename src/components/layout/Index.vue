<template>
  <el-container class="layout_layout-container">
    <!-- :width="`${isCollapse?60:200}px`" -->
    <transition name="slide-fade">
      <el-aside class="_el-aside" :style="`max-width:${isCollapse?60:200}px`">
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
    overflow-x: hidden;
    height: 100%;
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
}
</style>
