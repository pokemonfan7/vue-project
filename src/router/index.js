import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/main/main'
import Test from '../components/test/test'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '',
			redirect: 'main'
		},
		{
			path: '/main',
			component: Main
		},
		{
			path: '/test',
			component: Test
		},
	]
})
