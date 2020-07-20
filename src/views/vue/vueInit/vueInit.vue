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
        <vue-init class="common-markdown">
          <template slot="title_1">
            <div class="common_slot-title position_1_1_1">1、初始化项目</div>
          </template>
          <template slot="title_2">
            <div class="common_slot-title position_1_1_2">2、配置scss/less-loader</div>
          </template>
          <template slot="images_2">
            <div class="common_slot-images">
              <el-image :src="require('@/assets/images/vueInit/002.jpg')" fit="fill"></el-image>
            </div>
          </template>
          <template slot="title_3">
            <div class="common_slot-title position_1_1_3">3、引入element-ui</div>
          </template>
          <template slot="title_4">
            <div class="common_slot-title position_1_1_4">4、字体</div>
          </template>
          <template slot="title_5">
            <div class="common_slot-title position_1_1_5">5、搭建布局</div>
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
            <div class="common_slot-title position_1_1_6">6、样式抽取</div>
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
            <div class="common_slot-title position_1_1_7">7、路由配置</div>
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
    vueRouterRouter: () => import("./markdown/router/vueRouter.md")
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
        },
        {
          // 当修改的文件，再此添加即可
          label: "工程文件",
          id: "2",
          level: 1,
          children: [
            {
              label: "build",
              id: "2_1",
              level: 2,
              children: [
                { label: "webpack.base.conf.js", id: "2_1_1", level: 3 }
              ]
            },
            {
              label: "config",
              id: "2_2",
              level: 2
            },
            {
              label: "src",
              id: "2_3",
              level: 2
            },
            {
              label: "static",
              id: "2_4",
              level: 2
            },
            {
              label: ".babelrc",
              id: "2_5",
              level: 2
            },
            {
              label: ".editorconfig",
              id: "2_6",
              level: 2
            },
            {
              label: ".eslintrc.js",
              id: "2_7",
              level: 2
            },
            {
              label: ".postcssrc.js",
              id: "2_8",
              level: 2
            },
            {
              label: "package.json",
              id: "2_9",
              level: 2
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
      activeRouter: []
    };
  },
  created() {
    // console.log(menuNavMd)
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
      this.moveContents(data);
    },
    // 移动
    moveContents(data) {
      let el = document.getElementsByClassName(`position_${data.id}`)[0];
      if (!el) return;
      let parent = document.getElementsByClassName(
        `small_layout_scroll-box`
      )[0];
      this.$nextTick(function() {
        parent.scrollTo({
          behavior: "smooth",
          top:
            el.offsetTop - parent.offsetTop === 20
              ? 0
              : el.offsetTop - parent.offsetTop
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
    pre {
      padding: 10px 0;
    }
    .common_slot-title {
      background: #fff;
      width: 100%;
      padding: 20px 19px;
      position: relative;
      left: -20px;
      border-left: 2px solid #5f9ea0;
      color: #5f9ea0;
      font-weight: bold;
    }
    .common_slot-images {
      .el-image {
        max-width: 1000px;
      }
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
