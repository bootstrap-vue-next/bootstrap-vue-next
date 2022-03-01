<template>
  <Render />
</template>

<script setup lang="ts">
import {computed, h, PropType, useSlots} from 'vue'
import type {ColorVariant} from '../../types'

const props = defineProps({
  bordered: {type: Boolean, default: false},
  borderless: {type: Boolean, default: false},
  borderVariant: {type: String as PropType<ColorVariant>},
  captionTop: {type: Boolean, default: false},
  dark: {type: Boolean, default: false},
  hover: {type: Boolean, default: false},
  responsive: {type: [Boolean, String], default: false},
  stacked: {type: Boolean, default: false},
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
    'b-table-stacked': props.stacked,
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

// TODO: type correctly
let Render: any

if (props.responsive) {
  Render = h(
    'div',
    {
      class: {
        'table-responsive': typeof props.responsive === 'boolean',
        [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
      },
    },
    table
  )
}

Render = table
</script>
