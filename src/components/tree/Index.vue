<template>
  <div class="tree_index_container">
    <el-input placeholder="请输入" v-model="filterText"></el-input>
    <el-tree
      ref="tree"
      v-bind="$attrs"
      v-on="$listeners"
      :data="data"
      :highlight-current="highlightCurrent"
      :default-expand-all="defaultExpandAll"
      :props="props"
      :current-node-key="currentNodeKey"
      :filter-node-method="filterNode"
      :node-key="nodeKey"
    ></el-tree>
  </div>
</template>
<script>
export default {
  name: "MyTree",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => {
        return { children: "children", label: "label" };
      }
    },
    highlightCurrent: {
      type: Boolean,
      default: true
    },
    defaultExpandAll: {
      type: Boolean,
      default: true
    },
    currentNodeKey: {
      type: [String, Number],
      default: ""
    },
    nodeKey: {
      type: String,
      default: "id"
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      filterText: ""
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
    // handleNodeClick(data) {
    //   this.$emit("node-click", data);
    // }
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/variable";
.tree_index_container {
  .el-tree-node__expand-icon:not(.is-leaf) {
    color: $themeColor;
  }
  .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    background-color: #f5f5f5;
  }
}
</style>