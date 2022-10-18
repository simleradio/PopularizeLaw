<template>
    <div>
        <div class="container">
            <h1 class="registerTitle"></h1>
            <div>
                <div class="registerBox">
                    <div class="lr-title">
                        <h1>注册</h1>
                        <p>已有账号<a href="#/Login" class="tcolors">登录</a></p>
                    </div>
                    <el-alert type="error" show-icon  :closable="false"> </el-alert>
                    <el-input type="text" placeholder="用户名"> </el-input>
                    <el-alert title="用户名错误" type="error" show-icon  :closable="false"> </el-alert>
                    <el-input type="text" placeholder="昵称"></el-input>
                    <el-input type="email" placeholder="邮箱"> </el-input>
                    <el-alert  title="邮箱错误" type="error" show-icon :closable="false"></el-alert>
                    <el-input type="password" placeholder="密码:6-12位英文、数字、下划线"></el-input>
                    <el-alert  title="密码错误" type="error" show-icon  :closable="false"></el-alert>
                    <el-input type="password" placeholder="确认密码"></el-input>
                    <el-alert  title="重复密码有误" type="error" show-icon :closable="false"></el-alert>
                    <div class="lr-btn tcolors-bg" element-loading-text="提交中">注册</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.registerTitle{
    text-align: center;
    font-size: 26px;
    padding-top:50px;
    margin-bottom: 20px;
}
.registerBox{
    background: #fff;
    padding:40px;
    max-width:320px;
    margin:0 auto;
}
.lr-title{
    position: relative;
    height:32px;
    line-height: 32px;
    margin-bottom: 20px;
}
.lr-title h1{
    font-size: 24px;
    color:#666;
    font-weight: bold;
    /*width:50%;*/
}
.lr-title p{
    font-size: 12px;
    color:#999;
    position: absolute;
    right:0;
    top:0;
}
.lr-btn{
    color:#fff;
    text-align: center;
    letter-spacing: 5px;
    padding:8px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
}
.registerBox .el-input{
    margin-bottom: 20px;
}
.registerBox .el-alert{
    top:-18px;
    background-color: #888;
}
.registerBox .el-input input{
    border-radius: 4px;
}
.registerBox h3{
    text-align: right;
    margin-bottom: 20px;
}
.registerBox h3 a{
    font-size: 13px;
    color:#999;
}

/*登录成功*/
.registerSuc{
    padding: 40px;
    margin: 0 auto;
}
.registerSuc .sucIcon{
    text-align: center;
    margin-bottom: 30px;
    padding-left:60px;
}
.registerSuc .sucContent{
    line-height: 1.5;
    font-size: 15px;
    text-align: center;
}
.registerSuc .sucContent p{
    margin-top: 10px;
    font-size: 13px;
    color: #999;
}
.registerSuc .sucContent .lastbtn{
    display: inline-block;
    font-size: 14px;
    padding: 3px 10px;
    border-radius: 5px;
    color:#fff;
    cursor: pointer;
}
.registerSuc .sucContent  .el-icon-close{
    fong-size: 13px;
}
</style>
