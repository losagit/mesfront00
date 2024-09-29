import axios from "axios";
export default {
	namespaced: true,
	state: {
		kardex: [],
		msg: "",
	},

	getters: {
		getkardex: (state) => state.kardex,
	},

	mutations: {
		GET_KARDEX: (state, data) => {
			state.kardex = data;
		},
	},

	actions: {
		async all({ commit }, id) {
			try {
				const response = await axios.get(`api/kardex`);
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
