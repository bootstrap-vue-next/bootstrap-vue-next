<template>
  <!-- tables definitions are shared. Can't use createReusableTemplate cause it becomes a non-root node -->
  <table v-if="!resolvedResponsive" :id="id" :class="computedClasses">
    <slot />
  </table>
  <div v-else :class="responsiveClasses">
    <table :id="id" :class="computedClasses">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BTableSimpleProps} from '../../types'

// TODO alphabetize the lists for tables
// TODO all table things do not declare their props
// TODO some props are not used. ex id, fixed, etc
// TODO Attrs fallthrough will attach to either responsive or table, but you can't assign attrs to table if it is responsive. So we will need an attrs & class
const props = withDefaults(defineProps<BTableSimpleProps>(), {
  borderVariant: null,
  tableClass: undefined,
  variant: null,
  bordered: false,
  borderless: false,
  captionTop: false,
  dark: false,
  hover: false,
  id: undefined,
  noBorderCollapse: false,
  outlined: false,
  fixed: false,
  responsive: false,
  stacked: false,
  striped: false,
  stripedColumns: false,
  small: false,
  stickyHeader: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const captionTopBoolean = computed(() => props.captionTop)
const borderlessBoolean = computed(() => props.borderless)
const borderedBoolean = computed(() => props.bordered)
const darkBoolean = computed(() => props.dark)
const hoverBoolean = computed(() => props.hover)
const smallBoolean = computed(() => props.small)
const stripedBoolean = computed(() => props.striped)
const stickyHeaderBoolean = computed(() => props.stickyHeader)
const stripedColumnsBoolean = computed(() => props.stripedColumns)
const resolvedResponsive = computed(() => props.responsive)
const resolvedStacked = computed(() => props.stacked)

const computedClasses = computed(() => [
  props.tableClass,
  'table',
  'b-table',
  {
    'table-bordered': borderedBoolean.value,
    'table-borderless': borderlessBoolean.value,
    [`border-${props.borderVariant}`]: props.borderVariant !== null,
    'caption-top': captionTopBoolean.value,
    'table-dark': darkBoolean.value,
    'table-hover': hoverBoolean.value,
    'b-table-stacked': resolvedStacked.value === true,
    [`b-table-stacked-${resolvedStacked.value}`]: typeof resolvedStacked.value === 'string',
    'table-striped': stripedBoolean.value,
    'table-sm': smallBoolean.value,
    [`table-${props.variant}`]: props.variant !== null,
    'table-striped-columns': stripedColumnsBoolean.value,
  },
])

const responsiveClasses = computed(() => ({
  'table-responsive': resolvedResponsive.value === true,
  [`table-responsive-${resolvedResponsive.value}`]: typeof resolvedResponsive.value === 'string',
  'b-table-sticky-header': stickyHeaderBoolean.value,
}))
</script>
