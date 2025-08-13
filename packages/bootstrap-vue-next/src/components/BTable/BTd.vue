<template>
  <td
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
import type {BTdSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BTdProps} from '../../types/ComponentProps'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BTdProps>(), {
  colspan: undefined,
  rowspan: undefined,
  stackedHeading: undefined,
  stickyColumn: false,
  variant: null,
})
const props = useDefaults(_props, 'BTd')
defineSlots<BTdSlots>()

const computedClasses = computed(() => ({
  [`table-${props.variant}`]: props.variant !== null,
  'b-table-sticky-column': props.stickyColumn,
  'table-b-table-default': props.stickyColumn && props.variant === null,
}))
</script>
