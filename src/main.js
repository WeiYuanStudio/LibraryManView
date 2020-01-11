import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/fontawesome' //Misc font-awesome import Refer: https://www.npmjs.com/package/vue-cli-plugin-fontawesome
import './plugins/element' //Import element-ui

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount("#app");
