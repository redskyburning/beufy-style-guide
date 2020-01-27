<template>
	<bsg-section
		class="form-section"
		title="Form"
		open
	>
		<bsg-subsection title="Input Sizes">
			<div class="has-label-capitalized">
				<b-field
					v-for="(inputSizeKey, inputSizeIndex) in inputSizes"
					:key="inputSizeIndex"
					:label="`${inputSizeKey} Input`"
					message="Test message text"
				>
					<b-input
						:size="`is-${inputSizeKey}`"
						placeholder="Email"
						type="email"
						icon-pack="fas"
						icon="envelope"
					/>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Semantic Field Types">
			<div class="has-label-capitalized">
				<b-field
					v-for="(fieldTypeKey, fieldTypeIndex) in fieldTypes"
					:key="fieldTypeIndex"
					:label="`${fieldTypeKey} Field`"
					:type="`is-${fieldTypeKey}`"
					message="Test message text"
				>
					<b-input
						placeholder="Email"
						type="email"
						icon-pack="fas"
						icon="envelope"
					/>
				</b-field>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Inputs">
			<b-field
				label="Basic Input"
				message="Clutch especially prepared"
			>
				<b-input
					type="text"
					value="Which hence ice-melting"
					maxlength="30"
				/>
			</b-field>

			<b-field label="Input with addon">
				<b-field>
					<b-input
						placeholder="Search..."
						type="search"
						icon="search"
					/>
					<p class="control">
						<button class="button is-primary">
							Search
						</button>
					</p>
				</b-field>
			</b-field>

			<b-field label="Expanded Input with addon">
				<b-field>
					<b-input
						placeholder="Search..."
						type="search"
						icon="search"
						expanded
					/>
					<p class="control">
						<button class="button is-primary">
							Search
						</button>
					</p>
				</b-field>
			</b-field>

			<b-field label="Input with addon dropdown">
				<b-field>
					<b-select placeholder="Currency">
						<option>$</option>
						<option>£</option>
						<option>€</option>
					</b-select>
					<b-input
						type="number"
						placeholder="0,00"
					/>
					<p class="control">
						<button class="button is-success">
							Transfer
						</button>
					</p>
				</b-field>
			</b-field>

			<b-field label="">
				<b-field grouped>
					<b-input placeholder="Search..." />
					<p class="control">
						<button class="button is-primary">
							Search
						</button>
					</p>
				</b-field>
			</b-field>

			<b-field grouped>
				<b-input
					placeholder="Search..."
					expanded
				/>
				<p class="control">
					<button class="button is-primary">
						Search
					</button>
				</p>
			</b-field>

			<hr>

			<b-field
				label="Input with label on border"
				label-position="on-border"
			>
				<b-input value="Years higher marine" />
			</b-field>
		</bsg-subsection>

		<bsg-subsection title="Horizontal Form">
			<div>
				<b-field
					horizontal
					label="Subject"
					type="is-danger"
					message="Please enter a subject"
				>
					<b-input
						name="subject"
						expanded
					/>
				</b-field>

				<b-field
					horizontal
					label="From"
				>
					<b-input
						name="name"
						placeholder="Name"
						expanded
					/>
					<b-input
						name="email"
						type="email"
						placeholder="nobody@nowhere.com"
						expanded
					/>
				</b-field>

				<b-field
					horizontal
					label="Topic"
				>
					<b-select placeholder="Select a topic">
						<option value="1">
							Bulma
						</option>
						<option value="2">
							Vue.js
						</option>
						<option value="3">
							Buefy
						</option>
					</b-select>
				</b-field>

				<b-field
					horizontal
					label="Message"
				>
					<b-input type="textarea" />
				</b-field>

				<b-field horizontal>
					<!-- Label left empty for spacing -->
					<p class="control">
						<button class="button is-primary">
							Send message
						</button>
					</p>
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
	name: 'DialogModal',
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
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
	.form-section {
		.has-label-capitalized {
			::v-deep {
				.label {
					text-transform: capitalize;
				}
			}
		}
	}
</style>
