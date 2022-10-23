<template>
  <div>
    <el-card>
      <span style="font-size: 30px; font-weight: bold">普法教育</span>
      <span style="font-size: 20px; font-weight: bold">&ensp;>&ensp;全部</span>
      <el-table style="width: 100%" size="medium" :data="lawsList">
        <el-table-column width="900">
          <template slot-scope="scope">
            {{ scope.row.lawname }}
          </template>
        </el-table-column>
        <el-table-column width="200"> </el-table-column>
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
</style>