<template>
	<section class="bsg-section section"
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

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
	@import '../assets/includes';

	.bsg-section {
		padding-top:0;
		padding-bottom:0;

		& + & {
			margin-top:$spacer;
		}

		&.is-inverted &__body {
			background-color:$grey-dark;

			::v-deep {
				.title,
				.subtitle {
					color:$white;
				}
			}
		}
	}
</style>
