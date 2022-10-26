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

                <el-menu-item index="0">
                  <template slot="title">
                    <router-link to="/law/show1"><span>全部</span></router-link>
                  </template>
                </el-menu-item>

                <el-menu-item index="1">
                  <template slot="title">
                    <router-link to="/law/show2"
                      ><span>宪法相关法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="2">
                  <template slot="title">
                    <router-link to="/law/show2"
                      ><span>民法商法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="3">
                  <template slot="title">
                    <router-link to="/law/show2"
                      ><span>行政法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="4">
                  <template slot="title">
                    <router-link to="/law/show2"
                      ><span>经济法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="5">
                  <template slot="title">
                    <router-link to="/law/show2"
                      ><span>社会法</span></router-link
                    >
                  </template>
                </el-menu-item>

                <el-menu-item index="6">
                  <template slot="title">
                    <router-link to="/law/show2"><span>刑法</span></router-link>
                  </template>
                </el-menu-item>

                <el-menu-item index="7">
                  <template slot="title">
                    <router-link to="/law/show2"
                      ><span>诉讼与非诉讼法</span></router-link
                    >
                  </template>
                </el-menu-item>
              </el-card>
            </el-menu>
            <el-menu class="search">
             
              <el-card>
                <el-row style="margin-bottom: 15px;"><i class="el-icon-search">&ensp;搜索</i></el-row>
                <el-row>
                <el-col :span="10">查询方式：</el-col>
                <el-col :span="14">
                  <el-select
                    placeholder="请选择查询方式"
                    @change="getWay()"
                  >
                    <el-option
                      :value="lawcategory"
                      :label="法律类别"
                    >法律类别
                    </el-option>
                    <el-option
                      :value="lawname"
                      :label="法律名称"
                    >法律名称
                    </el-option>
                    <el-option
                      :value="lawdetail"
                      :label="法律内容"
                    >法律类别
                    </el-option>
                    <el-option
                      :value="publictime"
                      :label="颁布时间"
                    >法律名称
                    </el-option>
                  </el-select>
                </el-col>

               
              </el-row>
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
      index: "",
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
      this.index = key;
      // localStorage.setItem('index',this.index)
      if (this.index == "0") {
        this.$router.push({ path: "/law/show1" });
      } else {
        this.$router.push({ path: "/law/show2?id=" + this.index });
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
.search {
  margin-top: 20px;
  position: relative;
}
.el-select .el-input__inner:focus{
    border-color: rgba(215, 0, 15, 1);
}
.el-select .el-input.is-focus .el-input__inner{
  border: rgba(215, 0, 15, 1);
}
/*修改下拉框的字体*/
.el-select-dropdown__list {
	padding: 5px;
	text-align: center;
    /*修改单个的选项的样式*/
}
	.el-select-dropdown__item {
		color: #333;
		font-size: 16px;
    font-weight: lighter;
	}
	.el-select-dropdown__item.selected {
		color: #333;
    font-weight: lighter;
	}
    /*item选项的hover样式*/
	.el-select-dropdown__item.hover,
	.el-select-dropdown__item:hover {
		background-color: rgba(215, 0, 15, 1);
	}
/* 修改下拉箭头左侧字体大小颜色*/
.el-input-group__append button.el-button,
.el-input-group__append div.el-select .el-input__inner,
.el-input-group__append div.el-select:hover .el-input__inner,
.el-input-group__prepend button.el-button,
.el-input-group__prepend div.el-select .el-input__inner,
.el-input-group__prepend div.el-select:hover .el-input__inner {
	color: #ffff !important;
	font-size: 16px;
}

/*修改鼠标选中输入框时输入框的颜色*/


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
    