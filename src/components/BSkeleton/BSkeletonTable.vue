<template>
  <b-table-simple v-bind="tableProps">
    <thead v-if="!hideHeader">
      <tr>
        <th v-for="(th, i) in columns" :key="i">
          <b-skeleton />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, j) in rows" :key="j">
        <td v-for="(td, k) in columns" :key="k">
          <b-skeleton width="75%" />
        </td>
      </tr>
    </tbody>
    <tfoot v-if="showFooter">
      <tr>
        <th v-for="(th, l) in columns" :key="l">
          <b-skeleton />
        </th>
      </tr>
    </tfoot>
  </b-table-simple>
</template>

<script setup lang="ts">
// import type {BSkeletonTableProps} from '../../types/components'
import type {SkeletonAnimation} from '../../types'
import BTableSimple from '../BTable/BTableSimple.vue'
import BSkeleton from './BSkeleton.vue'

interface BSkeletonTableProps {
  animation?: SkeletonAnimation
  columns?: number
  hideHeader?: boolean
  rows?: number
  showFooter?: boolean
  tableProps?: Record<string, unknown>
}

withDefaults(defineProps<BSkeletonTableProps>(), {
  animation: 'wave',
  columns: 5,
  hideHeader: false,
  rows: 3,
  showFooter: false,
})
</script>
