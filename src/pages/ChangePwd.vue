<template>
    <div class="background">
      <div class="front">
        <el-form ref="loginForm" class="login-box">
          <h3 class="login-title">用户修改密码</h3>
          <el-form-item label="身份证号码" prop="useridnumber">
            <el-input type="text" placeholder="请输入身份证号码" v-model="useridnumber"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="userrealname">
            <el-input type="text" placeholder="请输入真实姓名" v-model="userrealname"></el-input>
          </el-form-item>
          <el-form-item label="重设密码" prop="userpwd">
            <el-input type="password" placeholder="请输入新的密码" v-model="userpwd"></el-input>
          </el-form-item>
          <el-button type="primary" class="el-btn" @click="change()">提交</el-button>
        </el-form>
      </div>
    </div>
  </template>
    
  <script>
  import { changePwd } from '../request/loginRequest'
  export default {
    name: "login",
    data() {
      return {
        useridnumber: '',
        userrealname: '',
        userpwd:'',
      }
    },
    methods: {
      change() {
        if (this.useridnumber == '') {
          this.$message({
            type: 'danger',
            message: '请输入身份证号码！'
          })
          this.$router.go(0);
        } else if (this.userrealname == '') {
          this.$message({
            type: 'danger',
            message: '请输入真实姓名！',
          })
          this.$router.go(0);
        } else {
          changePwd(this.useridnumber, this.userrealname,this.userpwd).then(res => {
            if (res.data == 1) {
              this.$message({
                type: 'success',
                message: '修改成功,马上去登录吧!',
              });
              this.$router.push("/Login");
            } else {
              this.$message({
                type: 'danger',
                message: '修改失败!请重新修改！'
              });
              this.$router.go(0);
            }
          })
  
        }
  
      },
  
    },
    created() {
  
  
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