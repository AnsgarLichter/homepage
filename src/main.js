import { createApp } from "vue";

import App from "@/App.vue";

import i18n from "@/i18n";
import FontAwesomeIcon from "@/fontAwesomeIcons";
import router from "@/router/router";

import PerfectScrollbar from 'vue3-perfect-scrollbar';

import { initializeScrollSpy } from "./scrollspy/CreateScrollSpy";

import "@/index.css";

import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(i18n);
app.use(PerfectScrollbar);

initializeScrollSpy(app);

app.mount("#app");
