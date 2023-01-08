<template>
  <td
    role="cell"
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
import type {Booleanish, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'

interface BTdProps {
  colspan?: string | number
  rowspan?: string | number
  stackedHeading?: string
  stickyColumn?: Booleanish
  variant?: ColorVariant
}

const props = withDefaults(defineProps<BTdProps>(), {
  stickyColumn: false,
})

const stickyColumnBoolean = useBooleanish(toRef(props, 'stickyColumn'))

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== undefined,
  'b-table-sticky-column': stickyColumnBoolean.value,
  'table-b-table-default': stickyColumnBoolean.value && props.variant === undefined,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>
