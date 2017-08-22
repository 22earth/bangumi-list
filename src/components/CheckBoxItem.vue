<template>
  <li>
    <label :for="id">
      <span>{{name}}</span>
      <span class="check" :class="{on: checked}"></span>
    </label>
    <input type="checkbox" :id="id" :checked="checked">
  </li>
</template>
<script charset="utf-8">
export default {
  name: 'check-box-item',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    checked: Boolean
  }
}
</script>
