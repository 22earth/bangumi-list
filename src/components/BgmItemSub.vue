<template>
  <div class="item-sub">
    <div class="sub-left">
      <p class="sub-links">
        <span class="sub-title">链接：</span>
        <a href="officalSite">
          官方网站
        </a>
        <a href="#">bangumi</a>
      </p>
      <p class="sub-links">
        <span class="sub-title">下载：</span>
        <a href="#">花园</a>
      </p>
    </div>
    <div class="sub-middle">
      <p>
        <span class="sub-title">放送日期：</span>
        {{showDate}}
      </p>
      {{comment}}
    </div>
    <div class="sub-right">
      <p>
        <input
        type="checkbox"
        />
        <label>关注</label>
      </p>
      <p>
        <input
        type="checkbox"
        />
        <label>隐藏</label>
      </p>
    </div>
  </div>
</template>
<script charset="utf-8">
export default {
  name: 'bgm-item-sub',
  data () {
    return {
      officalSite: 'xxx',
      comment: 'foo',
      showDate: '2017-8-9'
    }
  }
}
</script>
