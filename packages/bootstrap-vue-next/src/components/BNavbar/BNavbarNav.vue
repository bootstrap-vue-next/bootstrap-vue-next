<template>
  <ul class="navbar-nav" :class="computedClasses">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type {BNavbarNavProps} from '../../types'
import {computed} from 'vue'
import {useAlignment} from '../../composables'

const props = withDefaults(defineProps<BNavbarNavProps>(), {
  align: undefined,
  fill: false,
  justified: false,
  small: false,
  tag: 'ul',
})

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
