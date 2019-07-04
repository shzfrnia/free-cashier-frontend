import Vue from 'vue'
import Vuex from 'vuex'
import {TablesApi, AuthAPI} from 'api-client'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    session: {
      login: localStorage.getItem('login') || 'NoName',
      token: localStorage.getItem('token') || ''
    },
    tables: []
  },
  mutations: {
    setTables(state, tables) {
      state.tables = tables
    },
    setSession(state, { token, login}) {
      state.session = { token, login }
      localStorage.setItem('token', token)
      localStorage.setItem('login', login)
    },
    clearSession(state) {
      state.session.token = ''
      state.session.login = ''
      localStorage.removeItem('token')
      localStorage.removeItem('login')
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.session.token
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
    },
    async logIn({commit}, { login, password })  {
        const { displayName, token } = await AuthAPI.logIn({ login, password })
        commit('setSession', { login:displayName, token })
      },
    logOut({commit}) {
      AuthAPI.logOut()
      commit('clearSession')
    }
    }
})
