<template>
  <li role="presentation">
    <form class="px-4 py-3">
      <slot />
    </form>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BDropdownForm',
})
</script>
