<template>
    <div class="big-box">
      <div class="img-box">
        <div
          class="show-box"
          :style="{
            transform: 'translateX(' + translate + 'px)',
            transition: tsion ? 'all 0.5s' : 'none',
          }"
        >
          <img src="../../../static/img/lunbotu5.jpg" alt="" />
          <img v-for="item in src" :key="item.id" :src="item.img" alt="" />
          <img src="../../../static/img/lunbotu1.jpg" alt="" />
        </div>
      </div>
      <div class="arrowhead-box" ref="swiper">
        <span @click="last"><img src="../../../static/img/zuo.jpg" alt="" style="height:50px ;width:50px"></span>
        <span @click="next"><img src="../../../static/img/zuo.jpg" alt="" style="height:50px ;width:50px"></span>
      </div>
      <div class="swiper-boxs" ref="swiper">
        <span v-for="item in src" :key="item.id"></span>
      </div>
    </div>
  </template>
   
  <script>
  export default {
    name: "home-content",
    data() {
      return {
        src: [
          { img: require("../../../static/img/lunbotu1.jpg") },
          { img: require("../../../static/img/lunbotu2.jpg") },
          { img: require("../../../static/img/lunbotu3.jpg") },
          { img: require("../../../static/img/lunbotu4.jpg") },
          { img: require("../../../static/img/lunbotu5.jpg") },
        ],
        translateX: 0,
        tsion: true,
      };
    },
    methods: {
      last() {
        this.translateX--;
        this.tsion = true;
        if (this.translateX < 0) {
          setTimeout(() => {
            this.tsion = false;
            this.translateX = this.src.length - 1;
          }, 500);
        }
      },
      next() {
        this.translateX++;
        this.tsion = true;
        if (this.translateX > this.src.length + 1) {
          setTimeout(() => {
            this.tsion = false;
            this.translateX = 0;
          }, 500);
        }
      },
      swiper(i) {
        this.translateX = i;
      },
    },
    mounted() {
      setInterval(() => {
        this.next();
      }, 3000);
    },
    computed: {
      translate() {
        return -(this.translateX + 1) * 1050;
      },
    },
    watch: {
      translateX: {
        handler(val) {
          let a = this.$refs.swiper.querySelectorAll("span");
          a.forEach((element) => {
            element.style.width = "12px";
          });
          if (this.translateX < 0) {
            val = this.src.length - 1;
          }
          if (this.translateX > this.src.length - 1) {
            val = 0;
          }
          a[val].style.width = "100px";
        },
      },
    },
  };
  </script>
  <style scoped>
  body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
  }
  span {
    margin: 0;
    padding: 0;
  }
  .big-box {
    width: 500px;
    height: 325px;
    background-color: #999;
    /* position: fixed;
    top: 22%;
    left: 15%; */
    position: absolute;
    margin-top: 10px;
    margin-left: 25px;
    margin-bottom: 40px;
    box-shadow: 0 0 3pc rgb(0, 0, 0, 0.4);
  }
  .img-box {
    overflow: hidden;
    width: 500px;
    height: 300px;
  }
  .show-box {
    display: flex;
    height: 100%;
    width: 100%;
    transition: all 0.5s;
  }
  .show-box img {
    float: left;
    min-width: 1050px;
    min-height: 400px;
  }
  .arrowhead-box {
    position: absolute;
    top: 40%;
    float: left;
    width: 100%;
    height: 50px;
  }
  .arrowhead-box span {
    float: left;
    display: block;
    height: 60px;
    border-radius: 50px;
    /* background: url("../assets/img/banner2.jpg") no-repeat; */
    /* background-color: rgb(0, 0, 0, 0.4); */
    background-position: 6px 14px;
    cursor: pointer;
    opacity: 0.5;
  }
  .arrowhead-box span:nth-child(2) {
    float: right;
    transform: rotate(180deg);
  }
  .arrowhead-box span:hover {
    opacity: 1;
  }
  .swiper-boxs {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
   
  }
  .swiper-boxs span {
    float: left;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50px;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .swiper-boxs span:nth-child(1) {
    width: 100px;
  }
  </style>