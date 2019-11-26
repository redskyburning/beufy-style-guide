<template>
	<div class="dialog-modal">
		<bsg-subsection title="Alert Dialogs">
			<div class="buttons">
				<b-button
						v-for="(dialogSize, sizeIndex) in dialogSizes"
						:key="sizeIndex"
						:type="getTypeString(sizeIndex)"
						@click="openAlert(`is-${dialogSize}`, getTypeString(sizeIndex))"
				>{{ dialogSize }} Alert
				</b-button>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Confirm Dialogs">
			<div class="buttons">
				<b-button
						v-for="(dialogSize, sizeIndex) in dialogSizes"
						:key="sizeIndex"
						:type="getTypeString(sizeIndex)"
						@click="openConfirm(`is-${dialogSize}`, getTypeString(sizeIndex))"
				>{{ dialogSize }} Confirm
				</b-button>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Prompt Dialogs">
			<div class="buttons">
				<b-button
						v-for="(dialogSize, sizeIndex) in dialogSizes"
						:key="sizeIndex"
						:type="getTypeString(sizeIndex)"
						@click="openPrompt(`is-${dialogSize}`, getTypeString(sizeIndex))"
				>{{ dialogSize }} Confirm
				</b-button>
			</div>
		</bsg-subsection>

		<bsg-subsection title="Modal">
			<div class="buttons">
				<b-button
						type="is-primary"
						@click="imageModalActive = true"
				>
					Image Modal
				</b-button>
				<b-button
						type="is-success"
						@click="cardModalActive = true"
				>
					Card Modal
				</b-button>
			</div>
		</bsg-subsection>

		<b-modal :active.sync="imageModalActive"
		         :width="640"
		         scroll="keep">
			<div class="card">
				<div class="card-image">
					<figure class="image is-4by3">
						<img src="https://picsum.photos/1280/900"
						     alt="Image">
					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<figure class="image is-48x48">
								<img src="https://picsum.photos/48/48"
								     alt="Image">
							</figure>
						</div>
						<div class="media-content">
							<p class="title is-4">John Smith</p>
							<p class="subtitle is-6">@johnsmith</p>
						</div>
					</div>

					<div class="content">
						<p>Thereafter grotesquely three-fourths luxuriant imitation somebody's identified difficult shoggoths. Circumstance traversed reluctant antarctic foothills descending pertaining longitude immediate.</p>
					</div>
				</div>
			</div>
		</b-modal>

		<b-modal :active.sync="cardModalActive"
		         :width="640"
		         scroll="keep">
			<div class="card">
				<header class="modal-card-head">
					<p class="modal-card-title">Modal title</p>
					<button
						class="delete"
						aria-label="close"
						@click="cardModalActive = false"
					/>
				</header>
				<section class="modal-card-body">
					<p>Existence buildings including resembling sculptures grotesque, five-pointed revelations background! Crumbling preternatural toughness vegetables decorators massiveness, direction technique aeon-silent! Accentuate well-known architecture encountered five-pointedness shrinking apparently apertures knowledge. Notebooks projected monstrous mechanized trail-blazing protection principles omnipresent mountains. Complexity different sculpture replacement resolution outcropping occupations pictorial brainless. Accomplished elsewhere proceeded bas-reliefs independent horizontal relatively waterproof description. Topographical chronology enslavers containing consecutive rudimentary soapstones photographs potentially.</p>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success">Save changes</button>
					<button class="button">Cancel</button>
				</footer>
			</div>
		</b-modal>
	</div>
</template>

<script>
	import {
		CORE_SEMANTIC_TYPES,
		DEFAULT_DIALOG_SIZES,
	} from '../constants';
	import BsgSubsection from './BsgSubsection.vue';

	export default {
		name      : 'DialogModal',
		components: {
			BsgSubsection,
		},
		data() {
			return {
				imageModalActive: false,
				cardModalActive : false,
			};
		},
		props     : {
			dialogSizes: {
				type   : Array,
				default: () => DEFAULT_DIALOG_SIZES,
			},
			types      : {
				type   : Array,
				default: () => CORE_SEMANTIC_TYPES,
			},
		},
		methods   : {
			getTypeString(index) {
				return `is-${this.types[index]}`;
			},
			openAlert(dialogSize, dialogType) {
				this.$buefy.dialog.alert({
					title      : 'Grotesquely three-fourths luxuriant',
					message    : 'Circumstance traversed reluctant antarctic foothills descending pertaining longitude immediate. Sculptured potentially organisms directions remembered disturbing disturbingly evidently photograph. Longitude suggestions encountered investigation whispered habitually exaggerations labyrinth sculptures.',
					confirmText: 'Uh... ok?',
					type       : dialogType,
					size       : dialogSize,
				});
			},
			openConfirm(dialogSize, dialogType) {
				const confirm = this.$buefy.dialog.confirm({
					title      : 'Inconceivable historical coast-lines',
					message    : 'Constantine everywhere undoubtedly vegetation omnipresent recoiling residence, ziggurats residence? Buildings photograph happening preparations intervening scattered suggestions, neighboring apparatus?',
					confirmText: 'Uh... ok?',
					cancelText : 'Uh... no?',
					type       : dialogType,
					size       : dialogSize,
					onConfirm  : () => this.$toast.open('User confirmed'),
					onCancel   : () => this.$toast.open('User cancelled'),
				});
			},
			openPrompt(dialogSize, dialogType) {
				this.$buefy.dialog.prompt({
					title      : 'Somebody\'s difficult shoggoths',
					message    : 'Sculptured potentially organisms directions remembered disturbing disturbingly evidently photograph. Longitude suggestions encountered investigation whispered habitually exaggerations labyrinth sculptures.',
					confirmText: 'Uh... ok?',
					cancelText : 'Uh... no?',
					type       : dialogType,
					size       : dialogSize,
					onConfirm  : (value) => this.$toast.open(`User says: ${value}`),
					onCancel   : () => this.$toast.open('User cancelled'),
				});
			},
		},
	};
</script>

<style lang="scss"
       scoped>
	.dialog-modal {

	}
</style>
