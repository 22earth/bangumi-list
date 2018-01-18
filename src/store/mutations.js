import * as types from './mutation-types.js'
import _ from 'lodash'
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
  },
  [types.TOGGLE_SETTING] (state, payload) {
    if (payload && typeof payload.showSetting !== 'undefined') {
      state.showSetting = payload.showSetting
    } else {
      state.showSetting = !state.showSetting
    }
  },
  [types.TOGGLE_BANGUMI_LIST_SITE] (state, payload) {
    const sites = _.cloneDeep(state.bangumiListSites)
    if (payload.id && sites[payload.id]) {
      sites[payload.id].enable = payload.enable
      state.bangumiListSites = sites
    } else if (payload.all) {
      let s = {}
      _.forEach(sites, (value, key) => {
        value.enable = payload.enable
        s[key] = value
      })
      state.bangumiListSites = s
    }
  },
  [types.CHANGE_CONFIG] (state, payload) {
    state.config = _.assign(state.config, payload)
  },
  [types.RESET_CONFIG] (state) {
    state.config = {'newOnly': false, 'highlightOnly': false, 'noAutoSwitch': false, 'disableNewTab': false, 'jpTitle': false, 'dayDivide': 24, 'bangumiDomain': 'bangumi.tv'}
  },
  [types.CHANGE_BANGUMI_DATA] (state, payload) {
    let bangumiData = _.cloneDeep(state.currentBangumiData)
    let target = bangumiData[payload.id]
    _.assign(target, payload.data)
    state.currentBangumiData = bangumiData
  },
  [types.TOGGLE_DIALOG] (state, payload) {
    if (payload && typeof payload.showDialog !== 'undefined') {
      state.dialog.show = payload.showDialog
    } else {
      state.dialog.show = !state.dialog.show
    }
  },
  [types.IMPORT_SETTING] (state, payload) {
    // @TODO

  }
}

export default mutations
