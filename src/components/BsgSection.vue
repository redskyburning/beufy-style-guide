<template>
	<section class="bsg-section"
	         :class="{ 'is-inverted' : this.inverted }">
		<div class="container">
			<b-collapse class="card"
			            :open="open">
				<div
					slot="trigger"
					slot-scope="props"
					class="card-header"
					role="button">
					<div class="card-header-title">
						<h1 class="title is-4">{{ title }}</h1>
					</div>
					<a class="card-header-icon"
					   v-show="props.open">
						<b-icon
							pack="fas"
							icon="minus">
						</b-icon>
					</a>
					<a class="card-header-icon"
					   v-show="!props.open">
						<b-icon
							pack="fas"
							icon="plus">
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
				default: false,
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

		&.is-inverted &__body {
			background-color:$grey-dark;

			.title,
			.subtitle {
				color:$white;
			}
		}
	}
</style>
