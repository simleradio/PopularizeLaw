<template>
    <div>
      <el-card>
        <template>
          <el-table style="width: 100%" :data="tableData" size="medium">
            <el-table-column prop="lawid" label="法律编号" width="180">
            </el-table-column>
            <el-table-column prop="lawcategory" label="法律类别" width="180">
            </el-table-column>

            <el-table-column prop="lawcategory" label="法律类别" width="180">
            </el-table-column>

            <el-table-column prop="lawname" label="法律名称" width="180">
            </el-table-column>
            <el-table-column prop="publictime" label="颁布时间" width="180">
            </el-table-column>
            <el-table-column prop="excutetime" label="执行时间" width="180">
            </el-table-column>
            <!-- <el-table-column prop="publicyear" label="执行年份" width="180">
            </el-table-column> -->
            <el-table-column label="时效性" width="180">
              <template slot-scope="scope">
                <span v-if="scope.row.timeliness==3" style="color: #e6a23c">失效</span>
                <span v-if="scope.row.timeliness==2" style="color: #67c23a">尚未生效</span>
                <span v-if="scope.row.timeliness==1" style="color: #909399">现行有效</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template>
                <el-button type="" size="mini">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-card>
    </div>
  </template>
  
  <script>
    export default {
        name:"UserInfo-2",
        beforeRouteEnter:(to,from,next)=>{
            next(vm=>{
                vm.getData();
            })
        },
        methods:{
             getData(){
            }
        },
        data() {
        return {
          tableData: [
            {
                lawid:'1',
                lawcategory:'行政法',
                lawname:'xxxx',
                publictime:'2020-06-25',
                excutetime:'2020-09-25',
                publicyear:2020,
                timeliness:3,
            },
            {
                lawid:'2',
                lawcategory:'经济法',
                lawname:'xxxx',
                publictime:'2022-05-25',
                excutetime:'2022-09-25',
                publicyear:2022,
                timeliness:1,
            }
          ],
        }
      }
    }
</script>

  
  <style scoped>
  .el-card{
    margin-left: 20px;
    width: 100%;
    max-width: 1300px;
  }
  
  .el-button{
    color: rgba(215, 0, 15, 1);
  }
  .el-button:hover {
    background: yellow !important;
    color: white !important;
    font-weight: bold;
    border-color: yellow !important;
  }
  </style>