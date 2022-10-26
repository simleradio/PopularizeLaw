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
                ><a href="/law" title="普法教育">普法教育</a>&nbsp;&gt;&nbsp;<a
                  href="../"
                  title="滚动图片"
                  >滚动图片</a
                ></span
              >
            </div>
          </div>
          <div class="nwdetail clearFix">
            <div class="nwdetlHed phone_size">
              <template>
                {{ this.caseList.casetitle }}
              </template></div>
            <div class="nwdetIntro">
              <span class="marig33 cen_font"> 判决情况：{{ this.caseList.verdict }}</span>
              <span class="marig_210 cen_font new_mar0">主犯名称：{{ this.caseList.principalname }}</span>
              <div
                style="float: right; width: 210px; height: 40px"
                class="close_operation"
              >
                <div
                  id="news_shoucang"
                  style="margin-right: 15px; float: left; display: none"
                  title="取消收藏"
                >
                  <img src="../../static/img/shoucang.png" />
                </div>
                <div
                  id="news_unshoucang"
                  style="margin-right: 15px; float: left"
                  title="收藏"
                >
                  <img src="../../static/img/unshoucang.png" />
                </div>
  
                <div class="clear"></div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <!-- <p align="center">
                    <img
                      width="800"
                      height="531"
                      style="
                        border-left-width: 0px;
                        border-right-width: 0px;
                        border-bottom-width: 0px;
                        border-top-width: 0px;
                      "
                      alt=""
                    />
                  </p>
                  <p align="center">
                    <font face="楷体,楷体_GB2312"
                      >　　xxxxxxx。</font
                    >
                  </p> -->
                  <p align="justify">
                    　　{{ this.caseList.casedetail }}
                  </p>
                  <!-- <div v-html="this.lawList.lawdetail "></div> -->
                  <p align="justify">　　{{this.caseList.casesummary}}</p>
                </div>
              </div>
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
  import { findCaseByCaseid } from "../request/casesRequest";
  export default {
    name: "EmergencyAlarm",
    data() {
      //选项 / 数据
      return {
        caseid:this.$route.query.caseid,
        caseList: [],
      };
    },
    methods: {
      //事件处理器
      findCaseByCaseid(){
        findCaseByCaseid(this.caseid).then((res) => {
            this.caseList = res.data[0];
            console.log(this.caseList);
          });
      }
    },
    components: {
      //定义组件
      "sg-navbar": header,
    },
    created() {
      //生命周期函数
      this.findCaseByCaseid()
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
  .mainer_title a{
      color: black;
  } 
  .mainer_title span {
      color: #cd1c16;
  }
  .clearfix { *zoom:1;} 
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
      background-color:#f5f5f5;
      cursor:pointer;
  }
  </style>
  