import BuefyStyleGuide from './components/BuefyStyleGuide.vue';

const version = '__VERSION__';

const install = Vue => {
	Vue.component('buefy-style-guide', BuefyStyleGuide);
};

const plugin = {
	install,
	version,
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(plugin);
}
