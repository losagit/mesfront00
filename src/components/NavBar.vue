<template>
	<v-navigation-drawer
		absolute
		style="background-color: #1E1E2E;"
		app
	>
		<template v-slot:prepend>
			<v-list-item two-line dark>
				<v-list-item-avatar >
					<img src="https://randomuser.me/api/portraits/women/81.jpg" />
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>SMI</v-list-item-title>
					<v-list-item-subtitle>Administrador</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</template>

		<v-divider></v-divider>

		<v-list dense dark>
			<v-list-item
				v-for="item in items"
				:key="item.title"
				:to="item.route"
			>
				<v-list-item-icon >
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{ title: "Dashboard", icon: "mdi-view-dashboard", route:"/dashboard" },
					{ title: "Ingresos", icon: "mdi-point-of-sale", route:"/ingresos", }, 
					{ title: "Gastos", icon: "mdi-truck-outline", route:"/gastos" },
					{ title: "kardex", icon: "mdi-view-list", route:"/kardex" },
				],
			};
		},
	};
</script>
