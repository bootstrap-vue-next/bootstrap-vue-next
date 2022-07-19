<template>
  <li role="presentation">
    <p class="px-4 py-1 mb-0 text-muted">
      <slot />
    </p>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BDropdownText',
})
</script>
