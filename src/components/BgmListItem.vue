<template>
  <li :class="className">
    <div class="item-scroller">
      <li :class="className">
        <div class="item-scroller">
          <bgm-item-main></bgm-item-main>
          <bgm-item-sub></bgm-item-sub>
        </div>
      </li>
    </div>
  </li>
</template>
<script charset="utf-8">
import BgmItemMain from './BgmItemMain.vue'
import BgmItemSub from './BgmItemSub.vue'
export default {
  name: 'bgm-list-item',
  data () {
    return {
      className: ''
    }
  },
  components: {
    BgmItemSub,
    BgmItemMain
  }
}
</script>
