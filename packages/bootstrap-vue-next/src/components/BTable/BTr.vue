<template>
  <tr :class="computedClasses">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BTrProps} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTrProps>(), {
  variant: null,
})
const props = useDefaults(_props, 'BTr')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
}))
</script>
