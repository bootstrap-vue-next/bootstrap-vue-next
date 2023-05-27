<template>
  <slot v-if="loadingBoolean" name="loading" />
  <slot v-else />
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

interface BPlaceholderWrapperProps {
  loading?: Booleanish
}

const props = withDefaults(defineProps<BPlaceholderWrapperProps>(), {
  loading: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loading?: (props: Record<string, never>) => any
}>()

const loadingBoolean = useBooleanish(() => props.loading)
</script>
