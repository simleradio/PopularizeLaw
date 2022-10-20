<template>
  <div class="background">
    <div class="front">
      <el-form ref="loginForm" class="login-box">
        <h3 class="login-title">用户登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input type="text" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" class="el-btn">登录</el-button>
        <el-form-item>
          <el-link type="warning" class="forgotpassword" size="mini">忘记密码</el-link>
          <el-button type="info" class="toregister" size="mini" @click="toRegister">没有账号，去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script>
   export default {
        name: 'Login',
        data() { 
          return{
            
          }
        },
        methods:{
          toRegister:function(){
            this.$router.replace("/Register");
          }
        }
    }
</script>

<style scoped>
.login-box {
  width: 400px;
  margin: 200px auto;
  border: 1px solid #dcdfe6;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 30px #dcdfe6;
  background: white;
}
.login-title {
  text-align: center;
}
.el-btn {
  margin: 20px;
  background-color: red;
  border-color: red;
}
.toregister {
  float: right;
  margin: 30px;
  margin-bottom: -10px;
}
.forgotpassword {
  float: left;
  margin: 30px;
  margin-bottom: -10px;
}
.background {
  width: 100%;
  height: 100vh;
  background: center center no-repeat;
  background-size: 100% 100%;
  background-image: url("../../static/img/2.jpg");
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.front {
  z-index: 1;
}
</style>