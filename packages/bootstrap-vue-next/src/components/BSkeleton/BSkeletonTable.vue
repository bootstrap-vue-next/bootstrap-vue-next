<template>
  <b-table-simple v-bind="tableProps">
    <thead v-if="!hideHeaderBoolean">
      <tr>
        <th v-for="(_th, i) in columns" :key="i">
          <b-skeleton />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(_tr, j) in rows" :key="j">
        <td v-for="(_td, k) in columns" :key="k">
          <b-skeleton width="75%" />
        </td>
      </tr>
    </tbody>
    <tfoot v-if="showFooterBoolean">
      <tr>
        <th v-for="(_th, l) in columns" :key="l">
          <b-skeleton />
        </th>
      </tr>
    </tfoot>
  </b-table-simple>
</template>

<script setup lang="ts">
// import type {BSkeletonTableProps} from '../../types/components'
import {toRef} from 'vue'
import type {Booleanish, SkeletonAnimation} from '../../types'
import {useBooleanish} from '../../composables'
import BTableSimple from '../BTable/BTableSimple.vue'
import BSkeleton from './BSkeleton.vue'

interface BSkeletonTableProps {
  animation?: SkeletonAnimation
  columns?: number
  hideHeader?: Booleanish
  rows?: number
  showFooter?: Booleanish
  tableProps?: Record<string, unknown>
}

const props = withDefaults(defineProps<BSkeletonTableProps>(), {
  animation: 'wave',
  columns: 5,
  hideHeader: false,
  rows: 3,
  showFooter: false,
})

const hideHeaderBoolean = useBooleanish(toRef(props, 'hideHeader'))
const showFooterBoolean = useBooleanish(toRef(props, 'showFooter'))
</script>
