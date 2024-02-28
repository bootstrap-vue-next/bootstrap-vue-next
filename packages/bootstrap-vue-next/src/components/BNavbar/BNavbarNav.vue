<template>
  <ul class="navbar-nav" :class="computedClasses">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import type {AlignmentJustifyContent, Booleanish} from '../../types'
import {computed} from 'vue'
import {useAlignment, useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    align?: AlignmentJustifyContent
    fill?: Booleanish
    justified?: Booleanish
    small?: Booleanish
    tag?: string
  }>(),
  {
    align: undefined,
    fill: false,
    justified: false,
    small: false,
    tag: 'ul',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const fillBoolean = useBooleanish(() => props.fill)
const justifiedBoolean = useBooleanish(() => props.justified)
const smallBoolean = useBooleanish(() => props.small)
const alignment = useAlignment(() => props.align)

const computedClasses = computed(() => ({
  'nav-fill': fillBoolean.value,
  'nav-justified': justifiedBoolean.value,
  [alignment.value]: props.align !== undefined,
  'small': smallBoolean.value,
}))
</script>
