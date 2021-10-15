<template>
  <component :is="tag" class="form-row">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BFormRow',
  props: {
    tag: {type: String, default: 'div'},
  },
})
</script>
