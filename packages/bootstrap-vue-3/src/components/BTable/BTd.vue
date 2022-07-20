<template>
  <td
    role="cell"
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
  </td>
</template>

<script setup lang="ts">
import {computed} from 'vue'

interface BTdProps {
  colspan?: string | number
  rowspan?: string | number
  stackedHeading?: string
  stickyColumn?: boolean
  variant?: string
}

const props = withDefaults(defineProps<BTdProps>(), {
  stickyColumn: false,
})

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
  'b-table-sticky-column': props.stickyColumn,
  'table-b-table-default': props.stickyColumn && !props.variant,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))
</script>
