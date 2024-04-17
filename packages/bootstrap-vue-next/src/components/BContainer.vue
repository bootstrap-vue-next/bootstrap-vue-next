<template>
  <component :is="tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {BContainerProps} from '../types'
import {computed} from 'vue'
import {useToNumber} from '@vueuse/core'

const props = withDefaults(defineProps<BContainerProps>(), {
  fluid: false,
  gutterX: undefined,
  gutterY: undefined,
  tag: 'div',
})

const gutterXToNumber = useToNumber(() => props.gutterX ?? NaN, {method: 'parseInt'})
const gutterYToNumber = useToNumber(() => props.gutterY ?? NaN, {method: 'parseInt'})

const computedClasses = computed(() => ({
  container: props.fluid === false,
  [`container-fluid`]: props.fluid === true,
  [`container-${props.fluid}`]: typeof props.fluid === 'string',
  [`gx-${gutterXToNumber.value}`]: !Number.isNaN(gutterXToNumber.value),
  [`gy-${gutterYToNumber.value}`]: !Number.isNaN(gutterYToNumber.value),
}))
</script>
