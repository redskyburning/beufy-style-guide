<template>
	<div class="dialog-modal">
		<bsg-subsection title="Alert Dialogs">
			<div class="buttons">
				<b-button
					v-for="(dialogSize, sizeIndex) in dialogSizes"
					:key="sizeIndex"
					:type="getTypeString(sizeIndex)"
					@click="openAlert(`is-${dialogSize}`, getTypeString(sizeIndex))"
				>{{ dialogSize }} Alert</b-button>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Confirm Dialogs">
			<div class="buttons">
				<b-button
					v-for="(dialogSize, sizeIndex) in dialogSizes"
					:key="sizeIndex"
					:type="getTypeString(sizeIndex)"
					@click="openConfirm(`is-${dialogSize}`, getTypeString(sizeIndex))"
				>{{ dialogSize }} Confirm</b-button>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Prompt Dialogs">
			<div class="buttons">
				<b-button
					v-for="(dialogSize, sizeIndex) in dialogSizes"
					:key="sizeIndex"
					:type="getTypeString(sizeIndex)"
					@click="openPrompt(`is-${dialogSize}`, getTypeString(sizeIndex))"
				>{{ dialogSize }} Confirm</b-button>
			</div>
		</bsg-subsection>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	import {
		CORE_SEMANTIC_TYPES,
		DEFAULT_DIALOG_SIZES,
	} from '@/constants';
	import BsgSubsection from './BsgSubsection.vue';

	export default Vue.extend({
		name: "DialogModal",
		components: {
			BsgSubsection,
		},
		data() {
			return {
			};
		},
		props: {
			dialogSizes : {
				type : Array,
				default: () => DEFAULT_DIALOG_SIZES,
			},
			types  : {
				type   : Array,
				default: () => CORE_SEMANTIC_TYPES,
			},
		},
		methods: {
			getTypeString(index:number) {
			 return `is-${this.types[index]}`;
			},
			openAlert(dialogSize: 'is-small' | 'is-medium' | 'is-large', dialogType: string) {
				this.$dialog.alert({
					title: 'Grotesquely three-fourths luxuriant',
					message: 'Circumstance traversed reluctant antarctic foothills descending pertaining longitude immediate. Sculptured potentially organisms directions remembered disturbing disturbingly evidently photograph. Longitude suggestions encountered investigation whispered habitually exaggerations labyrinth sculptures.',
					confirmText: 'Uh... ok?',
					type: dialogType,
					size: dialogSize,
				})
			},
			openConfirm(dialogSize: 'is-small' | 'is-medium' | 'is-large', dialogType: string) {
				this.$dialog.confirm({
					title: 'Inconceivable historical coast-lines',
					message: 'Constantine everywhere undoubtedly vegetation omnipresent recoiling residence, ziggurats residence? Buildings photograph happening preparations intervening scattered suggestions, neighboring apparatus?',
					confirmText: 'Uh... ok?',
					cancelText: 'Uh... no?',
					type: dialogType,
					size: dialogSize,
					onConfirm: () => this.$toast.open('User confirmed'),
					onCancel: () => this.$toast.open('User cancelled'),
				})
			},
			openPrompt(dialogSize: 'is-small' | 'is-medium' | 'is-large', dialogType: string) {
				this.$dialog.prompt({
					title: 'Somebody\'s difficult shoggoths',
					message: 'Sculptured potentially organisms directions remembered disturbing disturbingly evidently photograph. Longitude suggestions encountered investigation whispered habitually exaggerations labyrinth sculptures.',
					confirmText: 'Uh... ok?',
					cancelText: 'Uh... no?',
					type: dialogType,
					size: dialogSize,
					onConfirm: (value: string) => this.$toast.open(`User says: ${value}`),
					onCancel: () => this.$toast.open('User cancelled'),
				})
			},
		},
	});

	// Thereafter grotesquely three-fourths luxuriant imitation somebody's identified difficult shoggoths. Circumstance traversed reluctant antarctic foothills descending pertaining longitude immediate. Sculptured potentially organisms directions remembered disturbing disturbingly evidently photograph. Longitude suggestions encountered investigation whispered habitually exaggerations labyrinth sculptures. Constantine everywhere undoubtedly vegetation omnipresent recoiling residence, ziggurats residence? Buildings photograph happening preparations intervening scattered suggestions, neighboring apparatus? Predecessors inconceivable historical coast-lines encroachments borchgrevingk, corridors estimates certainly!
</script>

<style lang="scss" scoped>
	@import '../assets/scss/includes';

	.dialog-modal {

	}
</style>
