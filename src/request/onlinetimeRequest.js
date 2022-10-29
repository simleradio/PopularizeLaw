import {
    request
} from "./request";

export function logout(userid,onlineTime,integral) {
    return request({
        url: '/backend/Online/addList',
        method: "post",
        params: {
            userid: localStorage.getItem("userid"),
            // logintime: localStorage.getItem("logintime"),
            // logouttime: localStorage.getItem("logouttime"),
            onlineTime:onlineTime,
            integral:integral

        }
    })
}
export function integralTotal(userid) {
    return request({
        url: '/backend/Online/integralTotal',
        params: {
            userid: localStorage.getItem("userid"),
        }
    })
}
export function findIntegralDetail(userid) {
    return request({
        url: '/backend/Online/findIntegralDetail',
        params: {
            userid: localStorage.getItem("userid"),
        }
    })
}
export function findIntegralRecent(userid) {
    return request({
        url: '/backend/Online/findIntegralRecent',
        params: {
            userid: localStorage.getItem("userid"),
        }
    })
}
export function findTotalIntegral(userid) {
    return request({
        url: '/backend/Online/findTotalIntegral',
        params: {
            userid: localStorage.getItem("userid"),
        }
    })
}


