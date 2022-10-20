<template>
    <div>
      <el-card>
        <template>
          <el-table style="width: 100%" :data="tableData" size="medium">
            <el-table-column prop="caseid" label="案例编号" width="180">
            </el-table-column>
            <el-table-column prop="casetitle" label="案例主题" width="180">
            </el-table-column>
            <!-- <el-table-column prop="casecategory" label="案例类别" width="180">
            </el-table-column> -->
            <el-table-column prop="principalname" label="主犯名称" width="180">
            </el-table-column>
            <el-table-column label="主犯性别" width="180">
              <template slot-scope="scope">
                <span v-if="scope.row.principalgender==0" style="color: #e6a23c">女</span>
                <span v-if="scope.row.principalgender==1" style="color: #67c23a">男</span>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="principalgender" label="主犯性别" width="180">
            </el-table-column> -->
            <el-table-column prop="verdict" label="具体判决" width="180">
            </el-table-column>
            <!-- <el-table-column label="判决情况" width="180">
              <template slot-scope="scope">
                <span v-if="scope.row.verdictstatus==0" style="color: #e6a23c">失效</span>
                <span v-if="scope.row.verdictstatus==1" style="color: #67c23a">尚未生效</span>
              </template>
            </el-table-column> -->
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
        name:"UserInfo-3",
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
                caseid:'1',
                casetitle:'民事纠纷',
                // casecategory:'',
                principalname:'xxx',
                principalgender:1,
                verdict:'拘留10天',
                //verdictstatus:0,
            },
            {
                caseid:'2',
                casetitle:'偷盗案',
                // casecategory:'',
                principalname:'xxx',
                principalgender:0,
                verdict:'未判决',
                // verdictstatus:0,
            }
          ],
        }
      }
    }
</script>

  
  <style scoped>
  .el-card{
    margin-left: 20px;
    max-width: 1300px;
    position: relative;
  }
  .el-button{
    color: rgba(215, 0, 15, 1);
  }
  .el-button:hover {
    background: yellow !important;
    color: rgba(215, 0, 15, 1) !important;
    font-weight: bold;
    border-color: yellow !important;
  }
  </style>