import Vue from 'vue';
import Buefy from 'buefy';

import './assets/app.scss';
import App from './App.vue';
import plugin from './index';
import {buefyConfig} from './buefy-config';

Vue.use(Buefy, buefyConfig);
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
