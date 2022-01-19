import { createApp } from "vue";

import App from "@/App.vue";

import i18n from "@/i18n";
import FontAwesomeIcon from "@/fontAwesomeIcons";
import router from "@/router/router";

import { initializeScrollSpy } from "./scrollspy/CreateScrollSpy";
import { useVisible } from "./directives/visible";

import "@/index.css";

import "@/scrollbar.css";

import 'animate.css';

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(i18n);

initializeScrollSpy(app);

useVisible(app);

app.mount("#app");
