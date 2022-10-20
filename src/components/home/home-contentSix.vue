<template>
    <div class="box">
    <div class="minbox" style="position:relative;">
        <h3 class="title">法律小故事</h3>
        <a href="https://qspfw.moe.gov.cn/html/story/"><img src="../../../static/img/zuihou3.jpg" title="国培计划" style="width:90%;height: 150px;" ></a>
            <el-table :data="casesList" style="width:100%;" :stripe="true" :highlight-current-row="true" >
                <el-table-column label="案件概述" >
                    <template slot-scope="scope">
                    <li style="margin-left:10px;">{{ scope.row.casesummary }}</li>
                </template>
                </el-table-column>
            </el-table>
    </div>
    <div class="minbox" style="position:relative;">
        <h3 class="title">学生作品</h3>
        <a href="https://qspfw.moe.gov.cn/html/stuworks/"><img src="../../../static/img/zuihou1.jpg" title="国培计划" style="width:90%;height: 150px;"></a>
            <el-table :data="casesList" style="width:100%;" :stripe="true" :highlight-current-row="true" >
                <el-table-column label="案件概述" >
                    <template slot-scope="scope">
                    <li style="margin-left:10px;">{{ scope.row.casesummary }}</li>
                </template>
                </el-table-column>
            </el-table>  
    </div>
    <div class="minbox" style="position:relative;">
        <h3 class="title">法律英语</h3>
        <a href="https://qspfw.moe.gov.cn/html/survival/"><img src="../../../static/img/zuihou2.jpg" title="国培计划" style="width:90%;height: 150px;"></a>
            <el-table :data="casesList" style="width:100%;" :stripe="true" :highlight-current-row="true" >
                <el-table-column label="案件概述" >
                    <template slot-scope="scope">
                    <li style="margin-left:10px;">{{ scope.row.casesummary }}</li>
                </template>
                </el-table-column>
            </el-table>
    </div>
</div>
</template>

<style scoped>
.box{
display: flex;
}
.minbox{
width:600px;
height: 380px;
border:1px solid rgb(233, 220, 220);
border-radius: 9px;
margin-right: 10px;
margin-left: 30px;
/* background-color: rgb(248, 248, 248); */
}
.title{
margin-left: -240px;
}
</style>
<script>
import {findCasesInHome} from '../../request/casesRequest'
export default {
name: "home-contentTwo",
data() {
  return {
    casesummary:'',
    casesList:[],
  };
},
methods: {
    findCasesInHome(){
    findCasesInHome().then(res => {
      this.casesList = res.data;
      console.log(this.casesList[0].casetitle)
    })
    // console.log(this.caseslist)
  },
},
created(){
    this.findCasesInHome()
},
};
</script>