<template>
  <div>
    <div class="user-box">
      <el-container>
        <transition name="el-zoom-in-top">
          <el-aside>
            <el-header>
              <el-card class="card1">
                <el-row>
                  <img :src="this.photo" @click="change()" style="width:70px;height: 70px;border-radius: 70px;">
                </el-row>
                <el-row>
                  <el-dialog title="更换头像" :visible.sync="avatarVisible" width="22%" center>
                    <el-upload action="" list-type="picture-card" accept="image/jpg,image/jpeg,image/png"
                      :on-change="uploadAvatarImage" :auto-upload="false" :limit="1">
                      <img :src="this.photo" alt="" srcset="" style="width:170px;height:170px;">

                    </el-upload>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="avatarVisible = false">取 消</el-button>
                      <el-button type="primary" @click="handleEditAvatar">确 定</el-button>
                    </span>
                  </el-dialog>

                </el-row>
                <el-row>
                  <span style="color:white">{{ username }}</span>
                </el-row>
                <el-row class="logout">
                  <el-button @click="logout" class="out">退出登录</el-button>
                </el-row>
              </el-card>
            </el-header>
            <el-menu @open="handleOpen" @close="handleClose" @select="handSelect">
              <el-card class="card2">
                <el-menu-item index="1">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <router-link to="/UserInfo/info1"><span>基本资料</span></router-link>
                  </template>
                </el-menu-item>

                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-star-on"></i><span>我的收藏</span></template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">
                      <router-link to="/UserInfo/info2">法律条例</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                      <router-link to="/UserInfo/info3">相关案例</router-link>
                    </el-menu-item>
                    <!-- <el-menu-item index="2-3">
                      <router-link to="/UserInfo/info4">权益条例</router-link>
                    </el-menu-item> -->
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title"><i class="el-icon-setting"></i><span>积分明细</span></template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">
                      <router-link to="/UserInfo/userIntegraiDetail">在线时长所得</router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title"><i class="el-icon-setting"></i><span>举报记录</span></template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1">
                      <router-link to="/UserInfo/reportRecord">举报情况查询</router-link>
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
import { logout, integralTotal, findTotalIntegral } from '../../request/onlinetimeRequest'

import moment from "moment";
import axios from 'axios';
export default {
  name: "user",
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      vm.getData();
    });
  },
  data() {
    return {
      show: false,
      userid: localStorage.userid,
      logouttime: localStorage.logouttime,
      logintime: localStorage.logintime,
      onlinetime: '',
      integral: '',
      username: '',
      photo: '',
      avatarVisible: false,
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
    logout() {
      this.$message({
        type: 'success',
        message: '成功退出！欢迎下次登录！'
      });
      this.getTimeDiff()
      logout(this.userid, this.onlinetime, this.integral).then(res => {
        if (res.data == 1) {
          this.integralTotal();
          this.$router.push("/login");
        }
        // localStorage.clear();
      })
    },
    integralTotal() {
      integralTotal(this.userid).then(res => {
        if (res.data == 1) {
        }
      })
    },
    findTotalIntegral() {
      findTotalIntegral(this.userid).then(res => {
        this.username = res.data[0].username
        this.photo = res.data[0].photo
      })
    },
    getTimeDiff() {
      this.logouttime = new Date();
      var outtime = moment(this.logouttime).format('HH:mm:ss')
      localStorage.setItem('logouttime', outtime)
      let diff = moment(this.logouttime).format('x') - moment(this.logintime).format('x');
      let time = moment.duration(diff);
      let hours = time.hours();//小时差
      let minutes = time.minutes();//分钟差
      this.onlinetime = minutes + hours * 60;
      this.integral = this.onlinetime * 5;
    },

    uploadAvatarImage(file, filelist) {
      const that = this;
      if (filelist.length > 0) {
        this.fileList = [filelist[filelist.length - 1]] //这一步，是 展示最后一次选择文件
        let formData = new FormData();
        formData.append("file", this.fileList[0].raw);
        console.log(formData.get("file"));

        var instance = axios.create({
          baseURL: 'http://www.xiehanxin.com:8080/index.php/',
          timeout: 5000,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        instance.post(`backend/Register/upload?userid=${this.userid}`, formData)
          .then((res) => {
            console.log(res);
            if (res.data.code == 1) {
              this.$message(res.data.message);
              this.updataAvatar = res.data.path;
              findTotalIntegral(this.userid).then(res => {
                this.photo = res.data[0].photo
              })
            } else {
              this.$message(res.data.message);
            }
          }).catch((err) => {
            this.$message.error('上传失败');
            console.log('上传失败', err)

          })
      }
    },
    change() {
      this.avatarVisible = true;
    },
    handleEditAvatar() {
      this.avatarVisible = false;
      this.$router.go(0);
    }



  },
  mounted() {
  },
  created() {
    this.findTotalIntegral()
   
  }
};
</script>

<style scoped>
.out {
  border-radius: 5px;
  background: gainsboro;
}

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

.el-menu-item {
  height: 50px;
  line-height: 50px;
  font-size: 22px;
}

.el-submenu /deep/ .el-submenu__title {
  height: 50px;
  line-height: 50px;
  font-size: 22px;
}

.el-menu-item-group .el-menu-item {
  font-size: 17px;
}

.el-menu-item.is-active {
  background-color: rgba(215, 0, 15, 1) !important;
  color: yellow;
}

.el-menu-item:hover {
  border-left: rgba(215, 0, 15, 1) solid 6px !important;
  background-color: #E2EFF9 !important;
  color: rgba(215, 0, 15, 1) !important;
}

.el-menu-item.is-active span {
  color: yellow !important;
}

.el-submenu.is-active>.el-submenu__title span {
  color: yellow !important;
}

/* icon图标也跟着变 */
.el-submenu.is-active>.el-submenu__title i {
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
  