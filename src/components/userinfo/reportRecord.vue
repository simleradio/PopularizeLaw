<template>
    <div style="width:800px;margin-top: 40px;">
        <el-table :data="tableData" style="width: 100%" :stripe="true" :highlight-current-row="true" align="center">
        <el-table-column label="举报ID">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="举报对象" >
          <template slot-scope="scope">
            <span  v-if="scope.row.reportcategory1 == 1">网站</span>
            <span  v-if="scope.row.reportcategory1 == 2">用户</span>
          </template>
        </el-table-column>
        <el-table-column label="举报类型" >
          <template slot-scope="scope">
            <span  v-if="scope.row.reportcategory2 == 1 && scope.row.reportcategory1 == 1">网络赌博</span>
            <span  v-if="scope.row.reportcategory2 == 1 && scope.row.reportcategory1 == 2">计算机破坏</span>
            <span  v-if="scope.row.reportcategory2 == 1 && scope.row.reportcategory1 == 3">侵犯知识权</span>
            <span  v-if="scope.row.reportcategory2 == 1 && scope.row.reportcategory1 == 4">传播散布谣言</span>
            <span  v-if="scope.row.reportcategory2 == 1 && scope.row.reportcategory1 == 5">淫秽色情</span>
            <span  v-if="scope.row.reportcategory2 == 1 && scope.row.reportcategory1 == 6">其他</span>
            <span  v-if="scope.row.reportcategory2 == 2 && scope.row.reportcategory1 == 1">网络水军</span>
            <span  v-if="scope.row.reportcategory2 == 2 && scope.row.reportcategory1 == 2">发表不当言论</span>
            <span  v-if="scope.row.reportcategory2 == 2 && scope.row.reportcategory1 == 3">利用负面消息敲诈勒索</span>
            <span  v-if="scope.row.reportcategory2 == 2 && scope.row.reportcategory1 == 4">非法有偿提供删帖服务</span>
            <span  v-if="scope.row.reportcategory2 == 2 && scope.row.reportcategory1 == 5">其他</span>
          </template>
        </el-table-column>
        <el-table-column label="举报网站名">
          <template slot-scope="scope">
            <span>{{ scope.row.reportname }}</span>
          </template>
        </el-table-column>
        <el-table-column label="举报网站/用户">
          <template slot-scope="scope">
            <span>{{ scope.row.reporturl }}</span>
          </template>
        </el-table-column>
        <el-table-column label="受理状态" >
            <template slot-scope="scope">
            <el-tag v-if="scope.row.reportstatus == 0" type="danger">暂未受理</el-tag>
            <el-tag  v-if="scope.row.reportstatus == 1" type="success" >已受理</el-tag>
            <el-popover trigger="hover" placement="top">
              <p>受理结果:<el-tag size="small"> {{ scope.row.reportresult }}</el-tag></p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="mini" v-if="scope.row.reportstatus==1" style="margin-top:5px;margin-left: -10px;"  >查看受理结果</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>

    </div>
</template>
<script>
import { findReportByUserid  } from "../../request/reportRequest";
export default {
  data() {
    return {
        tableData:[],
        userid:localStorage.getItem('userid'),
    };
  },
  methods: {
    findReportByUserid(){
        findReportByUserid(this.userid).then(res=>{
            this.tableData = res.data;
            console.log(this.tableData);
        })
    }
    
      
  },

  created() {
    this.findReportByUserid()
  }
};
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  margin: 10px 10px;
}

.pageInfo {
  display: flex;
  justify-content: center;
  margin: 15px 15px;
}

.condition {
  display: flex;
  justify-content: center;
}
</style>