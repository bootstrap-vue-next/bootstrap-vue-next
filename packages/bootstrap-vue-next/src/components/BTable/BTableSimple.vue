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
// import type {Breakpoint} from '../../types'
import {computed} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, Breakpoint, ClassValue, ColorVariant} from '../../types'

const props = withDefaults(
  defineProps<{
    bordered?: Booleanish
    borderless?: Booleanish
    borderVariant?: ColorVariant | null
    captionTop?: Booleanish
    hover?: Booleanish
    responsive?: boolean | Breakpoint
    stacked?: boolean | Breakpoint
    striped?: Booleanish
    small?: Booleanish
    tableClass?: ClassValue
    tableVariant?: ColorVariant | null
    stickyHeader?: Booleanish
  }>(),
  {
    borderVariant: null,
    tableClass: undefined,
    tableVariant: null,
    bordered: false,
    borderless: false,
    captionTop: false,
    hover: false,
    responsive: false,
    stacked: false,
    striped: false,
    small: false,
    stickyHeader: false,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const captionTopBoolean = useBooleanish(() => props.captionTop)
const borderlessBoolean = useBooleanish(() => props.borderless)
const borderedBoolean = useBooleanish(() => props.bordered)
const hoverBoolean = useBooleanish(() => props.hover)
const smallBoolean = useBooleanish(() => props.small)
const stripedBoolean = useBooleanish(() => props.striped)
const stickyHeaderBoolean = useBooleanish(() => props.stickyHeader)

const computedClasses = computed(() => [
  props.tableClass,
  'table',
  'b-table',
  {
    'table-bordered': borderedBoolean.value,
    'table-borderless': borderlessBoolean.value,
    [`border-${props.borderVariant}`]: props.borderVariant !== null,
    'caption-top': captionTopBoolean.value,
    'table-hover': hoverBoolean.value,
    'b-table-stacked': typeof props.stacked === 'boolean' && props.stacked,
    [`b-table-stacked-${props.stacked}`]: typeof props.stacked === 'string',
    'table-striped': stripedBoolean.value,
    'table-sm': smallBoolean.value,
    [`table-${props.tableVariant}`]: props.tableVariant !== null,
  },
])

const responsiveClasses = computed(() => ({
  'table-responsive': props.responsive === true,
  [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
  'b-table-sticky-header': stickyHeaderBoolean.value,
}))
</script>
