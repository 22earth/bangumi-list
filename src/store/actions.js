import * as types from './mutation-types.js'
import getData from '../utils/getData.js'
const actions = {
  getBangumiData ({ commit }, payload) {
    getData().then((i) => {
      commit(types.RECEIVE_BANGUMI_DATA, i)
    })
  }
}

export default actions
