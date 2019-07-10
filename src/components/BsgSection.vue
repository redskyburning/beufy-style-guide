<template>
	<section class="bsg-section">
		<div class="container">
			<header class="bsg-section__header">
				<h1 class="title">{{ title }}</h1>
			</header>
			<div class="bsg-section__body">
				<slot></slot>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "BsgSection",
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

	.bsg-section {
		margin:$spacer 0;
		padding:$spacer 0;

		&__header {
			padding-bottom:$spacer / 4;
			margin-bottom:$spacer;
			border-bottom:3px solid black;
		}
	}
</style>
