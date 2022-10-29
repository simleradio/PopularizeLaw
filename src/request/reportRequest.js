import {
    request
} from "./request";

export function addReport(userid,reportcategory1,reportcategory2,reportname,reporturl,reportdetail) {
    return request({
        url: '/backend/Report/addReport',
        method: "post",
        params: {
            userid: localStorage.getItem("userid"),
            reportcategory1:reportcategory1,
            reportcategory2:reportcategory2,
            reportname:reportname,
            reporturl:reporturl,
            reportdetail:reportdetail,
        }
    })
}
export function findReportByUserid(userid) {
    return request({
        url: '/backend/Report/findReportByUserid?userid=' + userid,
        method: "get",
        params: {
            userid: localStorage.getItem("userid"),
        }
    })
}



