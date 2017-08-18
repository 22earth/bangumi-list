import * as types from './mutation-types.js'
const mutations = {
  [types.QUERY_BANGUMI] (state, payload) {
    state.queryText = payload.queryText
    state.activeTab = 7
  },
  [types.RECEIVE_BANGUMI_DATA] (state, payload) {
    state.currentBangumiData = payload
  },
  [types.GET_BANGUMI_DATA_BY_DAY] (state, payload) {

  },
  [types.SWITCH_TAB] (state, payload) {
    state.activeTab = payload.key
  }
}

export default mutations
