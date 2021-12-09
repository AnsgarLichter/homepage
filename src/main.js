import { createApp } from 'vue';

import App from './App.vue';

import i18n from './i18n';
import FontAwesomeIcon from './fontAwesomeIcons';

import './index.css';


const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(i18n);

app.mount('#app');
