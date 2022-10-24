<template>
  <div>
    <div class="user-box">
      <el-container>
        <transition name="el-zoom-in-top">
          <el-aside>
            <el-menu
              @open="handleOpen"
              @close="handleClose"
              @select="handSelect"
            >
              <el-card class="card">

                <el-menu-item index="0">
                  <template slot="title">
                    <router-link to="/case/show1"
                      ><span>全部</span></router-link
                    >
                  </template>
                </el-menu-item>


                <el-menu-item index="1">
                  <template slot="title">
                    <router-link to="/case/show2"
                      ><span>刑事犯罪</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="2">
                  <template slot="title">
                    <router-link to="/case/show2"
                      ><span>民法犯罪</span></router-link
                    >
                  </template>
                </el-menu-item>

              </el-card>
            </el-menu>
          </el-aside>
        </transition>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "choose",
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.getData();
    });
  },
  data() {
    return {
      show: false,
      index:''
    };
  },
  methods: {
    getData() {
      this.show = true;
    },
    handleOpen(key, keyPath) {
      console.log("打开：", key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("关闭：", key, keyPath);
    },
    handSelect(key, keyPath) {
      console.log("选择：", key, keyPath);
      this.index=key;
      // localStorage.setItem('index',this.index)
      if(this.index=='0'){
        this.$router.push({path: "/case/show1"});
      }else{
        this.$router.push({path: "/case/show2?id=" + this.index});
      }
    },
  },
  
  mounted() {},
};
</script>
  
    <style scoped>
.user-box {
  display: block;
  position: absolute;
  margin-top: 20px;
  font-size: 18px;
  text-align: left;
}
.el-menu {
  background-color: #f2f6fc;
  /* padding: 10px; */
}
.el-menu-item {
  height: 50px;
  line-height: 50px;
  font-size: 22px;
}
.el-menu-item:hover {
  border-left: rgba(215, 0, 15, 1) solid 6px !important;
  background-color: rgba(215, 0, 14, 0.137) !important;
  color: rgba(215, 0, 15, 1) !important;
}
.el-menu-item.is-active {
  border-left: rgba(215, 0, 15, 1) solid 6px !important;
  background-color: rgba(215, 0, 15, 1) !important;
}
.el-menu-item.is-active span {
  color: yellow !important;
}
.el-avatar {
  margin: 15px auto;
}
.logout {
  margin: 15px auto;
}

.card {
  /* background-color: #F2F6FC; */
  position: relative;
}
.router-link .el-menu-item {
  background-color: #f2f6fc;
}
.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
    