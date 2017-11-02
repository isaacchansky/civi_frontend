import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API_URL = process.env.API_URL

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  location: null,
  loading: false,
  fullLocation: null,
  repData: {},
  selectedSegment: 'all'
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setLocation (state, loc) {
    state.location = loc
  },
  resetLocation (state) {
    state.fullLocation = null
  },
  setLoading (state, isLoading) {
    state.loading = isLoading
  },
  setFullLocation (state, fullLocation) {
    state.fullLocation = fullLocation
  },
  setRepData (state, repData) {
    state.repData = repData
  },
  setSelectedSegment (state, segment) {
    state.selectedSegment = segment
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  setLocation: ({ commit }, location) => {
    commit('setLocation', location)
    commit('setLoading', true)
    Vue.http.get(`${API_URL}/find-my-rep?address=${location}`).then((response) => {
      if (response.error) {
        commit('setAPIError', response.error.message)
      } else {
        commit('setFullLocation', response.body.normalizedInput)
        commit('setRepData', response.body)
      }
      commit('setLoading', false)
    })
  },
  resetLocation: ({ commit }) => {
    commit('resetLocation')
  }
}

// getters are functions
const getters = {
  location: state => state.location,
  fullLocation: state => state.fullLocation,
  divisions: state => state.repData.divisions,
  offices: state => state.repData.offices,
  officials: state => state.repData.officials,
  selectedSegment: state => state.selectedSegment
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
