<template>
  <!-- Placeholder template with actual refs for TypeScript compatibility -->
  <div ref="content">
    <div ref="target"></div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, useTemplateRef} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

// Placeholder refs - these would be actual template refs in a real component
const content = useTemplateRef('content')
const target = useTemplateRef('target')

const {cleanup} = useScrollspy(content, target)

onBeforeUnmount(() => {
  cleanup()
})
</script>