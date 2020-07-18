<template>
  <div class="login_login-container">
    <draggable-dialog class="layout-login" :center="true" :width="400">
      <template slot="header">
        <div class="login-title">
          <span>登 录</span>
        </div>
      </template>
      <template slot="body">
        <div class="login-form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            class="demo-ruleForm _pr20 _pt10"
          >
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item class="_mb0" label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="_mb0">
              <el-checkbox v-model="ruleForm.checked">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </draggable-dialog>
  </div>
</template>
<script>
import draggableDialog from "@/components/draggableDialog/Index";
export default {
  name: "Login",
  components: { draggableDialog },
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      ruleForm: { name: "", pass: "", checked: true }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$router.push({
        path: "/index",
        query: {
          status: "1"
        }
      });
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/variable.scss";
.login_login-container {
  height: 100%;
  background: $themeColor;
  .layout-login {
    box-shadow: 0 0 10px $themeColor;
    background: #fff;

    .login-title {
      height: 40px;
      line-height: 40px;
      background: #39c5ca;
      padding: 0 10px;
      color: #fff;
      font-size: 16px;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      min-height: 200px;
      box-sizing: border-box;
      padding: 10px;
    }
  }
}
</style>
