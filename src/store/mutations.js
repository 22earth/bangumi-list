import * as types from './mutation-types.js'
const mutations = {
  [types.QUERY_BANGUMI] (state) {

  },
  [types.RECEIVE_BANGUMI_DATA] (state, payload) {
    state.currentBangumiData = payload
  }
}

export default mutations
