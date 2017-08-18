import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  queryText: '',
  config: {'newOnly': false, 'highlightOnly': false, 'noAutoSwitch': false, 'disableNewTab': false, 'jpTitle': false, 'dayDivide': 24, 'dayDivideMax': 24, 'dayDivideMin': 5, 'bangumiDomain': 'bangumi.tv'},
  bangumiListSites: {
    'acfun': { name: 'A站', enable: true },
    'bilibili': { name: 'B站', enable: true },
    'tucao': { name: 'C站', enable: true },
    'sohu': { name: '搜狐', enable: true },
    'youku': { name: '优酷', enable: true },
    'qq': { name: '腾讯', enable: true },
    'iqiyi': { name: '爱奇艺', enable: true },
    'letv': { name: '乐视', enable: true },
    'pptv': { name: 'PPTV', enable: true },
    'tudou': { name: '土豆', enable: true },
    'movie': { name: '迅雷', enable: true },
    'mgtv': { name: '芒果', enable: true }
  },
  activeTab: new Date().getDay(),
  showSetting: false,
  currentBangumiData: null
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
