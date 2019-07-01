import router from './index'
import getToken from '@/api/utils/auth'

router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('accessToken')


	let day = DateDiff()
	if(!token || day < 0 || day > 30){
		getToken()
	}

	next()
})


function DateDiff(){
	let tokenDate = localStorage.getItem('tokenDate')
	let date = new Date()
	if (!tokenDate || tokenDate > date) {
		return -1
	}
	let diff = Math.abs(new Date(tokenDate).getTime() - date.getTime())
	let result = parseInt(diff / (1000 * 60 * 60 * 24));
	return result
}
