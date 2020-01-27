<template>
	<bsg-section
		class="select-section"
		title="Selects"
		:open="open"
	>
		<bsg-subsection title="Select Sizes">
			<div class="select-section__row has-label-capitalized">
				<b-field
					v-for="(inputSizeKey, inputSizeIndex) in inputSizes"
					:key="inputSizeIndex"
					:label="`${inputSizeKey} Select`"
					message="Test message text"
				>
					<b-select
						placeholder="Select a word"
						:rounded="preferRounded"
					>
						<option
							v-for="(option, optionIndex) in selectOptions"
							:key="optionIndex"
							:value="option"
						>
							{{ option }}
						</option>
					</b-select>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Semantic Selects Types">
			<div class="select-section__row has-label-capitalized">
				<b-field
					v-for="(fieldTypeKey, fieldTypeIndex) in fieldTypes"
					:key="fieldTypeIndex"
					:label="`${fieldTypeKey} Select`"
					:type="`is-${fieldTypeKey}`"
					message="Test message text"
				>
					<b-select
						placeholder="Select a word"
						:rounded="preferRounded"
					>
						<option
							v-for="(option, optionIndex) in selectOptions"
							:key="optionIndex"
							:value="option"
						>
							{{ option }}
						</option>
					</b-select>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Hovered Selects">
			<div class="select-section__row has-label-capitalized">
				<b-field
					v-for="(fieldTypeKey, fieldTypeIndex) in fieldTypes"
					:key="fieldTypeIndex"
					:label="`${fieldTypeKey} Select`"
					:type="`is-${fieldTypeKey}`"
					message="Test message text"
				>
					<div class="control">
						<span :class="`select is-${fieldTypeKey} is-hovered ${preferRounded ? 'is-rounded' : ''}`">
							<select class="is-hovered">
								<option
									v-for="(option, optionIndex) in selectOptions"
									:key="optionIndex"
									:value="option"
								>
									{{ option }}
								</option>
							</select>
						</span>
					</div>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Focused Selects">
			<div class="select-section__row has-label-capitalized">
				<b-field
					v-for="(fieldTypeKey, fieldTypeIndex) in fieldTypes"
					:key="fieldTypeIndex"
					:label="`${fieldTypeKey} Select`"
					:type="`is-${fieldTypeKey}`"
					message="Test message text"
				>
					<div class="control">
						<div :class="`select is-${fieldTypeKey} ${preferRounded ? 'is-rounded' : ''}`">
							<select class="is-focused">
								<option
									v-for="(option, optionIndex) in selectOptions"
									:key="optionIndex"
									:value="option"
								>
									{{ option }}
								</option>
							</select>
						</div>
					</div>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Disabled Selects">
			<div class="select-section__row has-label-capitalized">
				<b-field
					v-for="(fieldTypeKey, fieldTypeIndex) in fieldTypes"
					:key="fieldTypeIndex"
					:label="`${fieldTypeKey} Select`"
					:type="`is-${fieldTypeKey}`"
					message="Test message text"
				>
					<b-select
						placeholder="Select a word"
						:rounded="preferRounded"
						disabled
					>
						<option
							v-for="(option, optionIndex) in selectOptions"
							:key="optionIndex"
							:value="option"
						>
							{{ option }}
						</option>
					</b-select>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection
			:title="`${preferRounded ? 'Square' : 'Rounded' } Selects`"
		>
			<div class="select-section__row has-label-capitalized">
				<b-field
					v-for="(fieldTypeKey, fieldTypeIndex) in fieldTypes"
					:key="fieldTypeIndex"
					:label="`${fieldTypeKey} Field`"
					:type="`is-${fieldTypeKey}`"
					message="Test message text"
				>
					<b-select
						placeholder="Select a word"
						:rounded="!preferRounded"
					>
						<option
							v-for="(option, optionIndex) in selectOptions"
							:key="optionIndex"
							:value="option"
						>
							{{ option }}
						</option>
					</b-select>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Loading Selects">
			<div class="select-section__row has-label-capitalized">
				<b-field
					v-for="(fieldTypeKey, fieldTypeIndex) in fieldTypes"
					:key="fieldTypeIndex"
					:label="`${fieldTypeKey} Select`"
					:type="`is-${fieldTypeKey}`"
					message="Test message text"
				>
					<b-select
						placeholder="Select a word"
						:rounded="preferRounded"
						loading
					>
						<option
							v-for="(option, optionIndex) in selectOptions"
							:key="optionIndex"
							:value="option"
						>
							{{ option }}
						</option>
					</b-select>
				</b-field>
			</div>
		</bsg-subsection>
	</bsg-section>
</template>

<script>
import BsgSection from './BsgSection.vue';
import BsgSubsection from './BsgSubsection.vue';
import { DEFAULT_FIELD_TYPES, DEFAULT_INPUT_SIZES } from '../constants';

export default {
	name: 'SelectSection',
	components: {
		BsgSection,
		BsgSubsection,
	},
	props: {
		inputSizes: {
			type: Array,
			default: () => DEFAULT_INPUT_SIZES,
		},
		fieldTypes: {
			type: Array,
			default: () => DEFAULT_FIELD_TYPES,
		},
		preferRounded: {
			type: Boolean,
			default: false,
		},
		open: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			selectOptions: [
				'undecipherable',
				'stuccoed',
				'questioned',
				'abhorrent',
				'vigilant',
				'comprising',
				'old-time',
				'monstrous',
			],
		};
	},
};
</script>

<style lang="scss" scoped>
	.select-section {
		&__row {
			$gap:2rem;
			display:flex;
			flex-direction:row;
			flex-wrap:wrap;

			> * {
				flex:0 0 auto;
				margin:0 $gap $gap 0;
			}
		}

		.has-label-capitalized {
			::v-deep {
				.label {
					text-transform: capitalize;
				}
			}
		}
	}
</style>
