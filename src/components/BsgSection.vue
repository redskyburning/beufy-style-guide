<template>
	<section class="bsg-section"
	         :class="{ 'is-inverted' : this.inverted }">
		<div class="container">
			<b-collapse class="card" aria-id="contentIdForA11y3">
				<div
					slot="trigger"
					slot-scope="props"
					class="card-header"
					role="button">
					<div class="card-header-title">
						{{ title }}
					</div>
					<a class="card-header-icon">
						<b-icon
							pack="fas"
							:icon="props.open ? 'caret-down' : 'caret-up'">
						</b-icon>
					</a>
				</div>
				<div class="card-content">
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

		&.is-inverted {
			.title,
			.subtitle {
				color:$white;
			}

			.card-content {
				background-color:$grey-dark;
			}
		}
	}
</style>
