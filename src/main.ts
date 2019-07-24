import Vue from 'vue';
import Buefy from 'buefy';

import './assets/scss/global.scss';
import App from './App.vue';
import {buefyConfig} from './buefy-config';

Vue.use(Buefy, buefyConfig);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
