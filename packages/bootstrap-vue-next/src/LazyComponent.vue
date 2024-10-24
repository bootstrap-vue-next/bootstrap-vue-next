<template>
  <div>Lazy load</div>
</template>
<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue'

const props = defineProps<{
  msg: string
}>()

const emit = defineEmits<{
  mounted: []
  unmounted: []
}>()

onMounted(() => {
  // eslint-disable-next-line no-console
  console.log(props.msg, 'LazyComponent mounted')
  emit('mounted')
})

onUnmounted(() => {
  // eslint-disable-next-line no-console
  console.log(props.msg, 'LazyComponent unmounted')
  emit('unmounted')
})
</script>
