<template>
    <div>
        <el-form>
        <el-form-item >
            <el-select v-model="selectC1" placeholder="请选择举报对象"
                v-on:change="getC1($event)">
                <el-option v-for="item in category1" :label="item.label" :value="item.id" :key="item.id">
                </el-option>
            </el-select>
            <el-select   v-if="selectC1 != ''" v-model="selectC2"
                placeholder="请选择举报类型" v-on:change="getC2($event)">
                <el-option v-for="item in category2" :label="item.label" :value="item.id" :key="item.id">
                </el-option>
            </el-select>
        </el-form-item>
    </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            category1: [
            { label: "网站", value: "网站",id:'1' },
            { label: "用户", value: "用户",id:'2' },
        ],
        category2: [],
            selectC1: '',
            selectC2: ''
        }
    },
    methods: {
        getC1: function (c1) {
            let tempC2 = [];
            this.category2 = [];
            this.selectC2 = '';
            let allC2 = [
                {c1: "1",label: "网络赌博",id:'1'}, 
                {c1: "1",label: "计算机破坏",id:'2'}, 
                {c1: "1",label: "侵犯知识权",id:'3'}, 
                {c1: "1",label: "传播散步谣言",id:'4'}, 
                {c1: "1",label: "淫秽色情",id:'5'}, 
                {c1: "1",label: "其他",id:'6'}, 
                {c1: "2",label: "网络水军",id:'1'}, 
                {c1: "2",label: "发表不当言论",id:'2'}, 
                {c1: "2",label: "利用负面消息敲诈勒索",id:'3'}, 
                {c1: "2",label: "非法有偿提供删帖服务",id:'4'}, 
                {c1: "2",label: "其他",id:'5'}, 
            ];
            for (var val of allC2) {
                if (c1 == val.c1) {
                    tempC2.push({ label: val.label, value: val.label,id:val.id })   
                }
            }
            this.category2 = tempC2;
            
        },
        getC2: function (c2) {
            // console.log(c2);
            console.log(this.selectC1)
            console.log(this.selectC2)
        }
    },
}
</script>
