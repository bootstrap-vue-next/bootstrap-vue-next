<template>
  <Render />
</template>

<script setup lang="ts">
import {computed, h, useSlots} from 'vue'

const props = defineProps({
  colspan: {type: String},
  rowspan: {type: String},
  stackedHeading: {type: String},
  variant: {type: String},
})

const slots = useSlots()

const classes = computed(() => ({
  [`table-${props.variant}`]: props.variant,
}))

const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))

// TODO: type correctly
let content: any = slots.default?.()

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
