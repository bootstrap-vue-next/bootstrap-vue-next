<template>
  <div v-if="responsive" :class="responsiveClasses">
    <table role="table" :class="classes">
      <slot />
    </table>
  </div>
  <table v-else role="table" :class="classes">
    <slot />
  </table>
</template>

<script setup lang="ts">
import {computed, PropType} from 'vue'
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

const classes = computed(() => [
  'table',
  'b-table',
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

const responsiveClasses = computed(() => [
  {
    'table-responsive': typeof props.responsive === 'boolean' && props.responsive,
    [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
  },
])
</script>
