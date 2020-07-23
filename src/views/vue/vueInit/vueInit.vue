<template>
  <div class="vue_vue_init_vue_init-container">
    <small-layout>
      <template slot="left">
        <com-tree
          :data="treeData"
          :current-node-key="'1_1_1'"
          :node-key="'id'"
          @node-click="handleNodeClick"
        ></com-tree>
      </template>
      <template slot="right">
        <vue-init class="common-markdown max_height no_scroll_box" ref="scrollBox">
          <template slot="title_1">
            <div class="common_slot-title" ref="position_1_1_1">1、初始化项目</div>
          </template>
          <template slot="images_1">
            <div class="common_slot-images">
              <el-image :src="require('@/assets/images/vueInit/001.jpg')" fit="fill"></el-image>
            </div>
          </template>
          <template slot="title_2">
            <div class="common_slot-title" ref="position_1_1_2">2、配置scss/less-loader</div>
          </template>
          <template slot="images_2">
            <div class="common_slot-images">
              <el-image :src="require('@/assets/images/vueInit/002.jpg')" fit="fill"></el-image>
            </div>
          </template>
          <template slot="title_3">
            <div class="common_slot-title" ref="position_1_1_3">3、引入element-ui</div>
          </template>
          <template slot="title_4">
            <div class="common_slot-title" ref="position_1_1_4">4、字体</div>
          </template>
          <template slot="title_5">
            <div class="common_slot-title" ref="position_1_1_5">5、搭建布局</div>
          </template>
          <template slot="images_5">
            <div class="common_slot-images">
              <el-image :src="require('@/assets/images/vueInit/005.jpg')" fit="fill"></el-image>
            </div>
          </template>
          <template slot="markdown_5">
            <el-collapse v-model="activeMarks">
              <el-collapse-item title="Index.vue文件" name="1">
                <layout-md></layout-md>
              </el-collapse-item>
              <el-collapse-item title="Container.vue文件" name="2">
                <container-md></container-md>
              </el-collapse-item>
              <el-collapse-item title="MenuLeft.vue文件" name="3">
                <menu-left-md></menu-left-md>
              </el-collapse-item>
              <el-collapse-item title="MenuNav.vue文件" name="4">
                <menu-nav-md></menu-nav-md>
              </el-collapse-item>
            </el-collapse>
          </template>
          <template slot="title_6">
            <div class="common_slot-title" ref="position_1_1_6">6、样式抽取</div>
          </template>
          <template slot="markdown_6">
            <el-collapse v-model="activeStyle">
              <el-collapse-item title="reset.scss文件" name="1">
                <reset-style></reset-style>
              </el-collapse-item>
              <el-collapse-item title="variable.scss文件" name="2">
                <variable-style></variable-style>
              </el-collapse-item>
              <el-collapse-item title="index.scss文件" name="3">
                <index-style></index-style>
              </el-collapse-item>
            </el-collapse>
          </template>
          <template slot="title_7">
            <div class="common_slot-title" ref="position_1_1_7">7、路由配置</div>
          </template>
          <template slot="markdown_7">
            <el-collapse v-model="activeRouter">
              <el-collapse-item title="index.js文件" name="1">
                <index-router></index-router>
              </el-collapse-item>
              <el-collapse-item title="vueRouter.js文件" name="2">
                <vue-router-router></vue-router-router>
              </el-collapse-item>
            </el-collapse>
          </template>
          <template slot="title_8">
            <div class="common_slot-title" ref="position_1_1_8">8、vuex状态管理</div>
          </template>
          <template slot="images_8">
            <div class="common_slot-images">
              <el-image :src="require('@/assets/images/vueInit/008.jpg')" fit="fill"></el-image>
            </div>
          </template>
          <template slot="markdown_8">
            <el-collapse v-model="activeVuex">
              <el-collapse-item title="index.js文件" name="1">
                <index-vuex></index-vuex>
              </el-collapse-item>
              <el-collapse-item title="state.js文件" name="2">
                <state-vuex></state-vuex>
              </el-collapse-item>
              <el-collapse-item title="mutations.js文件" name="3">
                <mutations-vuex></mutations-vuex>
              </el-collapse-item>
              <el-collapse-item title="actions.js文件" name="4">
                <actions-vuex></actions-vuex>
              </el-collapse-item>
              <el-collapse-item title="getters.js文件" name="5">
                <getters-vuex></getters-vuex>
              </el-collapse-item>
            </el-collapse>
          </template>
          <template slot="title_9">
            <div class="common_slot-title" ref="position_1_1_9">9、axios</div>
          </template>
          <template slot="markdown_9">
            <el-collapse v-model="activeAxios">
              <el-collapse-item title="index.js文件" name="1">
                <request-axios></request-axios>
              </el-collapse-item>
            </el-collapse>
          </template>
          <template slot="title_10">
            <div class="common_slot-title" ref="position_1_1_10">10、优化</div>
          </template>
          <template slot="title_11">
            <div class="common_slot-title" ref="position_1_1_11">11、效果图</div>
          </template>
          <template slot="title_21">
            <div class="common_slot-title" ref="position_1_2_1">12、webpack配置</div>
          </template>
          <template slot="title_22">
            <div class="common_slot-title" ref="position_1_2_2">13、环境变量配置</div>
          </template>
          <template slot="title_31">
            <div class="common_slot-title" ref="position_1_3_1">14、vscode配置与插件推荐</div>
          </template>
          <template slot="title_32">
            <div class="common_slot-title" ref="position_1_3_2">15、.eslintrc.js文件</div>
          </template>
          <template slot="title_41">
            <div class="common_slot-title" ref="position_1_4_1">16、用户信息存储</div>
          </template>
          <template slot="title_51">
            <div class="common_slot-title" ref="position_1_5_1">16、Echarts</div>
          </template>
        </vue-init>
      </template>
    </small-layout>
  </div>
