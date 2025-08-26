<template>
  <!-- This is a placeholder template - the important part is the script setup -->
  <div></div>
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