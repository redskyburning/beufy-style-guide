<template>
	<div class="bsg-subsection">
		<h2 class="bsg-subsection__title subtitle is-4"
		    v-if="title">{{ title }}</h2>
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
			},
		},
	});
</script>

<style lang="scss">
	@import '../assets/scss/includes';

	.bsg-subsection {
		&__title {
			//border-bottom:3px solid $grey-dark;
			//line-height:2em;
		}

		& + & {
			margin-top:$spacer;
		}
	}
</style>
