<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BFormValidFeedbackProps} from '../../types/components'
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'

interface BFormValidFeedbackProps {
  ariaLive?: string
  forceShow?: Booleanish
  id?: string
  role?: string
  state?: Booleanish
  tag?: string
  tooltip?: Booleanish
}

const props = withDefaults(defineProps<BFormValidFeedbackProps>(), {
  forceShow: false,
  tag: 'div',
  tooltip: false,
})

const forceShowBoolean = computed<boolean>(() => resolveBooleanish(props.forceShow))
const stateBoolean = computed(() =>
  props.state !== undefined ? resolveBooleanish(props.state) : undefined
)
const tooltipBoolean = computed<boolean>(() => resolveBooleanish(props.tooltip))

const computedShow = computed<boolean>(
  () => forceShowBoolean.value === true || stateBoolean.value === true
)

const classes = computed(() => ({
  'd-block': computedShow.value,
  'valid-feedback': !tooltipBoolean.value,
  'valid-tooltip': tooltipBoolean.value,
}))

const attrs = computed(() => ({
  'id': props.id || null,
  'role': props.role || null,
  'aria-live': props.ariaLive || null,
  'aria-atomic': props.ariaLive ? 'true' : null,
}))
</script>
