<!-- 普法教育 -->
<template>
    <div>
        <sg-navbar></sg-navbar>
        <choose></choose>
    </div>
</template>

<script>
import header from '../components/header.vue'
import choose from "../components/law/choose.vue";
    export default {
        name:'Law',
        data() { //选项 / 数据
            return {
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'sg-navbar':header,
            choose,
        },
        created() { //生命周期函数
            
        }
    }
</script>

<style>
</style>
