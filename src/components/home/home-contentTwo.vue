<template>
    <!-- 最新案件 -->
    <div>
        <h2 class="title">最新案件</h2>
        <el-table :data="casesList" style="width:60%;margin-left: 450px;" :stripe="true" :highlight-current-row="true" >
            <el-table-column label="案件概述" >
                <template slot-scope="scope">
                  <!-- <span v-if="scope.row.caseid==7" style="margin-left:10px;color: red;"><a>{{ scope.row.casesummary }} </a></span> -->
                  <span style="margin-left:10px;">{{ scope.row.casesummary }}</span>
                </template>
        </el-table-column>
       </el-table>
        
    </div>
</template>

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
</script>

<style scoped>
.more{
    margin-left: 100px;
}
</style>