</template>
<script>
import smallLayout from "@/components/smallLayout/Index";
import { Fragment } from "vue-fragment";
import comTree from "@/components/tree/Index";
export default {
  name: "VueInit",
  components: {
    smallLayout,
    comTree,
    vueInit: () => import("./markdown/vueInit.md"),
    layoutMd: () => import("./markdown/layout/Index.md"),
    containerMd: () => import("./markdown/layout/Container.md"),
    menuLeftMd: () => import("./markdown/layout/components/MenuLeft.md"),
    menuNavMd: () => import("./markdown/layout/components/MenuNav.md"),
    variableStyle: () => import("./markdown/styles/variable.md"),
    resetStyle: () => import("./markdown/styles/reset.md"),
    indexStyle: () => import("./markdown/styles/index.md"),
    indexRouter: () => import("./markdown/router/index.md"),
    vueRouterRouter: () => import("./markdown/router/vueRouter.md"),
    indexVuex: () => import("./markdown/vuex/index.md"),
    stateVuex: () => import("./markdown/vuex/state.md"),
    mutationsVuex: () => import("./markdown/vuex/mutations.md"),
    actionsVuex: () => import("./markdown/vuex/actions.md"),
    gettersVuex: () => import("./markdown/vuex/getters.md"),
    requestAxios: () => import("./markdown/utils/request/index.md")
  },
  data() {
    return {
      treeData: [
        {
          label: "项目",
          id: "1",
          level: 1,
          children: [
            {
              label: "搭建项目",
              id: "1_1",
              level: 2,
              children: [
                {
                  label: "项目初始化",
                  id: "1_1_1",
                  level: 3
                },
                {
                  label: "配置scss/less-loader",
                  id: "1_1_2",
                  level: 3
                },
                {
                  label: "引入ElementUI",
                  id: "1_1_3",
                  level: 3
                },
                {
                  label: "字体",
                  id: "1_1_4",
                  level: 3
                },
                {
                  label: "搭建布局",
                  id: "1_1_5",
                  level: 3
                },
                {
                  label: "样式抽取",
                  id: "1_1_6",
                  level: 3
                },
                {
                  label: "路由配置",
                  id: "1_1_7",
                  level: 3
                },
                {
                  label: "vuex管理",
                  id: "1_1_8",
                  level: 3
                },
                {
                  label: "axios",
                  id: "1_1_9",
                  level: 3
                },
                {
                  label: "优化",
                  id: "1_1_10",
                  level: 3
                },
                {
                  label: "基本骨架，及效果",
                  id: "1_1_11",
                  level: 3
                }
              ]
            },
            {
              label: "项目环境配置",
              id: "1_2",
              level: 2,
              children: [
                {
                  label: "webpack配置",
                  id: "1_2_1",
                  level: 3
                },
                {
                  label: "环境变量配置",
                  id: "1_2_2",
                  level: 3
                }
              ]
            },
            {
              label: "eslint",
              id: "1_3",
              level: 2,
              children: [
                {
                  label: "vscode配置与插件推荐",
                  id: "1_3_1",
                  level: 3
                },
                {
                  label: ".eslintrc.js文件",
                  id: "1_3_2",
                  level: 3
                }
              ]
            },
            {
              label: "登录",
              id: "1_4",
              level: 2,
              children: [
                {
                  label: "用户信息存储",
                  id: "1_4_1",
                  level: 3
                }
              ]
            },
            {
              label: "插件",
              id: "1_5",
              level: 2,
              children: [
                {
                  label: "echarts",
                  id: "1_5_1",
                  level: 3
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      activeMarks: [],
      activeStyle: [],
      activeRouter: [],
      activeVuex: [],
      activeAxios: []
    };
  },
  created() {
    // console.log(menuNavMd)
  },
  mounted() {
    this.$nextTick(() => {
      this.$root.$el.addEventListener("scroll", e => {});
    });
  },
  methods: {
    handleNodeClick(data) {
      this.moveContents(data);
    },
    // 移动
    moveContents(data) {
      this.$nextTick(function() {
        // let el = document.getElementsByClassName(`position_${data.id}`)[0];
        let ref = this.$refs[`position_${data.id}`];
        if (!ref) return;
        let parent = this.$refs.scrollBox.$el;
        // document.getElementsByClassName(
        //   `small_layout_scroll-box`
        // )[0];
        parent.scrollTo({
          behavior: "smooth",
          top:
            ref.offsetTop - parent.offsetTop === 20
              ? 0
              : ref.offsetTop - parent.offsetTop
        });
      });
    }
  }
};
</script>
<style lang="scss">
.vue_vue_init_vue_init-container {
  .common-markdown {
    line-height: 30px;
    .max_height {
      height: calc(100vh - 101px);
      overflow: auto;
    }
  }
  .el-collapse-item__header {
    background-color: #f5f5f5;
  }
  .el-collapse-item__content {
    padding: 10px;
  }
}
</style>
