<template>
  <td
    :scope="scope"
    :class="computedClasses"
    :colspan="colspan"
    :rowspan="rowspan"
    :data-label="stackedHeading"
  >
    <div v-if="stackedHeading">
      <slot />
    </div>
    <slot v-else />
  </td>
</template>

<script setup lang="ts">
import type {ColorVariant, Numberish} from '../../types'
import {computed, toRef} from 'vue'

const props = withDefaults(
  defineProps<{
    colspan?: Numberish
    rowspan?: Numberish
    stackedHeading?: string
    stickyColumn?: boolean
    variant?: ColorVariant | null
  }>(),
  {
    colspan: undefined,
    rowspan: undefined,
    stackedHeading: undefined,
    stickyColumn: false,
    variant: null,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
  'b-table-sticky-column': props.stickyColumn,
  'table-b-table-default': props.stickyColumn && props.variant === null,
}))

const scope = toRef(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>
