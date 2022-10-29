<!-- 详情页 -->
<template>
    <div>
      <sg-navbar></sg-navbar>
  
      <div class="main">
        <div class="center">
          <!-- 面包屑 -->
          <div class="mainer_title no_botbor close_nav">
            <div style="color: black" class="borderB5">
              首页 >
              <span
                ><a href="/case" title="相关案例">相关案例</a>&nbsp;&gt;&nbsp;<a
                  href="../"
                  title="搜索页面"
                  >搜索页面</a
                ></span
              >
            </div>
          </div>
          <div class="nwdetail clearFix">
            <div class="nwdetlHed phone_size">
              <el-card>
                <span
                  style="font-size: 30px; font-weight: bold; line-height: 60px"
                  >搜索结果</span
                >
                <el-table style="width: 100%" size="medium" :data="casesList">
                  <el-table-column width="420" label="案例标题">
                    <template slot-scope="scope">
                      <a
                        :href="'/CaseDetail?' + 'caseid=' + scope.row.caseid"
                        target="_blank"
                        >{{ scope.row.casetitle }}</a
                      >
                    </template>
                  </el-table-column>
                  <el-table-column width="200" label="案例类别">
                    <template slot-scope="scope">
                      <span v-if="scope.row.casecategory == 1">刑事犯罪</span>
                      <span v-if="scope.row.casecategory == 2">民法犯罪</span>
                    </template>
                  </el-table-column>
  
                  <el-table-column width="150" label="主犯名称">
                    <template slot-scope="scope">
                      {{ scope.row.principalname }}
                    </template>
                  </el-table-column>

                  <el-table-column width="150" label="主犯性别">
                    <template slot-scope="scope">
                      {{ scope.row.principalgender }}
                    </template>
                  </el-table-column>

                  <el-table-column width="200" label="判决情况">
                    <template slot-scope="scope">
                      {{ scope.row.verdict }}
                    </template>
                  </el-table-column>
                  
                </el-table>
              </el-card>
            </div>
            <div class="nwdetIntro">
              <div
                style="float: right; width: 210px; height: 40px"
                class="close_operation"
              >
                <div class="clear"></div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
            <div></div>
          </div>
  
          <div></div>
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  import header from "../components/header.vue";
  import { findCasesByAll } from "../request/casesRequest";
  export default {
    name: "CaseSearch",
    data() {
      //选项 / 数据
      return {
        keywords: this.$route.query.keywords,
        casesList: [],
      };
    },
    methods: {
      //事件处理器
      findCasesByAll() {
        findCasesByAll(this.keywords).then((res) => {
          this.casesList = res.data;
          console.log(this.casesList);
        });
      },
    },
    components: {
      //定义组件
      "sg-navbar": header,
    },
    created() {
      //生命周期函数
      this.findCasesByAll();
    },
  };
  </script>
    
    <style>
  .mainer_title {
    width: 100%;
    height: 35px;
    line-height: 35px;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid #f1f1f1;
    color: #999999;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .mainer_title div {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 36px;
    padding-left: 26px;
  }
  .mainer_title div.borderB5 {
    border-bottom: 2px solid #cd1c16;
    box-sizing: border-box;
  }
  .mainer_title.no_botbor .borderB5 {
    border-bottom: none;
  }
  .mainer_title a {
    color: black;
  }
  .mainer_title span {
    color: #cd1c16;
  }
  .clearfix {
    *zoom: 1;
  }
  .nwdetail {
    padding: 0 100px;
  }
  .nwdetIntro {
    margin-bottom: 20px;
    height: 40px;
    line-height: 40px;
    color: #4d4d4d;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #ededed;
  }
  .nwdetlHed {
    line-height: 35px;
    font-size: 24px;
    text-align: center;
  }
  .nwdetIntro {
    margin-bottom: 20px;
    height: 40px;
    line-height: 40px;
    color: #4d4d4d;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #ededed;
  }
  .nwdetail p {
    color: #333;
    font-size: 14px;
    line-height: 32px;
    /*text-align: justify;*/
  }
  .marig33 {
    margin-right: 33px;
  }
  .marig_210 {
    margin-right: -210px;
  }
  .nwdetail p {
    color: #333;
    font-size: 14px;
    line-height: 32px;
    /*text-align: justify;*/
  }
  .nwedit {
    float: right;
    line-height: 69px;
    margin: 6px 0 0px 0;
  }
  .bottomNav_item:hover {
    box-shadow: 0 4px 8px #dedede;
    transform: scale(1.03);
    background-color: #f5f5f5;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
   
  .router-link-active {
    text-decoration: none;
    color: black;
  }
  </style>
    