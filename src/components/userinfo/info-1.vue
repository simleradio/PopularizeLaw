<template>
  <div class="background">
    <el-form  class="register-box" style="z-index: 1"  >
      <h3 style="text-align:left">用户可改信息</h3>
      <el-form-item label="真实姓名" prop="userrealname">
        <el-input type="text"  v-model="formData.userrealname"></el-input>
      </el-form-item>

      <el-form-item prop="username">
        <label slot="label">用&ensp;户&ensp;名</label>
        <el-input type="text" v-model="formData.username"></el-input>
      </el-form-item>

      <el-form-item prop="userphone">
        <label slot="label">&ensp;电&ensp;&ensp;话&ensp;</label>
        <el-input type="text" v-model="formData.userphone"></el-input>
      </el-form-item>
      <!-- </el-form> -->
      <!-- <el-form ref="registerform" class="register-box" style="margin-top:30px" > -->
      <h3 style="text-align:left">只读信息</h3>
      <el-form-item prop="useridnumber">
        <label slot="label">身份证号</label>
        <el-input type="text"  v-model="formData.useridnumber" disabled ></el-input>
      </el-form-item>

      <el-form-item prop="usergender">
        <label slot="label">&ensp;性&ensp;&ensp;别&ensp;</label>
        <el-input  type="text" v-model="formData.usergender" disabled ></el-input>
      </el-form-item>

      <el-form-item  prop="integrals">
        <label slot="label">&ensp;积&ensp;&ensp;分&ensp;</label>
        <el-input type="text"  v-model="formData.integrals" disabled></el-input>
      </el-form-item>
      <el-button style="margin-left: 80%;" type="primary" class="el-btn"
        @click="changeUserDetail(userrealname, username,userphone)">修改</el-button>
    </el-form>
  </div>
</template>
  
<script>
import { changeUserDetail } from '../../request/userRequest'
import { findTotalIntegral } from '../../request/onlinetimeRequest'
export default {
  data() {
    return {
      formData: { userid:'',userrealname: '' ,username:'',userphone:'',useridnumber:'',usergender:'', integrals:'',},

      formData:[],
      useridnumber:'',
      usergender:'',
      integrals:'',
      userrealname:'',
      username:'',
      userphone:'',
      userid:localStorage.userid,

    }
  },
  methods: {
    cancel(){
        this.updateUserVisile = false;
      },
    changeUserDetail(){
      changeUserDetail(this.formData.userid,this.formData.userrealname,this.formData.username,this.formData.userphone).then(res=>{
        if(res.data == 1){
          this.$message({
            type:'success',
            message:"修改成功！",
          })
          this.$router.go(0);
        }else{
          this.$message({
            type:'danger',
            message:"修改失败！",
          })
          this.$router.go(0);
        }

      })
    },
    findTotalIntegral(){
      findTotalIntegral(this.userid).then(res=>{
          this.formData = res.data[0];
          if(res.data[0].usergender == 1){
            this.formData.usergender = '男'
          }else{
            this.formData.usergender = '女'
          }
          console.log(this.formData)
      })
    },

  },
  created() {
    this.findTotalIntegral()
  }
}

</script>

<style scoped>
.content {
  margin-top: 20px;
}

.register-box {
  width: 600px;
  margin: auto;
  border: 1px solid #dcdfe6;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 30px #dcdfe6;
  background: white;
}

.el-form-item {
  margin-bottom: 0px;
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



.front {
  z-index: 1;
}
</style>