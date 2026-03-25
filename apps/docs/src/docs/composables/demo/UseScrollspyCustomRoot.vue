<template>
  <!-- Placeholder template with actual refs for TypeScript compatibility -->
  <div ref="content">
    <div ref="target" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import { useScrollspy } from 'bootstrap-vue-next'

// Placeholder refs - these would be actual template refs in a real component
const content = useTemplateRef('content')
const target = useTemplateRef('target')

const root = ref<HTMLElement | null>(null)
onMounted(() => {
  if (typeof document !== 'undefined') {
    // This is only defensive code for SSR
    // If you have a known Document, you could just do `{ root: document.querySelector() }` in useScrollspy
    root.value = document.querySelector('#custom-viewport') as HTMLElement
  }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { current } = useScrollspy(content, target, {
  root,
  rootMargin: '0px 0px -50%', // Element must be 50% visible
  threshold: [0.25, 0.5, 0.75], // Multiple thresholds for smooth transitions
})
</script>
