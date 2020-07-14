<template>
  <el-container class="layout_layout-container">
    <el-aside class="_el-aside" width="200px">
      <menu-left></menu-left>
    </el-aside>
    <el-container>
      <el-header class="_el-header">
        <com-header></com-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MenuLeft from "./components/MenuLeft";
import ComHeader from "../header/Index";
export default {
  name: "Layout",
  components: { MenuLeft, ComHeader }
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
  ._el-header {
    padding: 0;
    background: $headerBackground;
  }
}
</style>
