<template>
  <div class="header_index-container">
    <div class="header-left">
      <span
        @click.prevent="control"
        :class="`el-icon-d-arrow-${isCollapse?'right':'left'} header-icon white-color`"
      ></span>
      <span class="header-text white-color">欢迎登陆！</span>
    </div>
    <div class="header-right white-color">
      <el-dropdown @command="outLogin">
        <i class="el-icon-user-solid white-color mr15"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的</el-dropdown-item>
          <!-- <el-dropdown-item>登陆</el-dropdown-item> -->
          <el-dropdown-item :command="'/login'">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>vvmily</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    control() {
      this.$store.commit("isCollapse", !this.$store.state.isCollapse);
    },
    outLogin(path) {
      this.$router.replace({
        path
      });
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/variable.scss";
.header_index-container {
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  .header-left {
    .header-icon {
      width: 20px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      color: $headerColor;
      border-right: 1px solid $headerBorder;
    }
    .header-text {
      color: $headerColor;
      letter-spacing: 1px;
    }
  }
  .white-color {
    color: $headerColor;
  }
  .mr15 {
    margin-right: 15px;
  }
}
</style>