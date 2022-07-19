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

interface BThProps {
  colspan?: string | number
  rowspan?: string | number
  stackedHeading?: string
  stickyColumn?: boolean
  variant?: string
}

const props = withDefaults(defineProps<BThProps>(), {
  stickyColumn: false,
})

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
  'b-table-sticky-column': props.stickyColumn,
  'table-b-table-default': props.stickyColumn && !props.variant,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>

<script lang="ts">
export default {
  name: 'BTh',
}
</script>
