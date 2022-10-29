<!-- 紧急报警 -->
<template>
    <div>
        <sg-navbar></sg-navbar>
        <reportAttention></reportAttention>
    </div>
</template>

<script>
import header from '../components/header.vue'
import reportAttention from '../components/report/reportAttention.vue'
    export default {
        name:'EmergencyAlarm',
        data() { //选项 / 数据
            return {
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'sg-navbar':header,
            'reportAttention':reportAttention,
        },
        created() { //生命周期函数

        }
    }
</script>

<style>
</style>
