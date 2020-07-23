<template>
  <div class="vue_vue_router_vue_router-container">
    <small-layout>
      <template slot="left">
        <com-tree
          :data="treeData"
          :current-node-key="'1_1'"
          :node-key="'id'"
          @node-click="handleNodeClick"
        ></com-tree>
      </template>
      <template slot="right">
        <component :is="treeNode.router" class="common-markdown">
          <!-- 路由的生命周期        start -->
          <template slot="title_1">
            <div v-show="treeNode.router==='lifeCycle'" class="common_slot-title _mt10">全局守卫</div>
          </template>
          <template slot="title_2">
            <div v-show="treeNode.router==='lifeCycle'" class="common_slot-title _mt10">路由独立守卫</div>
          </template>
          <template slot="title_3">
            <div v-show="treeNode.router==='lifeCycle'" class="common_slot-title _mt10">组件内守卫</div>
          </template>
          <!-- 路由的生命周期        end -->
          <!-- 规则配置        start -->
          <template slot="title_1">
            <div v-show="treeNode.router==='rules'" class="common_slot-title">基础用法</div>
          </template>
          <template slot="title_2">
            <div v-show="treeNode.router==='rules'" class="common_slot-title">配置说明</div>
          </template>
          <!-- 规则配置        end -->
          <!-- 源码解析        start -->
          <template slot="title_1">
            <div v-show="treeNode.router==='sourceCode'" class="common_slot-title">基础用法</div>
          </template>
          <template slot="title_2">
            <div v-show="treeNode.router==='sourceCode'" class="common_slot-title">配置说明</div>
          </template>
          <!-- 源码解析        end -->
        </component>
      </template>
    </small-layout>
  </div>
</template>
<script>
import smallLayout from "@/components/smallLayout/Index";
import comTree from "@/components/tree/Index";

export default {
  name: "VueRouter",
  components: {
    smallLayout,
    comTree,
    vueRouter: () => import("./markdown/vueRouter.md"),
    rules: () => import("./markdown/rules.md"),
    lifeCycle: () => import("./markdown/lifeCycle.md"),
    sourceCode: () => import("./markdown/sourceCode.md")
  },
  data() {
    return {
      treeData: [
        {
          label: "基础目录",
          id: "1",
          level: 1,
          children: [
            {
              label: "路由的生命周期",
              id: "1_1",
              level: 2,
              router: "lifeCycle"
            },
            {
              label: "路由的配置规则",
              id: "1_2",
              level: 2,
              router: "rules"
            },
            {
              label: "路由源码解析",
              id: "1_3",
              level: 2,
              router: "sourceCode"
            }
          ]
        }
      ],
      treeNode: {
        label: "路由的生命周期",
        id: "1_1",
        level: 2,
        router: "lifeCycle"
      }
    };
  },
  methods: {
    handleNodeClick(node) {
      this.treeNode = node;
    }
  }
};
</script>
<style lang="scss">
.vue_vue_router_vue_router-container {
  font-size: 14px;
}
</style>
