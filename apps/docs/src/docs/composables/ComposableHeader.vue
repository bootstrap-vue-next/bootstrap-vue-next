<template>
  <SourceHeader :title :path base="githubComposablesDirectory" />
</template>

<script setup lang="ts">
import SourceHeader from '../../components/SourceHeader.vue'

defineProps<{
  title: string
  path: string
}>()
</script>
