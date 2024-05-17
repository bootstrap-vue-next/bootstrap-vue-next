<template>
  <ul class="navbar-nav" :class="computedClasses">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type {BNavbarNavProps} from '../../types'
import {computed} from 'vue'
import {useAlignment, useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BNavbarNavProps>(), {
  align: undefined,
  fill: false,
  justified: false,
  small: false,
  tag: 'ul',
})
const props = useDefaults(_props, 'BNavbarNav')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const alignment = useAlignment(() => props.align)

const computedClasses = computed(() => ({
  'nav-fill': props.fill,
  'nav-justified': props.justified,
  [alignment.value]: props.align !== undefined,
  'small': props.small,
}))
</script>
