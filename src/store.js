import Vue from 'vue'
import Vuex from 'vuex'
import {TablesApi} from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tables: []
  },
  mutations: {
    setTables(state, tables) {
      state.tables = tables
    }
  },
  actions: {
    async fetchTables({commit}, unixTime) {
      try {
        const tables = await TablesApi.getTables(unixTime)
        commit('setTables', tables)
      } catch (e) {
        window.console.log(e)
      }
    }
  }
})
