<template>
	<div class="buefy-style-guide">
		<header class="buefy-style-guide__header hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">{{ title }}</h1>
					<h1 class="subtitle">{{ subtitle }}</h1>
				</div>
			</div>
		</header>
		<main class="buefy-style-guide__body">
			<bsg-section title="Buttons">

				<bsg-subsection title="Semantic Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }} Button
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Hovered Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          class="is-hovered"
						          :key="buttonTypeIndex"
						          :rounded="preferRounded"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Focused Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          class="is-focused"
						          :key="buttonTypeIndex"
						          :rounded="preferRounded"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Active Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          class="is-active"
						          :key="buttonTypeIndex"
						          :rounded="preferRounded"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Disabled Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          disabled
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Button Sizes">
					<div class="buttons">
						<b-button v-for="(buttonSizeKey, buttonSizeIndex) in buttonSizes"
						          type="is-primary"
						          :rounded="preferRounded"
						          :key="buttonSizeIndex"
						          :size="`is-${buttonSizeKey}`">
							{{ buttonSizeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Icon Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          icon-pack="fas"
						          :icon-left="buttonTypeIndex % 2 === 0 ? getIconCode(buttonTypeIndex) : ''"
						          :icon-right="buttonTypeIndex % 2 !== 0 ? getIconCode(buttonTypeIndex) : ''"
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ getIconCode(buttonTypeIndex) }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Outlined Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          outlined
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Focused Outlined Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          class="is-focused"
						          outlined
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection :title="`${preferRounded ? 'Squared' : 'Rounded'} Buttons`">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          :rounded="!preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Loading Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          loading
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

			</bsg-section>
			<bsg-section title="Inverted Buttons" inverted>

				<bsg-subsection title="Semantic Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          inverted
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Disabled Buttons">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          disabled
						          inverted
						          :rounded="preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

				<bsg-subsection :title="`${preferRounded ? 'Squared' : 'Rounded'} Buttons`">
					<div class="buttons">
						<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
						          inverted
						          :rounded="!preferRounded"
						          :key="buttonTypeIndex"
						          :type="`is-${buttonTypeKey}`">
							{{ buttonTypeKey }}
						</b-button>
					</div>
				</bsg-subsection>

			</bsg-section>
		</main>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {
		DEFAULT_BUTTON_ICONS,
		DEFAULT_BUTTON_SIZES,
		DEFAULT_BUTTON_TYPES,
	} from '@/constants';

	import BsgSection from './BsgSection.vue';
	import BsgSubsection from './BsgSubsection.vue';

	export default Vue.extend({
		name: "BuefyStyleGuide",
		components: {
			BsgSection,
			BsgSubsection,
		},
		data() {
			return {
			};
		},
		props: {
			// Should rounded buttons be used as the standard button type?
			preferRounded: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: 'Buefy Style Guide',
			},
			subtitle: {
				type: String,
				default: 'You\'re looking good today',
			},
			buttonTypes: {
				type: Array,
				default: () => DEFAULT_BUTTON_TYPES,
			},
			buttonSizes: {
				type: Array,
				default: () => DEFAULT_BUTTON_SIZES,
			},
			buttonIcons: {
				type: Array,
				default: () => DEFAULT_BUTTON_ICONS,
			},
		},
		methods: {
			getIconCode(index: number) {
				return this.buttonIcons[index % this.buttonIcons.length];
			},
		},
	});
</script>

<style lang="scss">
	@import '../assets/scss/includes';

	.buefy-style-guide {
		&__body {
			padding:$spacer 0;
		}

		.button {
			text-transform: capitalize;
		}
	}
</style>
