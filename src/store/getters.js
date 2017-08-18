import _ from 'lodash'
import utils from '../utils'

const getters = {
  queryBangumiList: state => {
    return ''
    /*
     *return state.currentBangumiData.items.filter((item) => {
     *  return (item.titleJP + item.titleCN).toLowerCase().indexOf(state.queryText) !== -1
     *})
     */
  },
  bangumiList: state => {
    if (!state.currentBangumiData) return []
    var sortArr = (state.activeTab === 7 // 如果tab为全部，则以日本时间排序。否则以大陆时间排序
      ? ['weekDayJP', 'timeJP'] : ['weekDayCN', 'timeCN'])
    let listItems = _(state.currentBangumiData)
      .sortBy(sortArr)
      .filter((item) => {
        const queryText = state.queryText
        if (queryText) {
            /*
             *if (queryText.match(/^[a-zA-Z]+$/)) {
             *    return getPinyin(item.titleJP + item.titleCN).toLowerCase().indexOf(queryTex.toLowerCase()) !== -1;
             *}
             */
          return (item.titleJP + item.titleCN).toLowerCase().indexOf(queryText.toLowerCase()) !== -1
        }

        const tab = state.activeTab
        if (tab === 7) return true
        if (tab === parseInt(item.weekDayCN)) {
          return true
        } else {
          return false
        }
      })
      .map((item) => {
        const newItem = {...item}
        return _.assign(newItem, {
          weekDayCN: utils.formatWeekDay(item.weekDayCN),
          weekDayJP: utils.formatWeekDay(item.weekDayJP),
          timeCN: utils.formatTime(item.timeCN),
          timeJP: utils.formatTime(item.timeJP)
        })
      })
      .value()
    return listItems
  }
}
export default getters
