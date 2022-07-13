<template>
  <th
    role="columnheader"
    :scope="scope"
    :class="classes"
    :colspan="colspan"
    :rowspan="rowspan"
    :data-label="stackedHeading"
  >
    <div v-if="stackedHeading">
      <slot />
    </div>
    <slot v-else />
  </th>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  colspan: {type: [String, Number]},
  rowspan: {type: [String, Number]},
  stackedHeading: {type: String},
  stickyColumn: {type: Boolean, default: false},
  variant: {type: String},
})

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
  'b-table-sticky-column': props.stickyColumn,
  'table-b-table-default': props.stickyColumn && !props.variant,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>
