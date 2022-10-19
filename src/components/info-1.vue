<!-- 用户中心 -->
<template>
  <div>
    <div class="container">
      <div class="tcommonBox"  v-show="isEdit">
        <!-- <header>
          <h1>编辑个人资料</h1>
        </header> -->
        <header>
          <h1>
            编辑个人资料
            <span class="gotoEdit" @click="isEdit=!isEdit"><i class="fa fa-wa fa-edit"></i>保存</span>
          </h1>
        </header>
        <section>
          <ul class="userInfoBox">
            <li class="avatarlist">
              <span class="leftTitle">头像</span>
              <el-upload
                class="avatar-uploader"
                name="img"
                :action="uploadURL"
              >
                <img class="avatar" />
                <i class="el-icon-plus avatar-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip">
                  点击上传头像，只能上传jpg/png文件，且不超过1mb
                </div>
              </el-upload>
            </li>
            <li class="username">
              <span class="leftTitle">昵称</span>
              <el-input placeholder="昵称"></el-input>
              <i class="fa fa-wa fa-asterisk"></i>
            </li>
            <li>
              <span class="leftTitle">电子邮件</span>
              <el-input placeholder="电子邮件"></el-input>
              <i class="fa fa-wa fa-asterisk"></i>
            </li>
            <li>
              <span class="leftTitle">性别</span>
              <template>
                <el-radio class="radio" label="0">男</el-radio>
                <el-radio class="radio" label="1">女</el-radio>
              </template>
            </li>
          </ul>
          <div class="saveInfobtn">
            <a class="tcolors-bg" href="javascript:void(0);">返 回</a>
            <a class="tcolors-bg" href="javascript:void(0);">保 存</a>
          </div>
        </section>
      </div>
      <div class="tcommonBox"  v-show="!isEdit">
        <header>
          <h1>
            个人中心
            <span class="gotoEdit" @click="isEdit=!isEdit"><i class="fa fa-wa fa-edit"></i>编辑</span>
          </h1>
        </header>
        <section>
          <ul class="userInfoBox">
            <li class="avatarlist">
              <span class="leftTitle">头像</span>
              <div class="avatar-uploader">
                <img class="avatar" />
              </div>
            </li>
            <li class="username">
              <span class="leftTitle">昵称</span>
              <span>222</span>
            </li>
            <li>
              <span class="leftTitle">电子邮件</span>
              <span>333</span>
            </li>
            <li>
              <span class="leftTitle">性别</span>
              <span>444</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"UserInfo-1",
    methods:{},
    data(){
        return{
            uploadURL:'',
            isEdit: false,
        }
    },
    methods:{
       
    },
    created(){ 
        
    }
}
</script>


<style>
h1{
    text-align: left;
}
.userInfoBox{
    position: relative;
    width: 1280px;
}
.userInfoBox ul{
    width: 100%;
    overflow:hidden;
}
.userInfoBox li{
    text-decoration: none;
    text-align: left;
	list-style: none;
	/* display: inline; */
    width:46%;
    height: 120px;
    line-height: 120px;
    float:left;
	border: 1px solid #FFFFFF;
	background-color: rgba(215, 0, 15, 1);
}
.userInfoBox .avatarlist {
  position: relative;
}

.avatar-uploader {
  display: inline-block;
  vertical-align: top;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 120px;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
.gotoEdit {
  font-size: 15px;
  float: right;
  cursor: pointer;
  color: #999;
}
.gotoEdit:hover {
  color: #333;
}
/*个人设置*/
.userInfoBox .leftTitle {
  display: inline-block;
  width: 100px;
  padding: 10px 0;
}
.userInfoBox .rightInner {
  display: inline-block;
  max-width: calc(100% - 140px);
  vertical-align: top;
}
.userInfoBox li {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}
.userInfoBox li:last-child {
  border-bottom: 1px solid transparent;
}
.userInfoBox .el-input,
.userInfoBox .el-textarea {
  max-width: 300px;
  min-width: 100px;
}

.userInfoBox .el-input__inner {
  border-radius: 4px;
}
.userInfoBox .el-textarea {
  vertical-align: top;
}
.saveInfobtn {
  margin: 20px 0;
  text-align: center;
}
.saveInfobtn a {
  color: #fff;
  padding: 6px 20px;
  margin: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}
.userInfoBox .fa-asterisk {
  color: #df2050;
}
</style>
