<template>
  <thead :class="computedClasses">
    <slot />
  </thead>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BTheadProps} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTheadProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BThead')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
