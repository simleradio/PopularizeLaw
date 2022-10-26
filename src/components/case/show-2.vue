<template>
    <div>
      <el-card>
        <span style="font-size: 30px; font-weight: bold;line-height: 60px;">普法教育</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='1'">&ensp;>&ensp;刑事犯罪</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='2'">&ensp;>&ensp;民法犯罪</span>
        <el-table style="width: 100%" size="medium" :data="casesList">
          <el-table-column width="900" label="标题">
            <template slot-scope="scope">
              <a :href="'/CaseDetail?'+'caseid='+scope.row.caseid" target="_blank">{{ scope.row.casetitle }}</a>
            </template>
          </el-table-column>
          <el-table-column width="200"   label=""> 
            <!-- <template slot-scope="scope">
              {{ scope.row.verdict }}
            </template> -->
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </template>
  
  <script>
  import { findCasesByCasecategory } from "../../request/casesRequest";
  export default {
    name: "show",
    methods: {
      findCasesByCasecategory() {
        console.log(this.$route.query.id)
        if(this.$route.query.id){
          this.casecategory = this.$route.query.id;
        }
        console.log(this.casecategory);
        findCasesByCasecategory(this.casecategory).then((res) => {
          this.casesList = res.data;
          console.log(this.casesList);
        });
      }
    },
      data() {
        return {
          // tableData: [
          //   {
          //       lawname:'中华人民共和国全国人民代表大会常务委员会议事规则(2022修正)',
          //       publictime:'行政法',
          //   },
          //   {
          //       lawname:'全国人民代表大会常务委员会关于修改《中华人民共和国全国人民代表大会常务委员会议事规则》的决定(2022)',
          //       publictime:'经济法',
          //   }
          // ],
          casetitle: "",
          casesList: [],
          casecategory: "",
        };
      },
      created() {
        this.findCasesByCasecategory();
      },
      watch:{
 "$route"(){
  if (this.$route.path !== 'case/show') {
			this.findCasesByCasecategory();
		}
},
      }
  };
  </script>
  
  
  <style>
  a {
  text-decoration: none;
  color: black;
}
 
.router-link-active {
  text-decoration: none;
  color: black;
}
  </style>