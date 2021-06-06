import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import vuetify from './plugins/vuetify';
import sparkles from './plugins/sparkles'
import VueAnimateOnScroll from 'vue-animate-onscroll'


Vue.config.productionTip = false;

Vue.use(VueAnimateOnScroll)
Vue.use(sparkles)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
