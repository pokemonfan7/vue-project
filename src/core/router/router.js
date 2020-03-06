import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../../components/main/main'
import Page1 from '../../components/pkm-list/pkm-list'
import Test from '../../components/page2/page2'
import NotFound from '../../components/note-found/not-found'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '',
			redirect: 'main'
		},
		{
			path: '/main',
			component: Main,
			children: [
				{
					path: '',
					component: Page1
				},
				{
					path: '/test',
					component: Test
				},
			]
		},
		{
			path: '*',
			component: NotFound
		}
	]
})
