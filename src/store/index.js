import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  loading: false,
  themeObj: 0,//主题
  keywords:'',//关键词
  errorImg: 'this.onerror=null;this.src="' + require('../assets/logo.png') + '"',
  baseURL:'http://localhost:7777/'
}

export default new Vuex.Store({
    state,
})
