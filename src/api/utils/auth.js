import axios from 'axios';
import qs from 'qs';

const domain = process.env.VUE_APP_BASE_API;
console.log(process.env.VUE_APP_BASE_API)
console.log(process.env.NODE_ENV)

axios.defaults.withCredentials=true;
axios.defaults.crossDomain=true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function getToken() {
    axios({
        url: domain + '/oauth/2.0/token',
        method: 'post',
        data: qs.stringify({
            "grant_type": "client_credentials",//固定值
            "client_id": "IjoVFE28duZ1GdkVVbhghzSV",//设置API_KEY
            "client_secret": "wt3XU6LBWzsuH4cuSc9T4MWpgvgSdmmK"//设置SECRET_KEY
        })
    }).then(res => {
        localStorage.setItem('accessToken', res.data.access_token);
        localStorage.setItem('expiresIn', res.data.expires_in);
        // axios.defaults.headers.common['access_token'] = res.data.access_token
    })
}

