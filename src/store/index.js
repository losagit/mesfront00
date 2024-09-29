import Vue from 'vue'
import Vuex from 'vuex'
import Ingresos from './modules/Ingresos'
import gastos from './modules/gastos'
import kardex from './modules/kardex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Ingresos,
    gastos,
    kardex
  }
})
