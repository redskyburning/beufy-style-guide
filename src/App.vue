<template>
	<div class="app">
		<buefy-style-guide></buefy-style-guide>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue,
	} from 'vue-property-decorator';
	import BuefyStyleGuide from './components/BuefyStyleGuide.vue';

	@Component({
		components: {
			BuefyStyleGuide,
		},
	})
	export default class App extends Vue {}
</script>

<style lang="scss">
	.app {
	}
</style>
