<template>
  <div>
    <div class="user-box">
      <el-container>
        <transition name="el-zoom-in-top">
          <el-aside>
            <el-header>
              <el-card class="card1">
                <el-row>
                  <el-avatar></el-avatar>
                </el-row>
                <el-row>
                  <span>xxx</span>
                </el-row>
                <el-row class="logout">
                  <router-link to="/logout">退出登录</router-link>
                </el-row>
              </el-card>
            </el-header>
            <el-menu
              @open="handleOpen"
              @close="handleClose"
              @select="handSelect"
            >
              <el-card class="card2">
                <el-menu-item index="1">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <router-link to="/UserInfo/info1"><span>基本资料</span></router-link>
                  </template>
                </el-menu-item>

                <el-submenu index="2">
                  <template slot="title"
                    ><i class="el-icon-star-on"></i><span>我的收藏</span></template
                  >
                  <el-menu-item-group>
                    <el-menu-item index="2-1">
                      <router-link to="/UserInfo/info2">法律条例</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                      <router-link to="/UserInfo/info3">相关案例</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                      <router-link to="/UserInfo/info4">权益条例</router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title"
                    ><i class="el-icon-setting"></i><span>关于我们</span></template
                  >
                  <el-menu-item-group>
                    <el-menu-item index="3-1">
                      <router-link to="/UserInfo/info3">门诊结算</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                      <router-link to="/UserInfo/info3">消费记录</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-3">
                      <router-link to="/UserInfo/info3"
                        >预约信息</router-link
                      >
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
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
  name: "userinfo",
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
  mounted() {
  },
};
</script>

  <style scoped>
.user-box {
  display: block;
  position: absolute;
  margin-top: 20px;
  font-size: 18px;
}
.el-header {
  color: #333;
  min-height: 210px;
}
.el-aside {
  color: #333;
  margin-bottom: 50px;
  /* min-height: 890px; */
}
.el-menu {
  background-color: #f2f6fc;
  /* padding: 10px; */
}
.el-menu-item{
  height: 50px;
  line-height: 50px;
  font-size: 22px;
}
.el-submenu /deep/ .el-submenu__title{
  height: 50px;
  line-height: 50px;
  font-size: 22px;
}
.el-menu-item-group .el-menu-item{
  font-size: 17px;
}

.el-menu-item.is-active {
   background-color: rgba(215, 0, 15, 1) !important;
   color: yellow ;
}
.el-menu-item:hover{
        border-left:rgba(215, 0, 15, 1) solid 6px !important;
        background-color: #E2EFF9 !important;
        color: rgba(215, 0, 15, 1) !important;
}
.el-menu-item.is-active span{
  color: yellow !important;
}
.el-submenu.is-active > .el-submenu__title span{
  color: yellow !important;
}
/* icon图标也跟着变 */
.el-submenu.is-active > .el-submenu__title i {
  color: yellow !important;
}
.el-avatar {
  margin: 15px auto;
}
.logout {
  margin: 15px auto;
}
.card1 {
  background-color: rgba(215, 0, 15, 1);
  position: relative;
}
.card2 {
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
  