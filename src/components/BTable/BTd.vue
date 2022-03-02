<template>
  <Render />
</template>

<script setup lang="ts">
import {computed, h, useSlots, VNode} from 'vue'

const props = defineProps({
  colspan: {type: [String, Number]},
  rowspan: {type: [String, Number]},
  stackedHeading: {type: String},
  stickyColumn: {type: Boolean, default: false},
  variant: {type: String},
})

const slots = useSlots()

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
  'b-table-sticky-column': props.stickyColumn,
  'table-b-table-default': props.stickyColumn && !props.variant,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))

let content: VNode[] | VNode | undefined = slots.default?.()

if (props.stackedHeading) {
  content = h('div', content)
}

const Render = h(
  'td',
  {
    'role': 'cell',
    'scope': scope.value,
    'class': classes.value,
    'colspan': props.colspan,
    'rowspan': props.rowspan,
    'data-label': props.stackedHeading,
  },
  content
)
</script>
