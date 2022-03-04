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
import BTableSimple from '../BTable/BTableSimple.vue'
import BSkeleton from './BSkeleton.vue'

defineProps({
  animation: {type: String, default: 'wave'},
  columns: {type: Number, default: 5},
  hideHeader: {type: Boolean, default: false},
  rows: {type: Number, default: 3},
  showFooter: {type: Boolean, default: false},
  tableProps: {type: Object},
})
</script>
