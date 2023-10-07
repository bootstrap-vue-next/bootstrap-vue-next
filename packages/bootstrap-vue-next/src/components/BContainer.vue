<template>
  <component :is="tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {isBooleanish, resolveBooleanish} from '../utils'
import type {Booleanish, Breakpoint} from '../types'
import {computed} from 'vue'
import {useToNumber} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    gutterX?: string | number
    gutterY?: string | number
    fluid?: Booleanish | Breakpoint
    tag?: string
  }>(),
  {
    fluid: false,
    tag: 'div',
    gutterX: undefined,
    gutterY: undefined,
  }
)

const gutterXToNumber = useToNumber(() => props.gutterX ?? NaN, {method: 'parseInt'})
const gutterYToNumber = useToNumber(() => props.gutterY ?? NaN, {method: 'parseInt'})

const resolvedFluid = computed(() =>
  isBooleanish(props.fluid) ? resolveBooleanish(props.fluid) : props.fluid
)

const computedClasses = computed(() => ({
  container: resolvedFluid.value === false,
  [`container-fluid`]: resolvedFluid.value === true,
  [`container-${resolvedFluid.value}`]: typeof resolvedFluid.value === 'string',
  [`gx-${gutterXToNumber.value}`]: !Number.isNaN(gutterXToNumber.value),
  [`gy-${gutterYToNumber.value}`]: !Number.isNaN(gutterYToNumber.value),
}))
</script>
