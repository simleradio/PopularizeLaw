import {request} from "./request"

export function findAllUsers(){
    return request({
        url: '/backend/User/findAllUsers',
        params:{
            // pageNum: pageNum,
            // pageSize: pageSize
        }
    })
};
export function findUser(username,userpwd){
    return request({
        url:'/backend/User/findUser',
        method:"post",
        params:{
            username:username,
            userpwd:userpwd
        }
    })
}

export function findByIdNumber(useridnumber) {
    return request({
        url: '/backend/User/findByIdNumber?useridnumber='+'useridnumber',
        // url:'/backend/User/findByIdNumber',
        method:"get",
        params:{
            useridnumber:useridnumber,
        }
    })
};
export function deleteUser(userid) {
    return request({
        url: '/backend/User/deleteUser?userid='+'userid',
        method:"get",
        params:{
            userid:userid,
        }
    })
};

export function closureUser(userid) {
    return request({
        url: '/backend/User/closureUser?userid='+'userid',
        method:"get",
        params:{
            userid:userid,
        }
    })
};

export function unClosureUser(userid) {
    return request({
        url: '/backend/User/unClosureUser?userid='+'userid',
        method:"get",
        params:{
            userid:userid,
        }
    })
};
export function changeUserDetail(userid,userrealname,username,userphone) {
    return request({
        url: '/backend/User/changeUserDetail',
        method:"post",
        params:{
            userid:localStorage.getItem('userid'),
            userrealname:userrealname,
            username:username,
            userphone:userphone
        }
    })
};

