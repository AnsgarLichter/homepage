import { createApp } from "vue";

import App from "@/App.vue";

import i18n from '@/i18n';
import FontAwesomeIcon from '@/fontAwesomeIcons';
import router from "@/router/router";

import { registerScrollSpy } from "vue3-scroll-spy";

import '@/index.css';

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(i18n);

registerScrollSpy(app);

app.mount("#app");
