import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from '@formkit/vue'
import { axios } from "axios";
import '@formkit/themes/genesis'


import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(plugin, defaultConfig);
app.use(axios);
app.use(router);

app.mount("#app");
