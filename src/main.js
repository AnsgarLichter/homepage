import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faInstagram, faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 

import './assets/css/tailwind.css';

library.add(faXing, faGithub, faTwitter, faInstagram, faLinkedin);

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
