<template>
  <table v-if="!responsive" :class="computedClasses">
    <slot />
  </table>
  <div v-else :class="responsiveClasses">
    <table :class="computedClasses">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useBooleanish} from '../../composables'
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

const captionTopBoolean = useBooleanish(() => props.captionTop)
const borderlessBoolean = useBooleanish(() => props.borderless)
const borderedBoolean = useBooleanish(() => props.bordered)
const darkBoolean = useBooleanish(() => props.dark)
const hoverBoolean = useBooleanish(() => props.hover)
const smallBoolean = useBooleanish(() => props.small)
const stripedBoolean = useBooleanish(() => props.striped)
const stickyHeaderBoolean = useBooleanish(() => props.stickyHeader)
const stripedColumnsBoolean = useBooleanish(() => props.stripedColumns)
const resolvedResponsive = useBooleanish(() => props.responsive)
const resolvedStacked = useBooleanish(() => props.stacked)

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
