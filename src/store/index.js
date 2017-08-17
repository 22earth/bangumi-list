import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  queryText: '',
  config: [],
  activeTab: 7,
  showSetting: false,
  currentBangumiData: {}
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
