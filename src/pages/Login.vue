<template>
    <div class="background">
        <div class="front">
      <el-form ref="loginForm"  class="login-box" >
        <h3 class="login-title">用户登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input type="text" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" >登录</el-button>
        <el-form-item>
          <el-link type="warning" class="forgotpassword" size="mini">忘记密码</el-link>
          <el-button type="info" class="toregister" size="mini">没有账号，去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
</template>
  
<style scoped>
.login-box {
  width: 350px;
  margin: 120px auto;
  border: 1px solid #dcdfe6;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 30px #dcdfe6;
}
.login-title {
  text-align: center;
}
.toregister {
  float: right;
  margin: 30px;
}
.forgotpassword {
  float: left;
  margin: 30px;
}
.background {
  width: 100%;
  height: 100vh;
  background: center center no-repeat;
  background-size: 100% 100%;
  background-image: url('../../static/img/2.jpg');
}
.front {
  z-index: 1;
}
</style>