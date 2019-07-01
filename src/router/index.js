import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const routerMap = [
	// { path: '*', name: 'imageOCR', component: _import('characterOCR/imageOCR'), meta: { title: '图片识别' } },
	{ path: '/characterOcr/imageOcr', name: 'imageOCR', component: _import('characterOCR/imageOCR'), meta: { title: '图片识别' } },
	{ path: '/test/test', name: 'test', component: _import('test/test'), meta: { title: '测试' } }
]

export default new Router({
	mode: 'history', // 后端支持可开
	base: '/character-recognition/',
	scrollBehavior: () => ({ y: 0 }),
	routes: routerMap
})