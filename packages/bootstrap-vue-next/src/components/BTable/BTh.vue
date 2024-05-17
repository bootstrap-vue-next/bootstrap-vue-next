<template>
  <th
    :scope="scope"
    :class="computedClasses"
    :colspan="props.colspan"
    :rowspan="props.rowspan"
    :data-label="props.stackedHeading"
  >
    <div v-if="props.stackedHeading !== undefined">
      <slot />
    </div>
    <slot v-else />
  </th>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BThProps} from '../../types'
import {computed, toRef} from 'vue'

const _props = withDefaults(defineProps<BThProps>(), {
  colspan: undefined,
  rowspan: undefined,
  stackedHeading: undefined,
  stickyColumn: false,
  variant: null,
})
const props = useDefaults(_props, 'BTh')

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
