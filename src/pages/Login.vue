<template>
  <div class="background">
    <div class="front">
      <el-form ref="loginForm" class="login-box">
        <h3 class="login-title">用户登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="userpwd"></el-input>
        </el-form-item>
        <el-button type="primary" class="el-btn" @click="userLogin(username, userpwd)">登录</el-button>
        <el-form-item>
          <el-link type="warning" class="forgotpassword" size="mini" @click="changePwd()">忘记密码</el-link>
          <el-button type="info" class="toregister" size="mini" @click="toRegister">没有账号，去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script>
import { userLogin } from '../request/loginRequest'
import { findUser } from  '../request/userRequest'
import moment from "moment";
export default {
  name: "login",
  data() {
    return {
      username: '',
      userpwd: '',
      userid: '',
      logintime:'',
    }
  },
  methods: {
    toRegister: function () {
      this.$router.replace("/Register");
    },
    changePwd: function () {
      this.$router.replace("/ChangePwd");
    },

    userLogin() {
      if (this.username == '') {
        this.$message({
          type: 'danger',
          message: '请输入用户名',
        })
        this.$router.go(0);
      } else if (this.userpwd == '') {
        this.$message({
          type: 'danger',
          message: '请输入密码',
        })
        this.$router.go(0);
      } else {
        userLogin(this.username, this.userpwd).then(res => {
          if (res.data == 1) {
            findUser(this.username,this.userpwd).then(res=>{
              this.userid = res.data[0].userid;
              console.log(res.data[0].userid)
              localStorage.setItem('userid',this.userid);
              // localStorage.getItem('userid');
              // console.log(this.userid);
            })
            this.$message({
              type: 'success',
              message: '登录成功!',
            });
            this.$router.push("/home");
            this.logintime = new Date();
            var intime = moment(this.logintime).format('YYYY-MM-DD HH:mm:ss')
            localStorage.setItem('logintime',intime);
          } else if(res.data == -1){
            this.$message({
              type: 'danger',
              message: '账号处于封禁！'
            });
            this.$router.go(0);
          }else {
            this.$message({
              type: 'danger',
              message: '登录失败!请重新登录！'
            });
            this.$router.go(0);
          }
        })
      }
    },
  },
  created() {
    // this.findUser();

  }
}
</script>

<style scoped>
.login-box {
  width: 400px;
  margin: 54px auto;
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
  background: no-repeat;
  background-size: cover;
  background-image: url("../../static/img/background2.jpg");
  position: absolute;
  width: 100%;
  height: 104vh;
  z-index: -1;
  margin-top: -90px;
}

.front {
  z-index: 1;
}
</style>