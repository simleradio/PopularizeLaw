import {
    request
} from "./request";

export function findLawsByCondition(lawcategory,timeliness) {
    return request({
        url:'/backend/Law/findLawsByCondition',
        method:"post",
        params: {
            lawcategory:lawcategory,
            timeliness:timeliness,
        }
    })
}

export function findLawsByLawid(lawid){
    return request({
        url:'backend/Law/findLawsByLawid',
        method:"post",
        params:{
            lawid:lawid,
        }
    })
}

export function findAllLaws(){
    return request({
        url:'/backend/Law/findAllLaws',
        method:"get",
        params:{

        }
    })
}
export function deleteLaw(lawid){
    return request({
        url:'backend/Law/deleteLaw?lawid=' + 'lawid',
        method:"get",
        params:{
            lawid:lawid,
        }
    })
}


export function submit(lawid,lawname,lawsummary,timeliness) {
    return request({
        url:"backend/Law/updateLaw",
        method: "post",
        dataType: 'jsonp',
        params: {
            lawid:lawid,
            lawname:lawname,
            lawsummary:lawsummary,
            timeliness:timeliness
        }
    })
}
export function addLaw(lawcategory,lawname,publictime,excutetime,lawsummary,lawdetail,timeliness) {
    return request({
        url:"backend/Law/addLaw",
        method: "post",
        dataType: 'jsonp',
        params: {
        lawcategory:lawcategory,
        lawname:lawname,
        publictime:publictime,
        excutetime:excutetime,
        lawsummary:lawsummary,
        lawdetail:lawdetail,
        timeliness:timeliness
        }
    })
}
