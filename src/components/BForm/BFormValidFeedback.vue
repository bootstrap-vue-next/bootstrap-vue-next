<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BFormValidFeedbackProps} from '../../types/components'
import {computed} from 'vue'

interface BFormValidFeedbackProps {
  ariaLive?: string
  forceShow?: boolean
  id?: string
  role?: string
  state?: boolean
  tag?: string
  tooltip?: boolean
}

const props = withDefaults(defineProps<BFormValidFeedbackProps>(), {
  forceShow: false,
  state: undefined,
  tag: 'div',
  tooltip: false,
})

const computedShow = computed<boolean>(() => props.forceShow === true || props.state === true)

const classes = computed(() => ({
  'd-block': computedShow.value,
  'valid-feedback': !props.tooltip,
  'valid-tooltip': props.tooltip,
}))

const attrs = computed(() => ({
  'id': props.id || null,
  'role': props.role || null,
  'aria-live': props.ariaLive || null,
  'aria-atomic': props.ariaLive ? 'true' : null,
}))
</script>
