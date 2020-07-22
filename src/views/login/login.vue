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
              <el-input v-model="ruleForm.name" @keyup.enter.native="keyup"></el-input>
            </el-form-item>
            <el-form-item class="_mb0" label="密码" prop="pass">
              <el-input
                type="password"
                @keyup.enter.native="keyup"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item class="_mb0">
              <el-checkbox v-model="ruleForm.checked">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
      </template>
    </draggable-dialog>
  </div>
</template>
<script>
import draggableDialog from "@/components/draggableDialog/Index";
import { getToken, getUserInfo } from "@/api/login/index";
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
      // 默认创建两个用户账号
    };
  },
  created() {
    this.getCookie();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    keyup(e) {
      this.login();
    },
    login() {
      // 1、获取token
      //    1.1、通过本地获取token，
      let res = getToken(this.ruleForm.name, this.ruleForm.pass);
      let { code, message, result } = res;
      //    1.2、验证用户账号密码，请求token，通过则进入2，否则重新输入账号密码
      if (code === 200) {
        if (this.ruleForm.checked) {
          this.setCookie(this.ruleForm.name, this.ruleForm.pass, 7);
        } else {
          this.clearCookie();
        }
        localStorage.setItem("vvmily-user-token", result.token);
        // 2、通过token请求用户信息
        let user = getUserInfo(result.token, this.ruleForm);
        let { code: _code, message: _message, result: _result } = user;
        //    2.1 正常通过token请求用户信息
        //    2.2 token过期---进入1，重新验证账号获取token
        if (_code === 200) {
          // 3、获取用户信息
          //    3.1 正常获取用户信息，进入首页
          //    3.2 请求失败，返回说明，并重新发送请求
          localStorage.setItem("vvmily-user-info", JSON.stringify(_result));
          this.$router.push({
            path: "/index",
            query: {
              status: "1"
            }
          });
        } else {
          this.$message.warning(_message);
        }
      } else {
        this.$message.warning(message);
      }
    },
    //设置cookie
    setCookie(name, pass, time) {
      var date = new Date(); //获取时间
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * time); //保存的天数
      //字符串拼接cookie，密码应该加密的，哈哈哈
      window.document.cookie =
        "name" + "=" + name + ";path=/;expires=" + date.toGMTString(); // path那些路径下的文件有权限读取，expires过期时间
      window.document.cookie =
        "pass" + "=" + pass + ";path=/;expires=" + date.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("=");
          if (arr2[0] == "name") {
            this.ruleForm.name = arr2[1];
          } else if (arr2[0] == "pass") {
            this.ruleForm.pass = arr2[1];
          }
        }
        this.ruleForm.checked = true;
      } else {
        this.ruleForm.checked = false;
      }
    },
    //清除cookie
    clearCookie() {
      this.setCookie("", "", -1);
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
