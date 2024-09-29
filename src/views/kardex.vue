<template>
	<v-container>
		<v-card
			height="85vh"
			color="#1E1E2E"
			dark
			flat
		>
    <v-row class="mb-2">
			<v-card-subtitle>Movimientos > kardex</v-card-subtitle>
      <v-spacer></v-spacer>
			<v-card-subtitle>Saldo Total: 3000</v-card-subtitle>
    </v-row>
			<v-toolbar
				class="mx-1"
				flat
				color="#25263d"
				rounded=""
			>
				<v-row
					class="mt-2"
					justify="space-between"
				>
					<v-col cols="3">
						<v-text-field
							append-outer-icon="mdi-magnify"
							type="date"
							outlined
							dense
						></v-text-field>
					</v-col>

				</v-row>
			</v-toolbar>

			<v-card
				class="ma-1 pa-2"
				color="#25263d"
			>
				<v-data-table
					:headers="headers"
					:items="records"
					:items-per-page="5"
					style="background-color: #25263d"
				>
					<template v-slot:[`item.actions`]="{ item }">
						<v-btn depressed x-small
							class="btn"
						>
							<v-icon> mdi-eye </v-icon>
						</v-btn>
					</template>
				</v-data-table>
			</v-card>
		</v-card>
	</v-container>
</template>
<style scoped>
	.btn {
		background-color: #2b2c44;
		color: #fd9c1a;
		border-radius: 10px;
		min-width: 100px;
		justify-content: center;
	}
</style>

<script>
	export default {
		data() {
			return {
				headers: [
					{ text: "Fecha", value: "fecha" },
					{ text: "Producto", value: "producto" },
					{ text: "Cantidad Ingreso", value: "cantidad_ingreso" },
					{ text: "Costo Ingreso", value: "costo_ingreso" },
					{ text: "Total Ingreso", value: "total_ingreso" },
					{ text: "Cantidad Gasto", value: "cantidad_gasto" },
					{ text: "Costo Gasto", value: "costo_gasto" },
					{ text: "Total Gasto", value: "total_gasto" },
					{ text: "Saldo", value: "total_acumulado" },
				],
				records: [],
			};
		},

		methods: {
			async getData() {
				const data = await this.$store.dispatch("kardex/all");
				this.records = data;
			},
		},

		async created() {
			this.getData();
		},
	};
</script>
