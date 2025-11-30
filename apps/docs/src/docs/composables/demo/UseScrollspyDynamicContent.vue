<template>
  <!-- Placeholder template with actual refs for TypeScript compatibility -->
  <div ref="content">
    <div ref="target" />
  </div>
</template>

<script setup lang="ts">
import {nextTick, useTemplateRef} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

// Placeholder refs - these would be actual template refs in a real component
const content = useTemplateRef('content')
const target = useTemplateRef('target')

const {updateList} = useScrollspy(content, target)

// Call when content changes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addNewSection = () => {
  // Add new content...
  nextTick(() => {
    updateList()
  })
}
</script>
