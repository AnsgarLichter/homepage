import { createApp } from "vue";

import App from "@/App.vue";

import i18n from "@/i18n";
import FontAwesomeIcon from "@/fontAwesomeIcons";
import router from "@/router/router";

import { initializeScrollSpy } from "./scrollspy/CreateScrollSpy";

import "@/index.css";
import "@/scrollbar.css";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(i18n);

initializeScrollSpy(app);

app.mount("#app");
