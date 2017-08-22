import _ from 'lodash'
import utils from '../utils'
import getPinyin from '../utils/getPinyin.js'

const getters = {
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
          if (queryText.match(/^[a-zA-Z]+$/)) {
            return getPinyin(item.titleJP + item.titleCN).toLowerCase().indexOf(queryText.toLowerCase()) !== -1
          }
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

        var useCNTime = item.timeCN || item.weekDayCN !== item.weekDayJP
        var showHour = +(useCNTime ? item.timeCN : item.timeJP).slice(0, 2)
        // 选中周天
        if (item.weekDayCN === tab) {
            // 日期分割之后的不显示
          if (showHour >= state.config.dayDivide) {
            return false
            // 其余显示
          } else {
            return true
          }
        }

        // 选中的前一天
        if (tab - item.weekDayCN === 1 || tab - item.weekDayCN === -6) {
            // 日期分割之前的不显示
          if (showHour < state.config.dayDivide) {
            return false
            // 其余显示
          } else {
            return true
          }
        } else {
            // 其它周天直接不显示
          return false
        }
        /*
         *if (tab === parseInt(item.weekDayCN)) {
         *  return true
         *} else {
         *  return false
         *}
         */
      })
      .map((item) => {
        const newItem = _.cloneDeep(item)
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
