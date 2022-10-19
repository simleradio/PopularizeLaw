<template>
  <div class="app">
    <sg-navbar></sg-navbar>
    <user-box></user-box>
  </div>
</template>

<script>
import header from "../components/header.vue";
import user from "../components/user.vue";
export default {
  name: "UserInfo",
  data() {
    //选项 / 数据
    return {};
  },
  methods: {
    //事件处理器
  },
  components: {
    //定义组件
    "sg-navbar": header,
    "user-box": user,
  },
  created() {
    //生命周期函数
  },
};
</script>

