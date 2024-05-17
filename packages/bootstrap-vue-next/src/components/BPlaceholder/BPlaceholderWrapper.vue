<template>
  <slot v-if="props.loading" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BPlaceholderWrapperProps} from '../../types'

const _props = withDefaults(defineProps<BPlaceholderWrapperProps>(), {
  loading: false,
})
const props = useDefaults(_props, 'BPlaceholderWrapper')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loading?: (props: Record<string, never>) => any
}>()
</script>
