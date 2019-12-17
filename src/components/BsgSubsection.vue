<template>
	<div class="bsg-subsection">
		<h2
			v-if="title"
			class="bsg-subsection__title subtitle is-4"
		>
			{{ title }}
		</h2>
		<div class="bsg-subsection__body">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'BsgSubsection',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss">
@import '../assets/includes';

.bsg-subsection {
	& + & {
		margin-top:$spacer;
	}
}
</style>
