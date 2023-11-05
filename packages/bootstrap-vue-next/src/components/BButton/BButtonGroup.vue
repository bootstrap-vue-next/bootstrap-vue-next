<template>
  <component :is="tag" :class="computedClasses" role="group" :aria-label="ariaLabel">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {Booleanish, Size} from '../../types'
import {computed} from 'vue'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    size?: Size
    tag?: string
    vertical?: Booleanish
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

const verticalBoolean = useBooleanish(() => props.vertical)

const computedClasses = computed(() => ({
  'btn-group': !verticalBoolean.value,
  [`btn-group-${props.size}`]: props.size !== 'md',
  'btn-group-vertical': verticalBoolean.value,
}))
</script>
