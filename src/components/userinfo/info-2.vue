<template>
  <div>
    <el-card>
      <template>
        <el-table style="width: 100%" :data="showLaws" size="medium">
          
          <el-table-column label="序号"  type="index" width="100"></el-table-column>
          <el-table-column prop="lawcategory" label="法律类别" width="180">
            <template slot-scope="scope">
              <span v-if="scope.row.lawcategory == 1"
                >宪法相关法</span
              >
              <span v-if="scope.row.lawcategory == 2"
                >民法商法</span
              >
              <span v-if="scope.row.lawcategory == 3"
                >行政法</span
              >
              <span v-if="scope.row.lawcategory == 4"
                >经济法</span
              >
              <span v-if="scope.row.lawcategory == 5"
                >社会法</span
              >
              <span v-if="scope.row.lawcategory == 6"
                >刑法</span
              >
              <span v-if="scope.row.lawcategory == 7"
                >诉讼与非诉讼法</span
              >
            </template>
          </el-table-column>
          <el-table-column prop="lawname" label="法律名称" width="550">
          </el-table-column>
          <el-table-column prop="publictime" label="颁布时间" width="180">
          </el-table-column>
          <el-table-column prop="excutetime" label="执行时间" width="180">
          </el-table-column>
          <!-- <el-table-column prop="publicyear" label="执行年份" width="180">
            </el-table-column> -->
          <el-table-column label="时效性" width="180">
            <template slot-scope="scope">
              <span v-if="scope.row.timeliness == 3" style="color: #e6a23c"
                >失效</span
              >
              <span v-if="scope.row.timeliness == 2" style="color: #67c23a"
                >尚未生效</span
              >
              <span v-if="scope.row.timeliness == 1" style="color: #909399"
                >现行有效</span
              >
            </template>
          </el-table-column>
          <el-table-column label="操作" width="250">
            <template  slot-scope="scope">
              <a :href="'/LawDetail?lawid='+scope.row.lawid">
                <el-button type="" size="mini" >查看详情</el-button>
              </a>
              <el-button type="" size="mini" @click="removeshoucang">取消收藏</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>
  
  <script>
import {
  removeshoucang,
  shoucang,
  findIn,
  findAllLawid,
} from "../../request/collectionRequest";
import { findLawsByLawid } from "../../request/lawRequest";
export default {
  name: "UserInfo-2",
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.getData();
    });
  },
  methods: {
    getData() {},
    findAllLawid() {
      findAllLawid(this.userid).then((res) => {
        this.lawsList = res.data;
        console.log(this.lawsList);
        // this.lawid=res.data[0].lawid;
        // console.log(this.lawid);
        for(var i=0;i<res.data.length;i++){
        if(res.data[i].lawid!=null){
          this.lawid=res.data[i].lawid;
          console.log(this.lawid);
          findLawsByLawid(this.lawid).then((res) => {
              this.showLaws.push(res.data[0]);
              console.log(this.showLaws);
        });
        }
      }
      });
    },
    //取消收藏
    removeshoucang() {
      removeshoucang(this.userid,this.lawid).then(res=>{
          if (res.data == 1) {
          this.status=0;
        }
      })
      location.reload();
    }
  },
  data() {
    return {
      lawid:'',
      lawList: [],
      lawCollection:[],
      userid: localStorage.userid,
      showLaws:[]
      // tableData: [
      //   {
      //       lawid:'1',
      //       lawcategory:'行政法',
      //       lawname:'xxxx',
      //       publictime:'2020-06-25',
      //       excutetime:'2020-09-25',
      //       publicyear:2020,
      //       timeliness:3,
      //   },
      //   {
      //       lawid:'2',
      //       lawcategory:'经济法',
      //       lawname:'xxxx',
      //       publictime:'2022-05-25',
      //       excutetime:'2022-09-25',
      //       publicyear:2022,
      //       timeliness:1,
      //   }
      // ],
    };
  },
  created() {
    this.findAllLawid();
  },
};
</script>

  
  <style scoped>
.el-card {
  margin-left: 20px;
  width: 100%;
  max-width: 1100px;
  position: relative;
  overflow: auto;
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