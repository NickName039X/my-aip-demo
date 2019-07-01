import router from './index'
import getToken from '@/api/utils/auth'

router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('accessToken')

	if(!token){
		getToken()
	}
	next()
})
