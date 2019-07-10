<template>
	<div class="buefy-style-guide">
		<header class="hero is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">{{ title }}</h1>
					<h1 class="subtitle">{{ subtitle }}</h1>
				</div>
			</div>
		</header>
		<main>
			<section class="buefy-style-guide__section">
				<div class="container">
					<header class="buefy-style-guide__section-header">
						<h1 class="title">Buttons</h1>
					</header>
					<div class="buefy-style-guide__section-body">
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Semantic Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          :rounded="preferRounded"
								          :key="buttonTypeIndex"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }} Button
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Hovered Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          class="is-hovered"
								          :key="buttonTypeIndex"
								          :rounded="preferRounded"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Focused Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          class="is-focused"
								          :key="buttonTypeIndex"
								          :rounded="preferRounded"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Active Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          class="is-active"
								          :key="buttonTypeIndex"
								          :rounded="preferRounded"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Disabled Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          disabled
								          :rounded="preferRounded"
								          :key="buttonTypeIndex"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Button Sizes</h2>
							<div class="buttons">
								<b-button v-for="(buttonSizeKey, buttonSizeIndex) in buttonSizes"
								          type="is-primary"
								          :rounded="preferRounded"
								          :key="buttonSizeIndex"
								          :size="`is-${buttonSizeKey}`">
									{{ buttonSizeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Icon Buttons</h2>
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
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Outlined Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          outlined
								          :rounded="preferRounded"
								          :key="buttonTypeIndex"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Focused Outlined Buttons</h2>
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
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">{{ preferRounded ? 'Squared' : 'Rounded' }} Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          :rounded="!preferRounded"
								          :key="buttonTypeIndex"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Loading Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          loading
								          :rounded="preferRounded"
								          :key="buttonTypeIndex"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="buefy-style-guide__section">
				<div class="container">
					<header class="buefy-style-guide__section-header">
						<h1 class="title">Inverted Buttons</h1>
					</header>
					<div class="buefy-style-guide__section-body">
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Semantic Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          inverted
								          :rounded="preferRounded"
								          :key="buttonTypeIndex"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">Disabled Buttons</h2>
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
						</div>
						<div class="buefy-style-guide__subsection">
							<h2 class="subtitle">{{ preferRounded ? 'Squared' : 'Rounded' }} Buttons</h2>
							<div class="buttons">
								<b-button v-for="(buttonTypeKey, buttonTypeIndex) in buttonTypes"
								          inverted
								          :rounded="!preferRounded"
								          :key="buttonTypeIndex"
								          :type="`is-${buttonTypeKey}`">
									{{ buttonTypeKey }}
								</b-button>
							</div>
						</div>
					</div>
				</div>
			</section>
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

	export default Vue.extend({
		name: "BuefyStyleGuide",
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
				default: DEFAULT_BUTTON_TYPES,
			},
			buttonSizes: {
				type: Array,
				default: DEFAULT_BUTTON_SIZES,
			},
			buttonIcons: {
				type: Array,
				default: DEFAULT_BUTTON_ICONS,
			},
		},
		methods: {
			getIconCode(index: number) {
				return this.buttonIcons[index % this.buttonIcons.length];
			},
		},
	});
</script>

<style lang="scss" src="./BuefyStyleGuide.scss"></style>
