import Vue from 'vue';
import Buefy from 'buefy';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './assets/app.scss';
import App from './App.vue';
import plugin from './index';
import { buefyConfig } from './buefy-config';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Buefy, buefyConfig);
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
