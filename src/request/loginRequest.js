import {
    request
} from "./request";

export function login(adminname,adminpwd) {
    return request({
        url:'/backend/Login/login',
        method:"post",
        params: {
            adminname:adminname,
            adminpwd:adminpwd
        }
    })
}
export function userLogin(username,userpwd) {
    return request({
        url:'/backend/Login/userLogin',
        method:"post",
        params: {
            username:username,
            userpwd:userpwd
        }
    })
}
export function changePwd(useridnumber,userrealname,userpwd){
    return request({
        url:'/backend/Login/changePwd',
        method:'post',
        params:{
            useridnumber:useridnumber,
            userrealname:userrealname,
            userpwd:userpwd
        }
    })
}

