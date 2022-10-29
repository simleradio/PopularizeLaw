<template>
  <div>
    <el-card>
      <template>
        <el-table style="width: 100%" :data="showCases" size="medium">
          <el-table-column label="序号"  type="index" width="100"></el-table-column>
          <!-- <el-table-column prop="caseid" label="案例编号" width="180">
          </el-table-column> -->
          <el-table-column prop="casetitle" label="案例主题" width="180">
          </el-table-column>
          <!-- <el-table-column prop="casecategory" label="案例类别" width="180">
            </el-table-column> -->
          <el-table-column prop="principalname" label="主犯名称" width="180">
          </el-table-column>
          <el-table-column label="主犯性别" width="180">
            <template slot-scope="scope">
              <span v-if="scope.row.principalgender == 0" style="color: #e6a23c"
                >女</span
              >
              <span v-if="scope.row.principalgender == 1" style="color: #67c23a"
                >男</span
              >
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
            <el-table-column label="操作" width="250">
            <template  slot-scope="scope">
              <a :href="'/CaseDetail?caseid='+scope.row.caseid">
                <el-button type="" size="mini" >查看详情</el-button>
              </a>
              <el-button type="" size="mini" @click="removeshoucang1">取消收藏</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>
  
  <script>
import {
  removeshoucang1,
  shoucang1,
  findIn1,
  findAllCaseid,
} from "../../request/collectionRequest";
import { findCaseByCaseid } from "../../request/casesRequest";
export default {
  name: "UserInfo-3",
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.getData();
    });
  },
  methods: {
    getData() {},
    findAllCaseid() {
      findAllCaseid(this.userid).then((res) => {
        this.casesList = res.data;
        console.log(this.casesList);
        // this.lawid=res.data[0].lawid;
        // console.log(this.lawid);
        for (var i = 0; i < res.data.length; i++) {
          if(res.data[i].caseid!=null){
            this.caseid = res.data[i].caseid;
          console.log(this.caseid);
          findCaseByCaseid(this.caseid).then((res) => {
            this.showCases.push(res.data[0]);
            console.log(this.showCases);
          });
          }
        }
      });
    },
    //取消收藏
    removeshoucang1() {
      removeshoucang1(this.userid, this.caseid).then((res) => {
        if (res.data == 1) {
          this.status = 0;
        }
      });
      location.reload();
    },
  },
  data() {
    return {
      caseid:'',
      caseList: [],
      caseCollection:[],
      userid: localStorage.userid,
      showCases:[]
      // tableData: [
      //   {
      //       caseid:'1',
      //       casetitle:'民事纠纷',
      //       // casecategory:'',
      //       principalname:'xxx',
      //       principalgender:1,
      //       verdict:'拘留10天',
      //       //verdictstatus:0,
      //   },
      //   {
      //       caseid:'2',
      //       casetitle:'偷盗案',
      //       // casecategory:'',
      //       principalname:'xxx',
      //       principalgender:0,
      //       verdict:'未判决',
      //       // verdictstatus:0,
      //   }
      // ],
    };
  },
  created() {
    this.findAllCaseid();
  },
};
</script>

  
  <style scoped>
.el-card {
  margin-left: 20px;
  max-width: 1300px;
  position: relative;
}
.el-button {
  color: rgba(215, 0, 15, 1);
  margin-right:25px;
}
.el-button:hover {
  background: yellow !important;
  color: rgba(215, 0, 15, 1) !important;
  font-weight: bold;
  border-color: yellow !important;
}
</style>