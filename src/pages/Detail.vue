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
              ><a href="../../" title="法治资讯">法治资讯</a>&nbsp;&gt;&nbsp;<a
                href="../"
                title="滚动图片"
                >滚动图片</a
              ></span
            >
          </div>
        </div>
        <div class="nwdetail clearFix">
          <div class="nwdetlHed phone_size">每日一图 | 进村普法</div>
          <div class="nwdetIntro">
            <span class="marig33 cen_font"> 法治日报--法治网</span>
            <span class="marig_210 cen_font new_mar0">2022-09-22</span>
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
                <p align="center">
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
                    >　　图为民警向群众宣传反家庭暴力法相关内容。</font
                  >
                </p>
                <p align="justify">
                  　　为进一步加大反家庭暴力宣传教育力度，9月21日，安徽省含山县公安局清溪派出所组织民警深入辖区乡村，开展以“反对家庭暴力
                  共建平安家庭”为主题的宣传活动。
                </p>
                <p align="justify">　　法治日报通讯员 冯善军 摄</p>
              </div>
            </div>
          </div>
          <div>（责任编辑：金燕)</div>
        </div>

        <div></div>
        <div>&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
export default {
  name: "EmergencyAlarm",
  data() {
    //选项 / 数据
    return {};
  },
  methods: {
    //事件处理器
  },
  components: {
    //定义组件
    "sg-navbar": header,
  },
  created() {
    //生命周期函数
  },
};
</script>

<style>
.mainer_title div.borderB5 {
  border-bottom: 2px solid #cd1c16;
  box-sizing: border-box;
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

</style>
