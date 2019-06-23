import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faExclamationCircle, faCheckCircle, faEdit, faCartPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTheMask from 'vue-the-mask'

library.add(faUserSecret)
library.add(faExclamationCircle)
library.add(faCheckCircle)
library.add(faEdit)
library.add(faCartPlus)
library.add(faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueTheMask)
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })
Vue.config.productionTip = false

const router = new VueRouter({ routes })
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
