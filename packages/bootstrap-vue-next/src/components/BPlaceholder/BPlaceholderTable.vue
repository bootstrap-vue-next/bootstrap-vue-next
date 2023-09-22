<template>
  <BTableSimple>
    <slot v-if="!hideHeaderBoolean" name="thead">
      <thead>
        <tr>
          <th v-for="(_, i) in computedHeaderColumnsLength" :key="i">
            <BPlaceholder
              :size="headerSize"
              :variant="headerVariant"
              :animation="headerAnimation"
              :width="headerCellWidth"
            />
          </th>
        </tr>
      </thead>
    </slot>
    <slot>
      <tbody>
        <tr v-for="(_, j) in rowsNumber" :key="j">
          <td v-for="(__, k) in columnsNumber" :key="k">
            <BPlaceholder
              :size="size"
              :variant="variant"
              :animation="animation"
              :width="cellWidth"
            />
          </td>
        </tr>
      </tbody>
    </slot>
    <slot v-if="showFooterBoolean" name="tfoot">
      <tfoot>
        <tr>
          <th v-for="(_, l) in computedFooterColumnsLength" :key="l">
            <BPlaceholder
              :size="footerSize"
              :variant="footerVariant"
              :animation="footerAnimation"
              :width="footerCellWidth"
            />
          </th>
        </tr>
      </tfoot>
    </slot>
  </BTableSimple>
</template>

<script setup lang="ts">
import {toRef} from 'vue'
import type {Booleanish, ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'
import {useBooleanish} from '../../composables'
import BTableSimple from '../BTable/BTableSimple.vue'
import BPlaceholder from './BPlaceholder.vue'
import {useToNumber} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    rows?: string | number
    columns?: string | number
    cellWidth?: string | number
    size?: PlaceholderSize
    animation?: PlaceholderAnimation
    variant?: ColorVariant | null
    headerColumns?: string | number
    hideHeader?: Booleanish
    headerCellWidth?: string | number
    headerSize?: PlaceholderSize
    headerAnimation?: PlaceholderAnimation
    headerVariant?: ColorVariant | null
    footerColumns?: string | number
    showFooter?: Booleanish
    footerCellWidth?: string | number
    footerSize?: PlaceholderSize
    footerAnimation?: PlaceholderAnimation
    footerVariant?: ColorVariant | null
  }>(),
  {
    headerSize: 'md',
    headerAnimation: undefined,
    headerVariant: undefined,
    footerColumns: undefined,
    footerSize: 'md',
    footerAnimation: undefined,
    footerVariant: undefined,
    size: 'md',
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
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thead?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tfoot?: (props: Record<string, never>) => any
}>()

const columnsToNumber = useToNumber(() => props.columns)
const rowsToNumber = useToNumber(() => props.rows)
const computedHeaderColumns = toRef(() => props.headerColumns ?? NaN)
const computedFooterColumns = toRef(() => props.footerColumns ?? NaN)
const headerColumnsNumber = useToNumber(computedHeaderColumns)
const footerColumnsNumber = useToNumber(computedFooterColumns)

const columnsNumber = toRef(() => columnsToNumber.value || 5)
const rowsNumber = toRef(() => rowsToNumber.value || 3)

const computedHeaderColumnsLength = toRef(() =>
  props.headerColumns === undefined ? columnsNumber.value : headerColumnsNumber.value
)
const computedFooterColumnsLength = toRef(() =>
  props.footerColumns === undefined ? columnsNumber.value : footerColumnsNumber.value
)

const hideHeaderBoolean = useBooleanish(() => props.hideHeader)
const showFooterBoolean = useBooleanish(() => props.showFooter)
</script>
