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
                >详情页面</a
              ></span
            >
          </div>
        </div>
        <div class="nwdetail clearFix">
          <div class="nwdetlHed phone_size">
            <template>
              {{ this.lawList.lawname }}
            </template>
          </div>
          <div class="nwdetIntro">
            <span class="marig33 cen_font">
              公布时间：{{ this.lawList.publictime }}</span
            >
            <span class="marig_210 cen_font new_mar0"
              >执行时间：{{ this.lawList.excutetime }}</span
            >
            <div
              style="float: right; width: 210px; height: 40px"
              class="close_operation"
            >
              <div
                id="news_shoucang"
                style="margin-right: 15px; float: left;"
                title="取消收藏"
                @click="removeshoucang"
                v-if="this.status==1"
              >
                <img src="../../static/img/shoucang.png" />
              </div>
              <div
                id="news_unshoucang"
                style="margin-right: 15px; float: left"
                title="收藏"
                @click="shoucang"
                v-if="this.status==0"
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
                    >　　xxxxxx。</font
                  >
                </p> -->
                <p align="justify">　　{{ this.lawList.lawdetail }}</p>
                <!-- <div v-html="this.lawList.lawdetail "></div> -->
                <p align="justify">　　{{ this.lawList.lawsummary }}</p>
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
import { findLawsByLawid } from "../request/lawRequest";
import { removeshoucang,shoucang,findIn, } from "../request/collectionRequest";
export default {
  name: "EmergencyAlarm",
  data() {
    //选项 / 数据
    return {
      userid:localStorage.userid,
      lawid: this.$route.query.lawid,
      lawList: [],
      status:0
    };
  },
  methods: {
    //事件处理器
    findLawsByLawid() {
      findLawsByLawid(this.lawid).then((res) => {
        this.lawList = res.data[0];
        console.log(this.lawList);
      });
    },
    //收藏
    shoucang() {
        shoucang(this.userid,this.lawid).then(res=>{
          if (res.data == 1) {
          this.status=1;
        }
        })
    },
    //取消收藏
    removeshoucang() {
      removeshoucang(this.userid,this.lawid).then(res=>{
          if (res.data == 1) {
          this.status=0;
        }
      })
    },
    findIn(){
      findIn(this.userid,this.lawid).then(res=>{
          if (res.data.length!=0) {
            this.status=1;
        }
      })
    }
  },
  components: {
    //定义组件
    "sg-navbar": header,
  },
  created() {
    //生命周期函数
    this.findLawsByLawid();
    this.findIn();
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
</style>
