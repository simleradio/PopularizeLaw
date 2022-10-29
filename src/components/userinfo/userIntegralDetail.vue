<template>
    <div>
        <!-- 展示总积分 -->
        <div id="minHeader">
            <div class="minContent">
                <h6 style="margin-left:-550px">温馨提示：请勿违规刷分哦！</h6>
                <h3 style="color:white;margin-top: 40px;">成长总积分</h3>
                <h1 style="color:white;">{{this.integrals}}分</h1>
                <div v-if="this.integrals <= 100 && this.integrals > 0" isShow="true">一心一意⭐</div>
                <div v-if="this.integrals <= 300 && this.integrals > 100" isShow="true">再接再厉⭐⭐</div>
                <div v-if="this.integrals <= 500 && this.integrals > 300" isShow="true">三省吾身⭐⭐⭐</div>
                <div v-if="this.integrals <= 700 && this.integrals > 500" isShow="true">名扬四海⭐⭐⭐⭐</div>
                <div v-if="this.integrals <= 1000 && this.integrals > 700" isShow="true">学富五车⭐⭐⭐⭐⭐</div>
            </div>
        </div>
        <!-- 积分明细 -->
        <div>
            <div class="detail">
                <h3>积分明细<h4 style="display:inline-block;margin-left: 400px;">最近一次获得了<h3
                            style="color:red;display: inline-block;">&ensp;{{this.integralrecent}}&ensp;积分</h3>
                    </h4>
                </h3>
                <hr style="margin-top:-30px">
            </div>
        </div>
        <div>
            <el-table :data="dataList" style="width:100%;" :stripe="true" :highlight-current-row="true">
                <el-table-column label="记录ID" >
                    <template slot-scope="scope">
                        <li >{{scope.row.id}}</li>
                    </template>
                </el-table-column>
                <el-table-column label="分数" style="margin-left: -300px;">
                    <template slot-scope="scope">
                        <p>{{scope.row.integral}}分</p>
                    </template>
                </el-table-column>
                <el-table-column label="来源">
                    <template slot-scope="scope" >
                        <p>通过累计在线{{scope.row.integral / 5}}分钟获得该积分</p>
                    </template>
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>
<script>
import { findIntegralDetail,findIntegralRecent,findTotalIntegral } from '../../request/onlinetimeRequest'
import moment from "moment";
export default {
    name: "user",
    data() {
        return {
            userid:localStorage.userid,
            dataList: [],
            integralrecent:'',
            integrals:'',
            isShow:false,
        };
    },
    methods: {
        findIntegralDetail() {
            findIntegralDetail(this.userid).then(res => {
                this.dataList = res.data
                console.log(this.dataList)
            })
        },
        findIntegralRecent(){
            findIntegralRecent(this.userid).then(res =>{
                this.integralrecent = res.data[0].integral
            })
        },
        findTotalIntegral(){
            findTotalIntegral(this.userid).then(res =>{
                this.integrals = res.data[0].integrals
            })
        }
        
    },
    mounted() {
    },
    created() {
        this.findIntegralDetail()
        this.findIntegralRecent()
        this.findTotalIntegral()
    }   
};
</script>
<style scoped>
#minHeader {
    height: 40vh;
    width: 155vh;
    margin: auto auto;
    background: linear-gradient(to left top, orange, red)
}

.minContent {
    /* margin:20px; */
    margin-top: 40px;
    position: relative;
}
</style>