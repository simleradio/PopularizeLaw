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

                <!-- <template #header>
                  <div class="card-header">
                    <span style="font-size:30px;font-weight:bold;">普法教育</span>
                  </div>
                </template> -->

                <el-menu-item index="1">
                  <template slot="title">
                    <router-link to="/law/show"
                      ><span>宪法相关法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="2">
                  <template slot="title">
                    <router-link to="/law/show"
                      ><span>民法商法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="3">
                  <template slot="title">
                    <router-link to="/law/show"
                      ><span>行政法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="4">
                  <template slot="title">
                    <router-link to="/law/show"
                      ><span>经济法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="5">
                  <template slot="title">
                    <router-link to="/law/show"
                      ><span>社会法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="6">
                  <template slot="title">
                    <router-link to="/law/show"><span>刑法</span></router-link>
                  </template>
                </el-menu-item>

                <el-menu-item index="7">
                  <template slot="title">
                    <router-link to="/law/show"
                      ><span>诉讼与非诉讼法</span></router-link
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
    