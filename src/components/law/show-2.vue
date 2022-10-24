<template>
    <div>
      <el-card>
        <span style="font-size: 30px; font-weight: bold;line-height: 60px;">普法教育</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='1'">&ensp;>&ensp;宪法相关法</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='2'">&ensp;>&ensp;民法商法</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='3'">&ensp;>&ensp;行政法</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='4'">&ensp;>&ensp;经济法</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='5'">&ensp;>&ensp;社会法</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='6'">&ensp;>&ensp;刑法</span>
        <span style="font-size: 20px; font-weight: bold;line-height: 60px;" v-if="this.$route.query.id==='7'">&ensp;>&ensp;诉讼与非诉讼法</span>
        <el-table style="width: 100%" size="medium" :data="lawsList">
          <el-table-column width="900" label="标题">
            <template slot-scope="scope">
              {{ scope.row.lawname }}
            </template>
          </el-table-column>
          <el-table-column width="200" label="颁布时间"> 
             <template slot-scope="scope">
              {{ scope.row.publictime }}
            </template>
            </el-table-column>
        </el-table>
      </el-card>
    </div>
  </template>
  
  <script>
  import { findLawsByCondition } from "../../request/lawRequest";
  export default {
    name: "show",
    methods: {
      findLawsByCondition() {
        // if(localStorage.getItem("index")!=''){
        //   this.lawcategory = localStorage.getItem("index");
        // }
        console.log(this.$route.query.id)
        if(this.$route.query.id){
          this.lawcategory = this.$route.query.id;
        }
        console.log(this.lawcategory);
        findLawsByCondition(this.lawcategory, this.timeliness).then((res) => {
          this.lawsList = res.data;
          console.log(this.lawsList);
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
          lawname: "",
          lawsList: [],
          lawcategory: "",
          timeliness: "",
        };
      },
      created() {
        this.findLawsByCondition();
      },
      watch:{
 "$route"(){
  if (this.$route.path !== 'law/show') {
			this.findLawsByCondition();
		}
},
      }
  };
  </script>
  
  
  <style>
  </style>