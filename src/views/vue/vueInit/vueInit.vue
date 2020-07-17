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
    <!-- <draggable-dialog
      class="layout-guide"
      :bottom="30"
      :right="30"
      :width="300"
      :offset="[100,0,0,200]"
    >
      <template slot="header">
        <div class="guide-catalog">
          <span>目录</span>
        </div>
      </template>
      <template slot="body">
        <div class="guide-list">123</div>
      </template>
    </draggable-dialog>-->
  </div>
</template>
<script>
import draggableDialog from "@/components/draggableDialog/Index";
import smallLayout from "@/components/smallLayout/Index";
import comTree from "@/components/tree/Index";
export default {
  name: "VueInit",
  components: {
    draggableDialog,
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
                  label: "第一步",
                  id: "1_1_1",
                  level: 3
                },
                {
                  label: "第二步",
                  id: "1_1_2",
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
  .layout-guide {
    box-shadow: 0 0 10px #eee;
    background: #fff;

    .guide-catalog {
      height: 40px;
      line-height: 40px;
      background: #eee;
      padding: 0 10px;
    }
    .guide-list {
      min-height: 200px;
      box-sizing: border-box;
      padding: 10px;
    }
  }
}
</style>
