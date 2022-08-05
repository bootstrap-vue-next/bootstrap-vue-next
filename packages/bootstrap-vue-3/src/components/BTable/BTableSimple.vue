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
import type {Booleanish, ColorVariant} from '../../types'
import {resolveBooleanish} from '../../utils'

interface BTableSimpleProps {
  bordered?: Booleanish
  borderless?: Booleanish
  borderVariant?: ColorVariant
  captionTop?: Booleanish
  dark?: Booleanish
  hover?: Booleanish
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  stacked?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  striped?: Booleanish
  small?: Booleanish
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

const captionTopBoolean = computed(() => resolveBooleanish(props.captionTop))
const borderlessBoolean = computed(() => resolveBooleanish(props.borderless))
const borderedBoolean = computed(() => resolveBooleanish(props.bordered))
const darkBoolean = computed(() => resolveBooleanish(props.dark))
const hoverBoolean = computed(() => resolveBooleanish(props.hover))
const smallBoolean = computed(() => resolveBooleanish(props.small))
const stripedBoolean = computed(() => resolveBooleanish(props.striped))

const classes = computed(() => [
  'table',
  'b-table',
  {
    'table-bordered': borderedBoolean.value,
    'table-borderless': borderlessBoolean.value,
    [`border-${props.borderVariant}`]: props.borderVariant,
    'caption-top': captionTopBoolean.value,
    'table-dark': darkBoolean.value,
    'table-hover': hoverBoolean.value,
    'b-table-stacked': typeof props.stacked === 'boolean' && props.stacked,
    [`b-table-stacked-${props.stacked}`]: typeof props.stacked === 'string',
    'table-striped': stripedBoolean.value,
    'table-sm': smallBoolean.value,
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
