import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import '@/api/utils/auth.js'
import '@/assets/fonts/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
