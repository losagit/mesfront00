<template>
	<v-app-bar
		style="background-color: #1e1e2e"
		dense
		dark
		app
		elevation="1"
	>
		<v-app-bar-nav-icon></v-app-bar-nav-icon>

		<v-toolbar-title>Movimientos e inventario</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn
			:class="buttonClass"
			depressed
		>
			<v-icon left>mdi-account</v-icon>
			Johao Losa
		</v-btn>
	</v-app-bar>
</template>

<script>
	export default {
		computed: {
			buttonClass() {
				return {
					"status-button": true,
				};
			},
			iconClass() {
				return {
					"status-icon": true,
				};
			},
		},
	};
</script>

<style scoped>
	.status-button {
		background-color: #2b2c44;
		color: #fd9c1a; /* Default to pending color */
		border-radius: 10px;
		min-width: 100px;
		justify-content: center;
	}
</style>
