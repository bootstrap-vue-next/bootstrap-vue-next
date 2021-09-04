<template>
  <component :is="titleTag" class="card-title">
    <slot>
      {{ title }}
    </slot>
  </component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BCardTitle',
  props: {
    title: {type: String},
    titleTag: {type: String, default: 'h4'},
  },
})
</script>
