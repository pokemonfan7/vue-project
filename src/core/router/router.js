import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../../components/main/main'
import PkmList from '../../components/pkm-list/pkm-list'
import TestPage from '../../components/test-page/test-page'
import Form from '../../components/form/form'
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
					component: PkmList
				},
				{
					path: '/test',
					component: TestPage
				},
				{
					path: '/form',
					component: Form
				},
			]
		},
		{
			path: '*',
			component: NotFound
		}
	]
})
