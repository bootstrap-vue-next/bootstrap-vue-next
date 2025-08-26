<template>
  <ul class="navbar-nav" :class="computedClasses">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type {BNavbarNavProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import {useAlignment} from '../../composables/useAlignment'
import {useDefaults} from '../../composables/useDefaults'
import type {BNavbarNavSlots} from '../../types'

const _props = withDefaults(defineProps<BNavbarNavProps>(), {
  align: undefined,
  fill: false,
  justified: false,
  small: false,
  tag: 'ul',
})
const props = useDefaults(_props, 'BNavbarNav')
defineSlots<BNavbarNavSlots>()

const alignment = useAlignment(() => props.align)

const computedClasses = computed(() => ({
  'nav-fill': props.fill,
  'nav-justified': props.justified,
  [alignment.value]: props.align !== undefined,
  'small': props.small,
}))
</script>
