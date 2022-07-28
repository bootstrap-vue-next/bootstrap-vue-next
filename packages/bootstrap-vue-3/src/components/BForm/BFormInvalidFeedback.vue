<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BFormInvalidFeedbackProps} from '../../types/components'
import {computed} from 'vue'

interface BFormInvalidFeedbackProps {
  ariaLive?: string
  forceShow?: boolean
  id?: string
  role?: string
  state?: boolean
  tag?: string
  tooltip?: boolean
}

const props = withDefaults(defineProps<BFormInvalidFeedbackProps>(), {
  forceShow: false,
  state: undefined,
  tag: 'div',
  tooltip: false,
})

const computedShow = computed<boolean>(() => props.forceShow === true || props.state === false)

const classes = computed(() => ({
  'd-block': computedShow.value,
  'invalid-feedback': !props.tooltip,
  'invalid-tooltip': props.tooltip,
}))

const attrs = computed(() => ({
  'id': props.id || null,
  'role': props.role || null,
  'aria-live': props.ariaLive || null,
  'aria-atomic': props.ariaLive ? 'true' : null,
}))
</script>
