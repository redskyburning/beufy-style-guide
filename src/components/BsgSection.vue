<template>
	<section
		class="bsg-section section"
		:class="{ 'is-inverted' : inverted }"
	>
		<div class="container">
			<b-collapse
				class="card"
				:open="open"
			>
				<div
					slot="trigger"
					slot-scope="props"
					class="card-header"
					role="button"
				>
					<div class="card-header-title">
						<h1 class="title is-4">
							{{ title }}
						</h1>
					</div>
					<a
						v-show="props.open"
						class="card-header-icon"
					>
						<b-icon
							pack="fas"
							icon="minus"
						/>
					</a>
					<a
						v-show="!props.open"
						class="card-header-icon"
					>
						<b-icon
							pack="fas"
							icon="plus"
						/>
					</a>
				</div>
				<div class="card-content bsg-section__body">
					<slot />
				</div>
			</b-collapse>
		</div>
	</section>
</template>

<script>
export default {
	name: 'BsgSection',
	props: {
		title: {
			type: String,
			required: true,
		},
		open: {
			type: Boolean,
			default: false,
		},
		inverted: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
		};
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
