<template>
    <div>
        <el-card>
            <span style="font-size:30px;font-weight:bold;">普法教育</span>
            <el-table style="width: 100%" size="medium" :data="tableData">
            <el-table-column prop="lawname" width="900">
            </el-table-column>
            <el-table-column prop="publictime" width="200">
            </el-table-column>
          </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    name:"show",
    beforeRouteEnter:(to,from,next)=>{
        next(vm=>{
            vm.getData();
        })
    },
    methods:{
         getData(){
        }
    },
    data() {
    return {
      tableData: [
        {
            lawname:'中华人民共和国全国人民代表大会常务委员会议事规则(2022修正)',
            publictime:'行政法',
        },
        {
            lawname:'全国人民代表大会常务委员会关于修改《中华人民共和国全国人民代表大会常务委员会议事规则》的决定(2022)',
            publictime:'经济法',
        }
      ],
    }
  }
}
</script>


<style>
</style>