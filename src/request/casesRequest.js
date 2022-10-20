import {
    request
} from "./request";

export function findCasesByCondition(casetitle) {
    return request({
        url:'/backend/Cases/findCasesByCondition',
        method:"post",
        params: {
            casetitle:casetitle,
        }
    })
}

export function findAllCases(){
    return request({
        url:'backend/Cases/findAllCases',
        method:"get",
        params:{

        }
    })
}
export function findCasesInHome(){
    return request({
        url:'backend/Cases/findCasesInHome',
        method:"get",
        params:{

        }
    })
}

export function deleteCase(caseid){
    return request({
        url:'backend/Cases/deleteCase?caseid=' + 'caseid',
        method:"get",
        params:{
            caseid:caseid,
        }
    })
}

export function isVerdict() {
    return request({
        url: "/backend/Cases/isVerdict",
        method: "get",
        params: {

        }
    })
}
export function submit(caseid,casetitle,principalname,verdict) {
    return request({
        // url: "/backend/Cases/updateCase?caseid="+'caseid&casetitle?='+'casetitle&principalname?='+'principalname&verdict?='+'verdict',
        url:"backend/Cases/updateCase",
        method: "post",
        dataType: 'jsonp',
        params: {
            caseid:caseid,
            casetitle:casetitle,
            principalname:principalname,
            verdict:verdict
        }
    })
}
export function addCase(casetitle,casecategory,principalname,principalgender,casesummary,casedetail,verdict) {
    return request({
        url:"backend/Cases/addCase",
        method: "post",
        dataType: 'jsonp',
        params: {
        casetitle:casetitle,
        casecategory:casecategory,
        principalname:principalname,
        principalgender:principalgender,
        casesummary:casesummary,
        casedetail:casedetail,
        verdict:verdict
        }
    })
}

