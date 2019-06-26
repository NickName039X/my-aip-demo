import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const routerMap = [
	{ path: '/ocr/image', name: 'imageOCR', component: _import('characterOCR/imageOCR'), meta: { title: '图片识别' } }
]

export default new Router({
	mode: 'history', // 后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: routerMap
})