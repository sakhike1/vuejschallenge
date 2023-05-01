import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import "./utils/filter";
import './tailwind.css'

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const api = axios.create({
  baseURL:
    process.env.VUE_APP_API_URL !== undefined
      ? process.env.VUE_APP_API_URL
      : "https://restcountries.com/v2/",
});

//API call prototype variable
Vue.prototype.$http = api;

//Font awesome Icon setup


new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
