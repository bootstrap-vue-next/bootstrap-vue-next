<template>
  <b-table-simple v-bind="tableProps">
    <thead v-if="!hideHeaderBoolean">
      <tr>
        <th v-for="(_, i) in headerColumns ?? columns" :key="i">
          <b-placeholder v-bind="placeholderAttrs" :width="headerWidth" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(_, j) in rows" :key="j">
        <td v-for="(__, k) in columns" :key="k">
          <b-placeholder v-bind="placeholderAttrs" :width="cellWidth" />
        </td>
      </tr>
    </tbody>
    <tfoot v-if="showFooterBoolean">
      <tr>
        <th v-for="(_, l) in footerColumns ?? columns" :key="l">
          <b-placeholder v-bind="placeholderAttrs" :width="footerWidth" />
        </th>
      </tr>
    </tfoot>
  </b-table-simple>
</template>

<script setup lang="ts">
// import type {BSkeletonTableProps} from '../../types/components'
import {computed, toRef} from 'vue'
import type {Booleanish, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import BTableSimple from '../BTable/BTableSimple.vue'
import BPlaceholder from './BPlaceholder.vue'

interface BSkeletonTableProps {
  animation?: 'wave' | 'glow'
  columns?: number
  hideHeader?: Booleanish
  rows?: number
  showFooter?: Booleanish
  variant?: ColorVariant
  size?: 'xs' | 'sm' | 'lg'
  tableProps?: Record<string, unknown>
  footerWidth?: string | number
  headerWidth?: string | number
  cellWidth?: string | number
  headerColumns?: number
  footerColumns?: number
}

const props = withDefaults(defineProps<BSkeletonTableProps>(), {
  columns: 5,
  hideHeader: false,
  rows: 3,
  showFooter: false,
  cellWidth: 100,
  footerWidth: 100,
  headerWidth: 100,
})

const placeholderAttrs = computed(() => ({
  size: props.size,
  variant: props.variant,
  animation: props.animation,
}))

const hideHeaderBoolean = useBooleanish(toRef(props, 'hideHeader'))
const showFooterBoolean = useBooleanish(toRef(props, 'showFooter'))
</script>
