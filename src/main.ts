import { createApp } from "vue";

import App from "@/App.vue";

import { i18n } from "@/i18n";
import FontAwesomeIcon from "@/fontAwesomeIcons";
import router from "@/router/router";

import { useScrollSpy } from "./directives/scrollspy";
import { useVisible } from "./directives/visible";

import "@/index.css";

import "@/scrollbar.css";

import 'animate.css';

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(i18n);

useScrollSpy(app);

useVisible(app);

app.provide('selectorForScrollContainer', ".content");
app.mount("#app");
