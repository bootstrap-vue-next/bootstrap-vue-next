<template>
  <th
    role="columnheader"
    :scope="scope"
    :class="classes"
    :colspan="colspan"
    :rowspan="rowspan"
    :data-label="stackedHeading"
  >
    <slot />
  </th>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  colspan: {type: String},
  rowspan: {type: String},
  stackedHeading: {type: String},
  variant: {type: String},
})

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>
