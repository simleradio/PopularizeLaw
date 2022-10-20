<template>
        <div class="box">
        <div class="minbox" style="position:relative;">
            <h2 class="title">热点资讯</h2>
                <el-table :data="casesList" style="width:100%;" :stripe="true" :highlight-current-row="true" >
                    <el-table-column label="案件概述" >
                        <template slot-scope="scope">
                        <li style="margin-left:10px;">{{ scope.row.casesummary }}</li>
                    </template>
                    </el-table-column>
                </el-table>
        </div>
        <div class="minbox" style="position:relative;">
            <h2 class="title">地方动态</h2>
                <el-table :data="casesList" style="width:100%;" :stripe="true" :highlight-current-row="true" >
                    <el-table-column label="案件概述" >
                        <template slot-scope="scope">
                        <li style="margin-left:10px;">{{ scope.row.casesummary }}</li>
                    </template>
                    </el-table-column>
                </el-table>  
        </div>
        <div class="minbox" style="position:relative;">
            <h2 class="title">法律法规</h2>
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