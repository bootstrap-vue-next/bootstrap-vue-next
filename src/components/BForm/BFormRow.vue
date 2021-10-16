<template>
  <component :is="tag" class="row d-flex flex-wrap">
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
