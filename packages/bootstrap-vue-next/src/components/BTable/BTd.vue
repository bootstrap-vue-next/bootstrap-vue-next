<template>
  <td
    :scope="scope"
    :class="computedClasses"
    :colspan="props.colspan"
    :rowspan="props.rowspan"
    :data-label="props.stackedHeading"
  >
    <div v-if="props.stackedHeading">
      <slot />
    </div>
    <slot v-else />
  </td>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BTdProps} from '../../types'
import {computed, toRef} from 'vue'

const _props = withDefaults(defineProps<BTdProps>(), {
  colspan: undefined,
  rowspan: undefined,
  stackedHeading: undefined,
  stickyColumn: false,
  variant: null,
})
const props = useDefaults(_props, 'BTd')

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
