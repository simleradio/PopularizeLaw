<!-- 注册 -->
<template>
  <div class="background">
    <el-form ref="registerform" class="register-box" style="z-index: 1">
      <h3 class="register-title">用户注册</h3>
      <el-form-item label="真实姓名" prop="name">
        <el-input type="text" placeholder="请输入真实姓名" v-model="userrealname"></el-input>
      </el-form-item>

      <el-form-item prop="username">
        <label slot="label">用&ensp;户&ensp;名</label>
        <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
      </el-form-item>

      <el-form-item prop="tel">
        <label slot="label">&ensp;电&ensp;&ensp;话&ensp;</label>
        <el-input type="text" placeholder="请输入电话号码" v-model="userphone"></el-input>
      </el-form-item>

      <el-form-item prop="useridnumber">
        <label slot="label">身份证号</label>
        <el-input type="text" placeholder="请输入身份证号码" v-model="useridnumber"></el-input>
      </el-form-item>

      <el-form-item prop="usergender">
        <label slot="label">&ensp;性&ensp;&ensp;别&ensp;</label>
        <el-select v-model="usergender" style="margin-top:10pmex;margin-left: -60px;" >
          <el-option v-for="item in usergenderlist" :key="item.id" :label="item.value" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="password">
        <label slot="label">&ensp;密&ensp;&ensp;码&ensp;</label>
        <el-input type="password" placeholder="请输入密码" v-model="userpwd"></el-input>
      </el-form-item>

      <el-form-item label="确定密码" prop="checkpass">
        <el-input type="password" placeholder="再次输入密码" v-model="checkpwd" ></el-input>
      </el-form-item>
      
      <el-button type="primary" class="el-btn" @click="submit(userrealname,username,userphone,useridnumber,usergender,userpwd)">注册</el-button>
      <el-button @click="reset()">重置</el-button>
      <el-form-item>
        <el-button type="info" class="tologin" size="mini" @click="toLogin">已有账号，去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script>
import {submit} from '../request/registerRequest'
export default {
  name: 'Register',
  data() {
    return {
      username:'',
      userphone:'',
      userrealname:'',
      useridnumber:'',
      userpwd:'',
      usergender:'',
      checkpwd:'',
      usergenderlist:[{
          value:'男',
          id:'1'
        },
        {
          value:'女',
          id:'2'
        }],

      
    }
  },
  methods: {
    toLogin: function () {
      this.$router.replace("/Login");
    },
    reset(){
      this.$router.go(0);
    },
    submit(){
      if((this.userpwd == this.checkpwd) && (this.userrealname&&this.username&&this.useridnumber&&this.userphone&&this.usergender&&this.userpwd&&this.checkpwd) != ''){
        submit(this.userrealname,this.username,this.userphone,this.useridnumber,this.usergender,this.userpwd).then(res=>{
          if(res.data == 1){
              this.$message({
                type: 'success',
                message: '注册成功，马上登录看看吧!',
              });
              this.$router.replace("/Login");
            }else{
                this.$message({
                type: 'danger',
                message: '注册失败,请重新注册！'
              });
              this.$router.go(0);
            }
        })
      }else if(this.userpwd != this.checkpwd){
        this.$message({
          type:'danger',
          message:'两次密码不一致，请重新输入！'
        });
        this.userpwd = '';
        this.checkpwd = '';
      }
      else{
        this.$message({
            type:'danger',
            message:'请输入完整的信息!'
          });
      }
        
      }

  }
}
</script>

<style scoped>
.register-box {
  width: 400px;
  margin: auto;
  border: 1px solid #dcdfe6;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 30px #dcdfe6;
  background: white;
  margin-top: 60px;
}

.el-form-item {
  margin-bottom: 0px;
}

.register-title {
  text-align: center;
  /* margin-bottom: 10px; */
}

.el-btn {
  margin: 20px;
  background-color: red;
  border-color: red;
}

.toregister {
  float: right;
  margin: 30px;

}

.background {
  background: no-repeat;
  background-size: 100% 100%;
  background-image: url("../../static/img/background2.jpg");
  position: absolute;
  width: 100%;
  height: 120vh;
  z-index: -1;
  margin-top: -90px;
}

.front {
  z-index: 1;
}
</style>