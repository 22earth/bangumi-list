import _ from 'lodash'
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
    var sortArr = (state.activeTab === 7 // 如果tab为全部，则以日本时间排序。否则以大陆时间排序
      ? ['weekDayJP', 'timeJP'] : ['weekDayCN', 'timeCN'])
    let listItems = _(state.currentBangumiData)
        .sortBy(sortArr)
    return listItems
  }
}
export default getters
