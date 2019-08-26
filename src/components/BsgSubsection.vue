<template>
	<div class="bsg-subsection">
		<h2 class="bsg-subsection__title subtitle is-4"
			v-if="title">{{ title }}</h2>
		<div class="bsg-subsection__body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name : 'BsgSubsection',
	data() {
		return {};
	},
	props: {
		title: {
			type: String,
		},
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
