import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';

import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faInstagram, faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faCalendar, faUniversity, faMapMarkerAlt, faEnvelope, faUserGraduate, faIndustry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import './assets/css/tailwindBase.css';
import './assets/css/tailwind.css';

import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';

import 'animate.css/animate.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(
  faXing,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGraduationCap,
  faCalendar,
  faUniversity,
  faMapMarkerAlt,
  faEnvelope,
  faUserGraduate,
  faIndustry
);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(PerfectScrollbar);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
