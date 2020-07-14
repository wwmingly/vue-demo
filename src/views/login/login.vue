<template>
  <div class="login_login-container">
     <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  methods: {
    login () {
      this.$router.push({
        path: '/index',
        query: {
          status: '1'
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login_login-container{
  font-size: 14px;
}
</style>
