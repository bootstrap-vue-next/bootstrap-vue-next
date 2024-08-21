<template>
  <component :is="props.tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../composables'
import type {BContainerProps} from '../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BContainerProps>(), {
  fluid: false,
  gutterX: undefined,
  gutterY: undefined,
  tag: 'div',
})
const props = useDefaults(_props, 'BContainer')

const computedClasses = computed(() => ({
  container: props.fluid === false,
  [`container-fluid`]: props.fluid === true,
  [`container-${props.fluid}`]: typeof props.fluid === 'string',
  [`gx-${props.gutterX}`]: props.gutterX !== undefined,
  [`gy-${props.gutterY}`]: props.gutterY !== undefined,
}))
</script>
