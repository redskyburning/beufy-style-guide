<template>
	<div class="buefy-style-guide">
		style guide
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Prop,
		Vue,
	} from 'vue-property-decorator';

	@Component
	export default class BuefyStyleGuide extends Vue {
		@Prop() private msg!: string;
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
       lang="scss">
	.buefy-style-guide {

	}
</style>
