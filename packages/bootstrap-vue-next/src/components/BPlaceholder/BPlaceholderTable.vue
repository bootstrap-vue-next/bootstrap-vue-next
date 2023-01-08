<template>
  <b-table-simple>
    <slot v-if="!hideHeaderBoolean" name="thead">
      <thead>
        <tr>
          <th v-for="(_, i) in computedHeaderColumnsLength" :key="i">
            <b-placeholder v-bind="headerAttrs" />
          </th>
        </tr>
      </thead>
    </slot>
    <slot>
      <tbody>
        <tr v-for="(_, j) in rowsNumber" :key="j">
          <td v-for="(__, k) in columnsNumber" :key="k">
            <b-placeholder v-bind="placeholderAttrs" />
          </td>
        </tr>
      </tbody>
    </slot>
    <slot v-if="showFooterBoolean" name="tfoot">
      <tfoot>
        <tr>
          <th v-for="(_, l) in computedFooterColumnsLength" :key="l">
            <b-placeholder v-bind="footerAttrs" />
          </th>
        </tr>
      </tfoot>
    </slot>
  </b-table-simple>
</template>

<script setup lang="ts">
// import type {BSkeletonTableProps} from '../../types/components'
import {computed, toRef} from 'vue'
import type {Booleanish, ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'
import {useBooleanish} from '../../composables'
import BTableSimple from '../BTable/BTableSimple.vue'
import BPlaceholder from './BPlaceholder.vue'
import {stringToInteger} from '../../utils'

interface BSkeletonTableProps {
  rows?: string | number
  columns?: string | number
  cellWidth?: string | number
  size?: PlaceholderSize
  animation?: PlaceholderAnimation
  variant?: ColorVariant
  headerColumns?: string | number
  hideHeader?: Booleanish
  headerCellWidth?: string | number
  headerSize?: PlaceholderSize
  headerAnimation?: PlaceholderAnimation
  headerVariant?: ColorVariant
  footerColumns?: string | number
  showFooter?: Booleanish
  footerCellWidth?: string | number
  footerSize?: PlaceholderSize
  footerAnimation?: PlaceholderAnimation
  footerVariant?: ColorVariant
}

const props = withDefaults(defineProps<BSkeletonTableProps>(), {
  columns: 5,
  rows: 3,
  cellWidth: 100,
  showFooter: false,
  footerCellWidth: 100,
  hideHeader: false,
  headerCellWidth: 100,
})

const columnsNumber = computed<number>(() =>
  // Keep '5' default in line with columns default above
  typeof props.columns === 'string' ? stringToInteger(props.columns, 5) : props.columns
)
const rowsNumber = computed<number>(() =>
  // Keep '3' default in line with rows default above
  typeof props.rows === 'string' ? stringToInteger(props.rows, 3) : props.rows
)
const computedHeaderColumnsLength = computed<number>(() =>
  props.headerColumns === undefined
    ? columnsNumber.value
    : typeof props.headerColumns === 'string'
    ? stringToInteger(props.headerColumns, columnsNumber.value)
    : props.headerColumns
)
const computedFooterColumnsLength = computed<number>(() =>
  props.footerColumns === undefined
    ? columnsNumber.value
    : typeof props.footerColumns === 'string'
    ? stringToInteger(props.footerColumns, columnsNumber.value)
    : props.footerColumns
)

const placeholderAttrs = computed(() => ({
  size: props.size,
  variant: props.variant,
  animation: props.animation,
  width: props.cellWidth,
}))

const headerAttrs = computed(() => ({
  size: props.headerSize,
  variant: props.headerVariant,
  animation: props.headerAnimation,
  width: props.headerCellWidth,
}))

const footerAttrs = computed(() => ({
  size: props.footerSize,
  variant: props.footerVariant,
  animation: props.footerAnimation,
  width: props.footerCellWidth,
}))

const hideHeaderBoolean = useBooleanish(toRef(props, 'hideHeader'))
const showFooterBoolean = useBooleanish(toRef(props, 'showFooter'))
</script>
