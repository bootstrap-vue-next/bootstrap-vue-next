<template>
  <Render />
</template>

<script setup lang="ts">
import {computed, h, PropType, useSlots, VNode} from 'vue'
import type {Breakpoint, ColorVariant} from '../../types'

const props = defineProps({
  bordered: {type: Boolean, default: false},
  borderless: {type: Boolean, default: false},
  borderVariant: {type: String as PropType<ColorVariant>},
  captionTop: {type: Boolean, default: false},
  dark: {type: Boolean, default: false},
  hover: {type: Boolean, default: false},
  responsive: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
  stacked: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
  striped: {type: Boolean, default: false},
  small: {type: Boolean, default: false},
  tableClass: {type: [Array, Object, String]},
  tableVariant: {type: String},
})

const slots = useSlots()

const classes = computed(() => [
  {
    'table-bordered': props.bordered,
    'table-borderless': props.borderless,
    [`border-${props.borderVariant}`]: props.borderVariant,
    'caption-top': props.captionTop,
    'table-dark': props.dark,
    'table-hover': props.hover,
    'b-table-stacked': typeof props.stacked === 'boolean' && props.stacked,
    [`b-table-stacked-${props.stacked}`]: typeof props.stacked === 'string',
    'table-striped': props.striped,
    'table-sm': props.small,
    [`table-${props.tableVariant}`]: props.tableVariant,
  },
  props.tableClass,
])

const table = h(
  'table',
  {
    class: ['table b-table', classes.value],
    role: 'table',
  },
  slots.default?.()
)

let Render: VNode = table

if (props.responsive) {
  Render = h(
    'div',
    {
      class: {
        'table-responsive': typeof props.responsive === 'boolean' && props.responsive,
        [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
      },
    },
    table
  )
}
</script>
