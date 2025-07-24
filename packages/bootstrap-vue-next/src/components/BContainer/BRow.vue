<template>
  <component :is="props.tag" class="row" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {getClasses} from '../../utils/getClasses'
import {useAlignment} from '../../composables/useAlignment'
import type {BRowProps} from '../../types/ComponentProps'
import {useDefaults} from '../../composables/useDefaults'
import type {BRowSlots} from '../../types'

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
defineSlots<BRowSlots>()

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
