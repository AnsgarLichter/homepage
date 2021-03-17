import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';

import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faInstagram, faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faCalendar, faUniversity  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'animate.css/animate.min.css';

import './assets/css/tailwind.css';

library.add(faXing, faGithub, faTwitter, faInstagram, faLinkedin, faGraduationCap, faCalendar, faUniversity);

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(PerfectScrollbar)

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
