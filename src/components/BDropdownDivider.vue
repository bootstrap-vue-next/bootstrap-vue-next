<template>
  <li role="presentation">
    <component :is="tag" class="dropdown-divider" role="separator" aria-orientation="horizontal" />
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BDropdownDivider',
  props: {
    tag: {type: String, default: 'hr'},
  },
})
</script>
