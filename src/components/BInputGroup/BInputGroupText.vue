<template>
  <component :is="tag" class="input-group-text">
    <slot />
  </component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BInputGroupText',
  props: {
    tag: {type: String, default: 'div'},
  },
})
</script>
