<template>
  <!-- tables definitions are shared. Can't use createReusableTemplate cause it becomes a non-root node -->
  <table v-if="!props.responsive" :id="id" :class="computedClasses">
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

const computedClasses = computed(() => [
  props.tableClass,
  'table',
  'b-table',
  {
    'table-bordered': props.bordered,
    'table-borderless': props.borderless,
    [`border-${props.borderVariant}`]: props.borderVariant !== null,
    'caption-top': props.captionTop,
    'table-dark': props.dark,
    'table-hover': props.hover,
    'b-table-stacked': props.stacked === true,
    [`b-table-stacked-${props.stacked}`]: typeof props.stacked === 'string',
    'table-striped': props.striped,
    'table-sm': props.small,
    [`table-${props.variant}`]: props.variant !== null,
    'table-striped-columns': props.stripedColumns,
  },
])

const responsiveClasses = computed(() => ({
  'table-responsive': props.responsive === true,
  [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
  'b-table-sticky-header': props.stickyHeader,
}))
</script>
