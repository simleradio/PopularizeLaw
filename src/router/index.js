import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savePosition) { 
		if (savePosition) {
			return savePosition;
		} else {
            var top;
            if (window.innerWidth >= 700) {
                 top = 676
            } else {
                 top = 267
            }
			return {
				x: 0,
				y: top
			}
		}
	},
	routes: [
		{//首页
			path: '/',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, 
		{//首页
			path: '/Home',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, 
		{ //相关案例
			path: '/Case',
			component: resolve => require(['../pages/Case.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Case'
		},
		{//登录
			path: '/Login',
			component: resolve => require(['../pages/Login.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Login'
		}, 
		{//注册
			path: '/Register',
			component: resolve => require(['../pages/Register.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Register'
		}, 
		{ //相关权益
			path: '/Rights',
			component: resolve => require(['../pages/Rights.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Rights'
		},
		{//紧急报警
			path: '/EmergencyAlarm',
			component: resolve => require(['../pages/EmergencyAlarm.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'EmergencyAlarm'
		}

	]
})
