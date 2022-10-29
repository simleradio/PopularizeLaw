<template>
  <div>
    <el-card>
      <span style="font-size: 30px; font-weight: bold;line-height: 60px;">相关案例</span>
      <span style="font-size: 20px; font-weight: bold;line-height: 60px;">&ensp;>&ensp;全部</span>
      <el-table style="width: 100%" size="medium" :data="casesList">
        <el-table-column width="900" label="标题">
          <template slot-scope="scope">
            <a :href="'/CaseDetail?'+'caseid='+scope.row.caseid" target="_blank">{{ scope.row.casetitle }}</a>
          </template>
        </el-table-column>
        <el-table-column width="200"  label="">
          <!-- <template slot-scope="scope">
              {{ scope.row.verdict }}
            </template> -->
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { findAllCases } from "../../request/casesRequest";
export default {
  name: "show",
  methods: {
    findAllCases() {
      findAllCases().then((res) => {
        this.casesList = res.data;
        console.log(this.casesList);
      });
    }
  },
    data() {
      return {
        casetitle: "",
        casesList: [],
      };
    },
    created() {
      this.findAllCases();
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