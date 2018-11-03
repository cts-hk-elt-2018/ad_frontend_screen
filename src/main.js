import Vue from "vue";
import VueSocketio from "vue-socket.io-extended";
import io from "socket.io-client";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const socket = io("http://localhost:8081/screen");

Vue.use(VueSocketio, socket, { store });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
