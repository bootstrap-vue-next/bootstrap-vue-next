<template>
  <component :is="props.tag" class="row" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {getClasses} from '../utils'
import {useAlignment, useDefaults} from '../composables'
import type {BRowProps} from '../types'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BRowProps>(), {
  tag: 'div',
  gutterX: undefined,
  gutterY: undefined,
  noGutters: false,
  alignV: undefined,
  alignH: undefined,
  alignContent: undefined,
  cols: undefined,
  colsLg: undefined,
  colsMd: undefined,
  colsSm: undefined,
  colsXl: undefined,
  colsXxl: undefined,
})

const props = useDefaults(_props, 'BRow')

const alignment = useAlignment(() => props.alignH)

const rowColsClasses = computed(() =>
  getClasses(
    {
      cols: props.cols,
      colsLg: props.colsLg,
      colsMd: props.colsMd,
      colsSm: props.colsSm,
      colsXl: props.colsXl,
      colsXxl: props.colsXxl,
    },
    ['cols', 'colsLg', 'colsMd', 'colsSm', 'colsXl', 'colsXxl'],
    'cols',
    'row-cols'
  )
)

const computedClasses = computed(() => [
  rowColsClasses.value,
  {
    [`gx-${props.gutterX}`]: props.gutterX !== undefined,
    [`gy-${props.gutterY}`]: props.gutterY !== undefined,
    'g-0': props.noGutters,
    [`align-items-${props.alignV}`]: props.alignV !== undefined,
    [alignment.value]: props.alignH !== undefined,
    [`align-content-${props.alignContent}`]: props.alignContent !== undefined,
  },
])
</script>
