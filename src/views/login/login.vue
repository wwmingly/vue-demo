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
      ruleForm: { name: "", pass: "", checked: true },
      // 默认创建两个用户账号
      userList: [
        {
          name: "admin",
          pass: "vvmily",
          typeCode: "ADMIN",
          typeName: "管理员",
          userId: "001"
        },
        {
          name: "reader",
          pass: "vvmily",
          typeCode: "READER",
          typeName: "普通读者",
          userId: "002"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let isBool = 0;
          this.userList.forEach(item => {
            if (
              this.ruleForm.name === item.name &&
              this.ruleForm.pass === item.pass
            ) {
              isBool -= 1;
              this.login();
            } else {
              isBool += 1;
            }
          });
          this.$message({
            type: isBool === 2 ? "error" : "success",
            message:
              isBool === 2 ? "用户名或者密码错误，请重新输入" : "欢迎登录！"
          });
        } else {
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
