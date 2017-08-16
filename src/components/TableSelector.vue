<template>
  <div class="table-left selector">
    <ol>
      <li v-for="tab in tabs" :key="tab.key">
        <a href="#"
          :data-tab="tab.key"
          :data-name="tab.name"
          >
          {{new Date().getDay() === tab.key ? '今天' : tab.name}}
        </a>
      </li>
    </ol>
  </div>
</template>
<script charset="utf-8">
export default {
  name: 'table-selector',
  data () {
    return {
      tabs: [
        {name: '周一', key: 1},
        {name: '周二', key: 2},
        {name: '周三', key: 3},
        {name: '周四', key: 4},
        {name: '周五', key: 5},
        {name: '周六', key: 6},
        {name: '周日', key: 0},
        {name: '全部', key: 7}
      ]
    }
  }
}
</script>
