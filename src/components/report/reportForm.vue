<template>
    <div class="background">
        <sg-navbar></sg-navbar>
        <div class="minheader">
            <h2  style="color:red;">《查法普法网站》不具备现场、紧急报警的受理功能，如您的情况紧急，请立即拨打报警电话“110”。</h2>
        </div>
      <el-form  class="register-box" style="z-index: 1"  >
        <h3 style="text-align:left">请如实填写如下举报信息</h3>
        <el-form-item  label="举报类型">
            <el-select v-model="reportcategory1" placeholder="请选择举报对象"
                v-on:change="getC1($event)">
                <el-option v-for="item in category1" :label="item.label" :value="item.id" :key="item.id">
                </el-option>
            </el-select>
            <el-select   v-if="reportcategory1 != ''" v-model="reportcategory2"
                placeholder="请选择举报类型" v-on:change="getC2($event)" style="margin-left:30px;">
                <el-option v-for="item in category2" :label="item.label" :value="item.id" :key="item.id">
                </el-option>
            </el-select>
        </el-form-item>
  
        <el-form-item label="违法网站名称">
          <el-input type="text" v-model="reportname" ></el-input>
        </el-form-item>
  
        <el-form-item label="违法网站地址/用户ID">
          <el-input type="text" v-model="reporturl" ></el-input>
        </el-form-item>
        <el-form-item label="举报详情">
          <el-input type="textarea"  maxlength="1000" show-word-limit  rows="10" v-model="reportdetail" placeholder="请在这里详细描述您所要举报的具体详情"></el-input>
        </el-form-item>
       
        <el-button style="margin-left: 80%;" type="primary" class="el-btn" 
        @click="addReport()">提交</el-button>
      </el-form>
    </div>
  </template>
    
  <script>
import { addReport } from '../../request/reportRequest' ;
import header from '../../components/header.vue'

  export default {
    data() {
        return {
            category1: [
            { label: "网站", value: "网站",id:'1' },
            { label: "用户", value: "用户",id:'2' },
        ],
            category2: [],
            reportcategory1: '',
            reportcategory2: '',
            reportname:'',
            reporturl:'',
            reportdetail:'',
            userid:localStorage.userid,
        }
    },
    methods: {
        getC1: function (c1) {
            let tempC2 = [];
            this.category2 = [];
            this.reportcategory2 = '';
            let allC2 = [
                {c1: "1",label: "网络赌博",id:'1'}, 
                {c1: "1",label: "计算机破坏",id:'2'}, 
                {c1: "1",label: "侵犯知识权",id:'3'}, 
                {c1: "1",label: "传播散步谣言",id:'4'}, 
                {c1: "1",label: "淫秽色情",id:'5'}, 
                {c1: "1",label: "其他",id:'6'}, 
                {c1: "2",label: "网络水军",id:'1'}, 
                {c1: "2",label: "发表不当言论",id:'2'}, 
                {c1: "2",label: "利用负面消息敲诈勒索",id:'3'}, 
                {c1: "2",label: "非法有偿提供删帖服务",id:'4'}, 
                {c1: "2",label: "其他",id:'5'}, 
            ];
            for (var val of allC2) {
                if (c1 == val.c1) {
                    tempC2.push({ label: val.label, value: val.label,id:val.id })   
                }
            }
            this.category2 = tempC2;
            console.log(this.reportcategory1) 

            
        },
        getC2: function (c2) {
            console.log(this.reportcategory2)
        },
        addReport(){
            addReport(this.userid,this.reportcategory1,this.reportcategory2,this.reportname,this.reporturl,this.reportdetail).then(res=>{
                console.log(this.reporturl)
                if(res.data == 1){
              this.$message({
                type: 'success',
                message: '举报成功!',
              });
              this.$router.push('/home');
            }else{
                this.$message({
                type: 'danger',
                message: '举报失败!'
              });
              this.$router.go(0);
            }
            })
        }
    },
    components: { //定义组件
            'sg-navbar':header,
        },

    created() {
        this.getC2()
        // console.log(sessionStorage.getItem('reportcategory2'))
      
    }
  }
  
  </script>
  
  <style scoped>

  .minheader{
    
    width:900px;
    height: 80px;
    /* border-radius: 30px; */
    margin:auto;
    background-color: rgb(234, 246, 234);
  }
  .content {
    margin-top: 20px;
  }
  
  .register-box {
    width: 860px;
    margin: auto;
    border: 1px solid #dcdfe6;
    padding: 20px;
    /* border-radius: 20px; */
    box-shadow: 0 0 30px #dcdfe6;
    background: white;
  }
  
  .el-form-item {
    margin-bottom: 0px;
  }
  
  .el-btn {
    margin: 20px;
    background-color: rgba(215, 0, 15, 1);
    border-color: rgba(215, 0, 15, 1);
  }
  
  .toregister {
    float: right;
    margin: 30px;
  
  }

  .front {
    z-index: 1;
  }

  
  </style>