import Vue from "vue";
import VueSocketio from "vue-socket.io-extended";
import io from "socket.io-client";
import "reset-css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const socket = io(
  "http://ad-backend.fqs3taypzi.ap-southeast-1.elasticbeanstalk.com/screen"
);

Vue.use(VueSocketio, socket, { store });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
