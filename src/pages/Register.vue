<template>
  <div class="background">
    <div>
      <el-form ref="registerform" class="register-box" style="z-index: 1">
        <h3 class="register-title">用户注册</h3>
        <el-form-item label="真实姓名" prop="name">
          <el-input type="text" placeholder="请输入真实姓名"></el-input>
        </el-form-item>

        <el-form-item prop="username">
          <label slot="label">&ensp;用&ensp;户&ensp;名</label>
          <el-input type="text" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item prop="tel">
          <label slot="label">&ensp;电&ensp;&ensp;话&ensp;</label>
          <el-input type="text" placeholder="请输入电话号码"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <label slot="label">&ensp;密&ensp;&ensp;码&ensp;</label>
          <el-input type="password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item label="确定密码" prop="checkpass">
          <el-input type="password" placeholder="再次输入密码"></el-input>
        </el-form-item>

        <el-button type="primary"  class="el-btn">注册</el-button>
        <el-button>重置</el-button>
        <el-form-item>
          <el-button type="info" class="tologin" size="mini">已有账号，去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<style scoped>
.register-box {
  width: 400px;
  margin: 100px auto;
  border: 1px solid #dcdfe6;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 30px #dcdfe6;
  background: white;
}
.register-title {
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