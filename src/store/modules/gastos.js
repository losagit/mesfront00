import axios from "axios";
export default {
	namespaced: true,
	state: {
		gastos: [],
		msg: "",
	},

	getters: {
		getGastos: (state) => state.gastos,
	},

	mutations: {
		GET_GASTOS: (state, data) => {
			state.gastos = data;
		},
	},

	actions: {
		async list({ commit }, id) {
			try {
				const response = await axios.get(`api/listgastos`);
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
				const response = await axios.post(`api/creategasto`, data);
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
