import Vue from 'vue'
import App from './App.vue'
import './plugins/fontawesome' //Misc font-awesome import Refer: https://www.npmjs.com/package/vue-cli-plugin-fontawesome

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
