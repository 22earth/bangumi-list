<template>
  <div class="table-right data-list">
    <ul>
      <bgm-list-item v-for="item in items" :key="item">
      </bgm-list-item>
    </ul>
  </div>
</template>
<script charset="utf-8">
import BgmListItem from './BgmListItem.vue'
export default {
  name: 'bgm-list',
  components: {
    BgmListItem
  },
  data () {
    return {
      items: [1, 2]
    }
  }
}
</script>
