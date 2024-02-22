<template>
  <component :is="tag" :class="computedClasses" role="group" :aria-label="ariaLabel">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {Size} from '../../types'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    size?: Size
    tag?: string
    vertical?: boolean
  }>(),
  {
    ariaLabel: 'Group',
    size: 'md',
    tag: 'div',
    vertical: false,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const verticalBoolean = computed(() => props.vertical)

const computedClasses = computed(() => ({
  'btn-group': !verticalBoolean.value,
  [`btn-group-${props.size}`]: props.size !== 'md',
  'btn-group-vertical': verticalBoolean.value,
}))
</script>
