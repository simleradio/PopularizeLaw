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
			name: 'Home',
			children:[
				{path: '/UserInfo/info',component: () => import('../components/userinfo/info.vue')},
				{path: '/Home/home-content',component: () => import('../components/home/home-content.vue')},
			]
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
		},
		{ //相关案例
			path: '/Case',
			component: resolve => require(['../pages/Case.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Case',
			redirect:'Case/show1',
			children:[
				{path: '/Case/show1',component: () => import('../components/case/show-1.vue')},
				{path: '/Case/show2',component: () => import('../components/case/show-2.vue')},
			]
		},
		{//普法教育
			path: '/Law',
			component: resolve => require(['../pages/Law.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Law',
			redirect:'Law/show1',
			children:[
				{path: '/Law/show1',component: () => import('../components/law/show-1.vue')},
				{path: '/Law/show2',component: () => import('../components/law/show-2.vue')},
			]
		},
		{//个人页面
			path: '/UserInfo',
			component: resolve => require(['../pages/UserInfo.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'UserInfo',
			redirect:'/UserInfo/info',
        //路由嵌套
        children:[
			{path: '/UserInfo/info',component: () => import('../components/userinfo/info.vue')},
            {path: '/UserInfo/info1',component: () => import('../components/userinfo/info-1.vue')},
            {path: '/UserInfo/info2',component: () => import('../components/userinfo/info-2.vue')},
            {path: '/UserInfo/info3',component: () => import('../components/userinfo/info-3.vue')},
			{path: '/UserInfo/info4',component: () => import('../components/userinfo/info-4.vue')}
        ]
		}

	]
})
