<!--自身权益 -->
<template>
    <div>
        <sg-navbar></sg-navbar>
    </div>
</template>

<script>
import header from '../components/header.vue'
    export default {
        name:'Rights',
        data() { //选项 / 数据
            return {
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'sg-navbar':header,
        },
        created() { //生命周期函数

        }
    }
</script>

<style>
</style>
