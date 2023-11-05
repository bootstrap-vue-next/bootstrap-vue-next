<template>
  <th
    :scope="scope"
    :class="computedClasses"
    :colspan="colspan"
    :rowspan="rowspan"
    :data-label="stackedHeading"
  >
    <div v-if="stackedHeading !== undefined">
      <slot />
    </div>
    <slot v-else />
  </th>
</template>

<script setup lang="ts">
import type {Booleanish, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'

const props = withDefaults(
  defineProps<{
    colspan?: string | number
    rowspan?: string | number
    stackedHeading?: string
    stickyColumn?: Booleanish
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

const stickyColumnBoolean = useBooleanish(() => props.stickyColumn)

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
  'b-table-sticky-column': stickyColumnBoolean.value,
  'table-b-table-default': stickyColumnBoolean.value && props.variant === null,
}))

const scope = toRef(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>
