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
    animation?: PlaceholderAnimation
    cellWidth?: string | number
    columns?: string | number
    footerAnimation?: PlaceholderAnimation
    footerCellWidth?: string | number
    footerColumns?: string | number
    footerSize?: PlaceholderSize
    footerVariant?: ColorVariant | null
    headerAnimation?: PlaceholderAnimation
    headerCellWidth?: string | number
    headerColumns?: string | number
    headerSize?: PlaceholderSize
    headerVariant?: ColorVariant | null
    hideHeader?: Booleanish
    rows?: string | number
    showFooter?: Booleanish
    size?: PlaceholderSize
    variant?: ColorVariant | null
  }>(),
  {
    animation: undefined,
    cellWidth: 100,
    columns: 5,
    footerAnimation: undefined,
    footerCellWidth: 100,
    footerColumns: undefined,
    footerSize: 'md',
    footerVariant: undefined,
    headerAnimation: undefined,
    headerCellWidth: 100,
    headerColumns: undefined,
    headerSize: 'md',
    headerVariant: undefined,
    hideHeader: false,
    rows: 3,
    showFooter: false,
    size: 'md',
    variant: undefined,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tfoot?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thead?: (props: Record<string, never>) => any
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
