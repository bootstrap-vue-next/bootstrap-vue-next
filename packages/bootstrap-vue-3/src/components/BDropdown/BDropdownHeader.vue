<template>
  <li>
    <h6 class="dropdown-header">
      <slot />
    </h6>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BDropdownHeader',
})
</script>
