<template>
	<v-container fluid>
		<v-card
			class="px-2"
			height="85vh"
			color="#1E1E2E"
			dark
		>
			<v-row
				class="pt-2 px-2 rounded"
				style="background-color: #25263d"
				no-gutters
			>
				<v-col cols="5">
					<v-text-field
						v-model="record.concepto"
						label="Concepto"
						outlined
						dense
					></v-text-field>
				</v-col>
				<v-col cols="3">
					<v-text-field
						class="ml-2"
						v-model="record.fecha"
						type="date"
						outlined
						dense
					></v-text-field>
				</v-col>
				<v-col cols="2">
					<v-text-field
						class="ml-2"
						readonly
						label="Total (S/.)"
						v-model="total"
						outlined
						dense
						suffix="soles"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                    
					<v-btn  class="btn ml-2" @click="guardarIngreso">Guardar</v-btn>
				</v-col>
			</v-row>
			<v-row class="px-2">
				<v-col
					cols="4"
					class="rounded"
					style="background-color: #25263d"
				>
					<v-text-field
						v-model="detail.producto"
						outlined
						dense
						label="producto"
					></v-text-field>
					<div class="d-flex">
						<v-text-field
							v-model="detail.cantidad"
							outlined
							dense
							label="cantidad"
						></v-text-field>
						<v-text-field
							v-model="detail.precio_unitario"
							class="ml-2"
							outlined
							dense
							label="precio"
                            ></v-text-field>
                        </div>
                        <div class="d-flex">
                            <v-btn
							class="btn"
							depressed
							@click="agregarProducto"
							>Agregar</v-btn
						>
					</div>
				</v-col>
				<v-col cols="8">
					<v-data-table
						:headers="headers"
						:items="records"
						:items-per-page="5"
						style="background-color: #25263d"
					>
						<template v-slot:[`item.actions`]="{ item }">
							<v-btn
								depressed
								small
								class="btn"
							>
								<v-icon> mdi-pencil </v-icon>
							</v-btn>
						</template>
					</v-data-table>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<style scoped>
	.btn {
		background-color: #2b2c44;
		color: #21bf73;
		border-radius: 10px;
		min-width: 100px;
		justify-content: center;
	}
</style>

<script>
	export default {
		data() {
			return {
                //detalles
				headers: [
					{ text: "producto", value: "producto" },
					{ text: "cantidad", value: "cantidad" },
					{ text: "Precio", value: "precio_unitario" },
					{ text: "Subtotal", value: "subtotal" },
					{ text: "opciones", value: "actions" },
				],
				records: [],
				detail: {},
                //cabecera
				record: {},
				total: 0,
			};
		},

		methods: {
            cleanForm(){
                this.detail = {};
            },
			agregarProducto() {
				let total = this.total;
				let subtotal = parseFloat(this.detail.cantidad * this.detail.precio_unitario);
				total += subtotal;
				let data = {
					...this.detail,
					subtotal,
				};
				this.records.push(data);
				this.total = total;
                this.cleanForm();
			},
            async guardarIngreso(){
                let data = {
                    ...this.record,
                    total: this.total,
                    details: [...this.records]
                }

                let response = await this.$store.dispatch('Ingresos/create', data);
                alert(response.mensaje);
                if(response.mensaje){
                    this.$router.push('/ingresos')
                }

            }
		},

		async created() {},
	};
</script>
