<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BFormInvalidFeedbackProps} from '../../types/components'
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'

interface BFormInvalidFeedbackProps {
  ariaLive?: string
  forceShow?: Booleanish
  id?: string
  role?: string
  state?: Booleanish
  tag?: string
  tooltip?: Booleanish
}

const props = withDefaults(defineProps<BFormInvalidFeedbackProps>(), {
  forceShow: false,
  tag: 'div',
  tooltip: false,
})

const forceShowBoolean = computed(() => resolveBooleanish(props.forceShow))
const stateBoolean = computed(() =>
  props.state !== undefined ? resolveBooleanish(props.state) : undefined
)
const tooltipBoolean = computed(() => resolveBooleanish(props.tooltip))

const computedShow = computed<boolean>(
  () => forceShowBoolean.value === true || stateBoolean.value === false
)

const classes = computed(() => ({
  'd-block': computedShow.value,
  'invalid-feedback': !tooltipBoolean.value,
  'invalid-tooltip': tooltipBoolean.value,
}))

const attrs = computed(() => ({
  'id': props.id || null,
  'role': props.role || null,
  'aria-live': props.ariaLive || null,
  'aria-atomic': props.ariaLive ? 'true' : null,
}))
</script>
