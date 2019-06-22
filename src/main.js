import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTheMask from 'vue-the-mask'

library.add(faUserSecret)
library.add(faExclamationCircle)
library.add(faCheckCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueTheMask)
Vue.config.productionTip = false

const router = new VueRouter({ routes })
new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
