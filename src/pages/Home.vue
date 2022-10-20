<!-- 首页 -->
<template>
    <div>
        <sg-navbar></sg-navbar>
        <div>
            <home-content-one style="margin-right:0px;"></home-content-one>
            <home-content-two style="margin-left:170px;"></home-content-two>
        </div>
        <home-content-three style="margin-top:30px;"></home-content-three>
        <home-content-four style="margin-top:30px;"></home-content-four>
        <home-content-five style="margin-top:30px;" :lists="lists"></home-content-five>
        <home-content-six style="margin-top:30px;" ></home-content-six>
    </div>
    
</template>

<script>
import header from '../components/header.vue'
import homeContent from '../components/home/home-content.vue'
import homeContentTwo from '../components/home/home-contentTwo.vue'
import homeContentThree  from '../components/home/home-contentThree.vue'
import homeContentFour from '../components/home/home-contentFour.vue'
import homeContentFive from '../components/home/home-contentFive.vue'
import homeContentSix from '../components/home/home-contentSix.vue'
export default {
        name:'Home',
        data () {
            return{
                lists:['百忙千忙万忙，学法守法不忘。','办事时你不依法，出事后法不依你。','诚是做人之道，法乃治国之本。']   //轮播中的文字
            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'sg-navbar':header,
            'home-content-one':homeContent,
            'home-content-two':homeContentTwo,
            'home-content-three':homeContentThree,
            'home-content-four':homeContentFour,
            'home-content-five':homeContentFive,
            'home-content-six':homeContentSix
       },
        created() { //生命周期函数

        }
    }
</script>

<style>
</style>
