<template>
  <p class="card-text">
    <slot />
  </p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BCardText',
})
</script>
