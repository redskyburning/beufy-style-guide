<template>
	<section class="bsg-section"
	         :class="{ 'is-inverted' : this.inverted }">
		<div class="container">
			<b-collapse class="card">
				<div
					slot="trigger"
					slot-scope="props"
					class="card-header"
					role="button">
					<div class="card-header-title">
						<h1 class="title is-3">{{ title }}</h1>
					</div>
					<a class="card-header-icon">
						<b-icon
							size="is-large"
							pack="fas"
							:icon="props.open ? 'caret-down' : 'caret-up'">
						</b-icon>
					</a>
				</div>
				<div class="card-content bsg-section__body">
					<slot></slot>
				</div>
			</b-collapse>
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
			open : {
				type: Boolean,
				default: true,
			},
			inverted : {
				type: Boolean,
				default: false,
			},
		},
	});
</script>

<style lang="scss">
	@import '../assets/scss/includes';

	.bsg-section {
		& + & {
			margin-top:$spacer;
		}

		&__header {
			padding-bottom:$spacer / 4;
			margin-bottom:$spacer;
			border-bottom:3px solid black;
		}

		.card-header-title {
			//font-size:$size-3;
		}

		&.is-inverted &__body {
			background-color:$grey-dark;

			.title,
			.subtitle {
				color:$white;
			}
		}
	}
</style>
