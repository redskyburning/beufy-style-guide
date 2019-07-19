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
			<bsg-section title="Tags" open>
				<bsg-subsection title="Tags Sizes">
					<div class="tags">
						<b-tag v-for="(tagSizeKey, tagSizeIndex) in tagSizes"
						          :rounded="preferRounded"
						          :key="tagSizeIndex"
						          :type="`is-${tagTypes[tagSizeIndex]}`"
						          :size="`is-${tagSizeKey}`"
						>
							{{ tagSizeKey }} Tag
						</b-tag>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Semantic Tags">
					<div class="tags">
						<b-tag v-for="(tagTypeKey, tagTypeIndex) in tagTypes"
						          :rounded="preferRounded"
						          :key="tagTypeIndex"
						          :type="`is-${tagTypeKey}`">
							{{ tagTypeKey }} Tag
						</b-tag>
					</div>
				</bsg-subsection>

				<bsg-subsection :title="`${preferRounded ? 'Squared' : 'Rounded'} Tags`">
					<div class="tags">
						<b-tag v-for="(tagTypeKey, tagTypeIndex) in tagTypes"
						          :rounded="!preferRounded"
						          :key="tagTypeIndex"
						          :type="`is-${tagTypeKey}`">
							{{ tagTypeKey }} Tag
						</b-tag>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Closeable Tags">
					<div class="tags">
						<b-tag v-for="(tagTypeKey, tagTypeIndex) in tagTypes"
						       :rounded="preferRounded"
						       :key="tagTypeIndex"
						       :type="`is-${tagTypeKey}`"
						       v-if="tagState[tagTypeIndex]"
						       @close="closeTab(tagTypeIndex)"
						       closable
						>
							{{ tagTypeKey }} Tag {{ tagState[tagTypeIndex] }}
						</b-tag>
					</div>
				</bsg-subsection>

				<bsg-subsection title="Attached Closeable Tags">
					<div class="field is-grouped is-grouped-multiline">
						<div class="control"
						     v-for="(tagTypeKey, tagTypeIndex) in tagTypes"
						     :key="tagTypeIndex"
						     v-if="attachedTagState[tagTypeIndex]">
							<b-tag :rounded="preferRounded"
							       :type="`is-${tagTypeKey}`"
							       closable
							       @close="closeAttachedTab(tagTypeIndex)"
							       attached
							>
								{{ tagTypeKey }} Tag
							</b-tag>
						</div>
					</div>
				</bsg-subsection>
			</bsg-section>

			<bsg-section title="Content">
				<div class="content">
					<h1>H1: I say that we approached those sprawling and incomplete obstructions slowly and reluctantly.</h1>
					<p>Would to Heaven we had never approached them at all, but had run back at top speed out of that blasphemous tunnel with the greasily smooth floors and the degenerate murals aping and mocking the things they had superseded—run back, before we had seen what we did see, and before our minds were burned with something which will never let us breathe easily again!</p>

					<h2>H2: Both of our torches were turned on the prostrate objects, so that we soon realized the dominant factor in their incompleteness.</h2>
					<p><strong>Mauled, </strong> <em>compressed, </em> <strong><em>twisted, </em></strong> and <a href="#">ruptured as they were,</a> their chief common injury was total decapitation. <a href="#"><strong>From each one </strong>the <em>tentacled starfish-head</em> had been removed; <strong><em>and as we drew near</em></strong> we saw that</a> the manner of removal looked more like some hellish tearing or suction than like any ordinary form of cleavage.</p>
					<p>Their noisome <code>dark-green ichor</code> formed a large, spreading pool; but its stench was half overshadowed by the newer and stranger stench, here more pungent than at any other point along our route. Only when we had come very close to the sprawling obstructions could we trace that second, unexplainable fetor to any immediate source—and the instant we did so Danforth, remembering certain very vivid sculptures of the Old Ones' history in the Permian Age one hundred and fifty million years ago, gave vent to a nerve-tortured cry which echoed hysterically through that vaulted and archaic passage with the evil, palimpsest carvings.</p>

					<h3>H3: I came only just short of echoing his cry myself</h3>
					<p>For I had seen those primal sculptures, too, and had shudderingly admired the way the nameless artist had suggested that hideous slime coating found on certain incomplete and prostrate Old Ones—those whom the frightful Shoggoths had characteristically slain and sucked to a ghastly headlessness in the great war of re-subjugation. They were infamous, nightmare sculptures even when telling of age-old, bygone things; for Shoggoths and their work ought not to be seen by human beings or portrayed by any beings.</p>
					<blockquote>The mad author of the Necronomicon had nervously tried to swear that none had been bred on this planet, and that only drugged dreamers had even conceived them.</blockquote>
					<p>Formless protoplasm able to mock and reflect all forms and organs and processes—viscous agglutinations of bubbling cells—rubbery fifteen-foot spheroids infinitely plastic and ductile—slaves of suggestion, builders of cities—more and more sullen, more and more intelligent, more and more amphibious, more and more imitative! Great God! What madness made even those blasphemous Old Ones willing to use and carve such things?</p>

					<h4>H4: And now, when Danforth and I saw the freshly glistening and reflectively iridescent black slime</h4>
					<p>Which clung thickly to those headless bodies and stank obscenely with that new, unknown odor whose cause only a diseased fancy could envisage—clung to those bodies and sparkled less voluminously on a smooth part of the accursedly resculptured wall in a series of grouped dots—we understood the quality of cosmic fear to its uttermost depths.</p>
					<h5>H5: It was not fear of those four missing others—for all too well did we suspect they would do no harm again.</h5>
					<p>Poor devils! After all, they were not evil things of their kind. They were the men of another age and another order of being.</p>
					<ul>
						<li>Nature had played a hellish jest</li>
						<li>on them—as it will on any others</li>
						<li>that human madness, callousness, or cruelty may hereafter dig up in that hideously dead or sleeping polar waste and this was their tragic homecoming.</li>
					</ul>
					<p>They had not been even savages—for what indeed had they done?</p>
					<ol>
						<li>That awful awakening in the cold of an unknown</li>
						<li>epoch—perhaps an attack by the furry,</li>
						<li>frantically barking quadrupeds,</li>
						<li>and a dazed defense against them and the equally frantic white simians with the queer wrappings and paraphernalia . . . poor Lake, poor Gedney . . . and poor Old Ones!</li>
					</ol>
					<h6>H6: Scientists to the last—what had they done that we would not have done in their place?</h6>
					<p>God, what intelligence and persistence! What a facing of the incredible, just as those carven kinsmen and forbears had faced things only a little less incredible! Radiates, vegetables, monstrosities, star-spawn—whatever they had been, they were men!</p>

					<pre>
