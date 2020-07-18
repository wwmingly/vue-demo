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
        <my-test class="common-markdown">
          <template slot="title_1">
            <div class="common_slot-title">我这里是插槽，就是显示出来了，哈哈哈</div>
          </template>
        </my-test>
      </template>
    </small-layout>
  </div>
</template>
<script>
import smallLayout from "@/components/smallLayout/Index";
import comTree from "@/components/tree/Index";
export default {
  name: "VueInit",
  components: {
    smallLayout,
    comTree,
    myTest: () => import("./markdown/test.md")
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
              label: "插件",
              id: "1_4",
              level: 2,
              children: [
                {
                  label: "echarts",
                  id: "1_4_1",
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
      }
    };
  },
  created() {},
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>
<style lang="scss">
.vue_vue_init_vue_init-container {
  .common_slot-title {
    background: #fff;
    width: 100%;
    padding: 20px 19px;
    position: relative;
    left: -20px;
    border-left: 2px solid #5f9ea0;
  }
}
</style>
