<template>
  <div>
    <p>Custom Layout</p>
    <DarkButton />
    <hr />
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>