They had crossed the icy peaks on whose templed slopes
they had once worshipped and roamed among the tree-ferns.
They had found their dead city brooding under its curse, and had read its carven latter days as we had done.</pre>
					<p>They had tried to reach their living fellows in fabled depths of blackness they had never seen—and what had they found?</p>
					<hr />
					<p>All this flashed in unison through the thoughts of Danforth and me as we looked from those headless, slime-coated shapes to the loathsome palimpsest sculptures and the diabolical dot-groups of fresh slime on the wall beside them—looked and understood what must have triumphed and survived down there in the Cyclopean water-city of that nighted, penguin-fringed abyss, whence even now a sinister curling mist had begun to belch pallidly as if in answer to Danforth's hysterical scream.</p>
				</div>
			</bsg-section>

			<bsg-section title="Titles">
				<bsg-subsection>
					<h1 v-for="(titleSize, titleI) in titleSizes"
					    :key="titleI"
					    :class="`title is-${titleSize}`">Title {{ titleSize }}</h1>
				</bsg-subsection>
				<bsg-subsection>
					<h1 v-for="(titleSize, titleI) in titleSizes"
					    :key="titleI"
					    :class="`subtitle is-${titleSize}`">Subtitle {{ titleSize }}</h1>
				</bsg-subsection>
				<bsg-subsection>
					<div class="content"
					     v-for="(titleSize, titleI) in titleSizes.slice(0, (titlePairOffset * -1))"
					     :key="titleI">
						<h1 :class="`title is-${titleSize}`">Title {{ titleSize }}</h1>
						<h1 :class="`subtitle is-${titleSize + titlePairOffset}`">Subtitle {{ titleSize + titlePairOffset }}</h1>
					</div>
				</bsg-subsection>
			</bsg-section>

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
		DEFAULT_TAG_TYPES,
		DEFAULT_TITLE_SIZES,
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
				titlePairOffset: 2,
				tagState: Array(this.tagTypes.length).fill(true),
				attachedTagState: Array(this.tagTypes.length).fill(true),
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
			titleSizes: {
				type: Array,
				default: () => DEFAULT_TITLE_SIZES,
			},
			tagTypes: {
				type: Array,
				default: () => DEFAULT_TAG_TYPES,
			},
			tagSizes: {
				type: Array,
				default: () => DEFAULT_BUTTON_SIZES,
			},
		},
		methods: {
			getIconCode(index: number) {
				return this.buttonIcons[index % this.buttonIcons.length];
			},
			closeTab(index: number) {
				this.$set(this.tagState, index, false);
			},
			closeAttachedTab(index: number) {
				this.$set(this.attachedTagState, index, false);
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

		.button,
		.tag {
			text-transform: capitalize;
		}

		.content {
			max-width:$body-size * 43;
			margin:0 auto;
		}
	}
</style>
