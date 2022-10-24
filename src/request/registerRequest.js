import {
        request
    } from "./request";
    
    export function submit(username, userphone,userrealname,useridnumber,usergender,userpwd) {
        return request({
            url: '/backend/Register/register',
            method: "post",
            params: {
                username: username,
                userphone: userphone,
                userrealname: userrealname,
                useridnumber: useridnumber,
                userpwd: userpwd,
                usergender: usergender,
            }
        })
    }