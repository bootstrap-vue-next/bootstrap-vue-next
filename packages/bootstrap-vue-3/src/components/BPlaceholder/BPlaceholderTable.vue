<template>
  <b-table-simple>
    <slot name="thead">
      <thead v-if="!hideHeaderBoolean">
        <tr>
          <th v-for="(_, i) in headerColumns ?? columns" :key="i">
            <b-placeholder v-bind="headerAttrs" />
          </th>
        </tr>
      </thead>
    </slot>
    <slot>
      <tbody>
        <tr v-for="(_, j) in rows" :key="j">
          <td v-for="(__, k) in columns" :key="k">
            <b-placeholder v-bind="placeholderAttrs" />
          </td>
        </tr>
      </tbody>
    </slot>
    <slot name="tfoot">
      <tfoot v-if="showFooterBoolean">
        <tr>
          <th v-for="(_, l) in footerColumns ?? columns" :key="l">
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

interface BSkeletonTableProps {
  rows?: number

  columns?: number
  cellWidth?: string | number
  size?: PlaceholderSize
  animation?: PlaceholderAnimation
  variant?: ColorVariant

  headerColumns?: number
  hideHeader?: Booleanish
  headerCellWidth?: string | number
  headerSize?: PlaceholderSize
  headerAnimation?: PlaceholderAnimation
  headerVariant?: ColorVariant

  footerColumns?: number
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
