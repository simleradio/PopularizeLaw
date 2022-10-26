<template>
  <div>
    <el-card>
      <span style="font-size: 30px; font-weight: bold;line-height: 60px;">普法教育</span>
      <span style="font-size: 20px; font-weight: bold;line-height: 60px;">&ensp;>&ensp;全部</span>
      <el-table style="width: 100%" size="medium" :data="lawsList">
        <el-table-column width="900" label="标题">
          <template slot-scope="scope">
            <a :href="'/LawDetail?'+'lawid='+scope.row.lawid" target="_blank">{{ scope.row.lawname }}</a>
          </template>
        </el-table-column>
        <el-table-column width="200" label="公布时间"> 
             <template slot-scope="scope">
              {{ scope.row.publictime }}
            </template>
            </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { findAllLaws } from "../../request/lawRequest";
export default {
  name: "show",
  methods: {
    findAllLaws() {
      findAllLaws().then((res) => {
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
      };
    },
    created() {
      this.findAllLaws();
    },
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