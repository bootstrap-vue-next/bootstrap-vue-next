<template>
  <component :is="props.tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {BContainerSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BContainerProps} from '../../types/ComponentProps'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BContainerProps>(), {
  fluid: false,
  gutterX: undefined,
  gutterY: undefined,
  tag: 'div',
})
const props = useDefaults(_props, 'BContainer')
defineSlots<BContainerSlots>()

const computedClasses = computed(() => ({
  container: props.fluid === false,
  [`container-fluid`]: props.fluid === true,
  [`container-${props.fluid}`]: typeof props.fluid === 'string',
  [`gx-${props.gutterX}`]: props.gutterX !== undefined,
  [`gy-${props.gutterY}`]: props.gutterY !== undefined,
}))
</script>
