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
      .mapValues((value, id) => _.merge({}, value, {id}))
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

        // 非历史模式，有结束日期并且已经结束一周,则不显示
        if (!state.isHistory && typeof item.endDate !== 'undefined' &&
            utils.hasEnded(item.endDate, item.timeJP, 7)) {
          return false
        }

        // 非历史模式，设定只显示关注项目则隐藏其他所以项目
        if (!state.isHistory && state.config.highlightOnly && !item.highlight) {
          return false
        }
        const tab = state.activeTab
        if (tab === 7) {
          return true
        } else if (item.hide) {
          return false
        } else if (state.config.newOnly && !item.newBgm) {
          return false
        }
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
