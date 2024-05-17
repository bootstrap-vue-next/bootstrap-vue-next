<template>
  <component :is="props.tag" :class="computedClasses" role="group" :aria-label="props.ariaLabel">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BButtonGroupProps} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaLabel: 'Group',
  size: 'md',
  tag: 'div',
  vertical: false,
})
const props = useDefaults(_props, 'BButtonGroup')

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
