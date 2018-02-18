export default [{
	path: '/',
	redirect: '/user/login'
}, {
	meta: {
		title: '登录'
	},
	path: '/user/login',
	component: (resolve) => require(['@/pages/user/login'], resolve)
}, {
	meta: {
		title: '错误'
	},
	path: '*',
	component: (resolve) => require(['@/pages/error/404'], resolve)
}];