import Vue from 'vue';
import Buefy from 'buefy';

import '../src/assets/app.scss';
import App from '../src/App.vue';
import plugin from '../src/index';

Vue.use(Buefy);
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: h => h(App)
}).$mount('#app');
