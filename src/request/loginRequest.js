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
