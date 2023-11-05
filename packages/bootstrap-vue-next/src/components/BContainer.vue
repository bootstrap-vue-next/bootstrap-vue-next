<template>
  <component :is="tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {Booleanish, Breakpoint} from '../types'
import {computed} from 'vue'
import {useToNumber} from '@vueuse/core'
import {useBooleanish} from '..//composables'

const props = withDefaults(
  defineProps<{
    fluid?: Booleanish | Breakpoint
    gutterX?: string | number
    gutterY?: string | number
    tag?: string
  }>(),
  {
    fluid: false,
    gutterX: undefined,
    gutterY: undefined,
    tag: 'div',
  }
)

const gutterXToNumber = useToNumber(() => props.gutterX ?? NaN, {method: 'parseInt'})
const gutterYToNumber = useToNumber(() => props.gutterY ?? NaN, {method: 'parseInt'})
const resolvedFluid = useBooleanish(() => props.fluid)

const computedClasses = computed(() => ({
  container: resolvedFluid.value === false,
  [`container-fluid`]: resolvedFluid.value === true,
  [`container-${resolvedFluid.value}`]: typeof resolvedFluid.value === 'string',
  [`gx-${gutterXToNumber.value}`]: !Number.isNaN(gutterXToNumber.value),
  [`gy-${gutterYToNumber.value}`]: !Number.isNaN(gutterYToNumber.value),
}))
</script>
