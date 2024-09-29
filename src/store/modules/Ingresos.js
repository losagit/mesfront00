import axios from "axios";
export default {
	namespaced: true,
	state: {
		ingresos: [],
		msg: "",
	},

	getters: {
		getIngresos: (state) => state.ingresos,
	},

	mutations: {
		GET_INGRESOS: (state, data) => {
			state.ingresos = data;
		},
	},

	actions: {
		async list({ commit }, id) {
			try {
				const response = await axios.get(`api/listingresos`);
				if (response && response.status == 200) {
					return response.data;
				} else {
					throw new Error("Response error");
				}
			} catch (error) {
				console.error(
					"[ERROR] ",
					error.response ? error.response.data.message : error.message
				);
				throw error;
			}
		},

		async create({ commit }, data) {
			try {
				const response = await axios.post(`api/createingreso`, data);
				if (response && response.status == 200) {
					return response.data;
				} else {
					throw new Error("Response error");
				}
			} catch (error) {
				console.error(
					"[ERROR] ",
					error.response ? error.response.data.message : error.message
				);
				throw error;
			}
		},
	},
};
