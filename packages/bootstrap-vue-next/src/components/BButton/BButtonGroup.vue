<template>
  <component :is="tag" :class="computedClasses" role="group" :aria-label="ariaLabel">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {BButtonGroupProps} from '../../types'
import {computed} from 'vue'

const props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaLabel: 'Group',
  size: 'md',
  tag: 'div',
  vertical: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  'btn-group': !props.vertical,
  [`btn-group-${props.size}`]: props.size !== 'md',
  'btn-group-vertical': props.vertical,
}))
</script>
