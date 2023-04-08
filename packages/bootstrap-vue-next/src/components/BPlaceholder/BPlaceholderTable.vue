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
import {computed, toRef} from 'vue'
import type {Booleanish, ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'
import {useBooleanish} from '../../composables'
import BTableSimple from '../BTable/BTableSimple.vue'
import BPlaceholder from './BPlaceholder.vue'
import {useToNumber} from '@vueuse/core'

interface BPlaceholderTableProps {
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

const props = withDefaults(defineProps<BPlaceholderTableProps>(), {
  headerSize: undefined,
  headerAnimation: undefined,
  headerVariant: undefined,
  footerColumns: undefined,
  footerSize: undefined,
  footerAnimation: undefined,
  footerVariant: undefined,
  size: undefined,
  animation: undefined,
  variant: undefined,
  headerColumns: undefined,
  columns: 5,
  rows: 3,
  cellWidth: 100,
  showFooter: false,
  footerCellWidth: 100,
  hideHeader: false,
  headerCellWidth: 100,
})

const columnsToNumber = useToNumber(toRef(props, 'columns'), {nanToZero: true, method: 'parseInt'})
const rowsToNumber = useToNumber(toRef(props, 'rows'), {nanToZero: true, method: 'parseInt'})
const computedHeaderColumns = computed(() => props.headerColumns ?? NaN)
const computedFooterColumns = computed(() => props.footerColumns ?? NaN)
const headerColumns = useToNumber(computedHeaderColumns, {
  nanToZero: true,
  method: 'parseInt',
})
const footerColumns = useToNumber(computedFooterColumns, {
  nanToZero: true,
  method: 'parseInt',
})

const columnsNumber = computed<number>(() => columnsToNumber.value || 5)
const rowsNumber = computed<number>(() => rowsToNumber.value || 3)

const computedHeaderColumnsLength = computed<number>(() =>
  props.headerColumns === undefined ? columnsNumber.value : headerColumns.value
)
const computedFooterColumnsLength = computed<number>(() =>
  props.footerColumns === undefined ? columnsNumber.value : footerColumns.value
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
