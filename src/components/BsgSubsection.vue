<template>
	<div class="bsg-subsection">
		<h2 class="subtitle">{{ title }}</h2>
		<div class="bsg-subsection__body">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "BsgSubsection",
		data() {
			return {
			};
		},
		props: {
			title : {
				type: String,
				required: true,
			},
		},
	});
</script>

<style lang="scss">
	@import '../assets/scss/includes';

	.bsg-subsection {
		& + & {
			margin-top:$spacer;
		}
	}
</style>
