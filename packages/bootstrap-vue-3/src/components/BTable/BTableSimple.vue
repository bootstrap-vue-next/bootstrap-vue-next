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
// import type {Breakpoint} from '../../types'
import {computed} from 'vue'
import type {ColorVariant} from '../../types'

interface BTableSimpleProps {
  bordered?: boolean
  borderless?: boolean
  borderVariant?: ColorVariant
  captionTop?: boolean
  dark?: boolean
  hover?: boolean
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  stacked?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  striped?: boolean
  small?: boolean
  tableClass?: Array<unknown> | Record<string, unknown> | string
  tableVariant?: string
}

const props = withDefaults(defineProps<BTableSimpleProps>(), {
  bordered: false,
  borderless: false,
  captionTop: false,
  dark: false,
  hover: false,
  responsive: false,
  stacked: false,
  striped: false,
  small: false,
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

<script lang="ts">
export default {
  name: 'BTableSimple',
}
</script>
