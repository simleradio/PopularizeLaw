import {
    request
} from "./request";

export function shoucang(userid,lawid) {
    return request({
        url: '/backend/Collection/shoucang',
        method: "post",
        params: {
            userid: localStorage.getItem("userid"),
            lawid:lawid,
        }
    })
}


export function removeshoucang(userid,lawid) {
    return request({
        url: '/backend/Collection/removeshoucang',
        method: "post",
        params: {
            userid: localStorage.getItem("userid"),
            lawid:lawid,
        }
    })
}

export function shoucang1(userid,caseid) {
    return request({
        url: '/backend/Collection/shoucang1',
        method: "post",
        params: {
            userid: localStorage.getItem("userid"),
            caseid:caseid,
        }
    })
}


export function removeshoucang1(userid,caseid) {
    return request({
        url: '/backend/Collection/removeshoucang1',
        method: "post",
        params: {
            userid: localStorage.getItem("userid"),
            caseid:caseid,
        }
    })
}

export function findAllLawid(userid) {
    return request({
        url: '/backend/Collection/findAllLawid',
        params: {
            userid: localStorage.getItem("userid"),
        }
    })
}


export function findIn(userid,lawid) {
    return request({
        url: '/backend/Collection/findIn',
        method: "post",
        params: {
            userid:localStorage.getItem("userid"),
            lawid:lawid,
        }
    })
}

export function findAllCaseid(userid) {
    return request({
        url: '/backend/Collection/findAllCaseid',
        params: {
            userid: localStorage.getItem("userid"),
        }
    })
}


export function findIn1(userid,caseid) {
    return request({
        url: '/backend/Collection/findIn1',
        method: "post",
        params: {
            userid:localStorage.getItem("userid"),
            caseid:caseid,
        }
    })
}