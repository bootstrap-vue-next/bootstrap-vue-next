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
import type {Booleanish, ColorVariant} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed} from 'vue'

interface BThProps {
  colspan?: string | number
  rowspan?: string | number
  stackedHeading?: string
  stickyColumn?: Booleanish
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BThProps>(), {
  stickyColumn: false,
})

const stickyColumnBoolean = computed(() => resolveBooleanish(props.stickyColumn))

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
  'b-table-sticky-column': stickyColumnBoolean.value,
  'table-b-table-default': stickyColumnBoolean.value && !props.variant,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>
