<template>
  <component
    :is="tag"
    :id="id"
    :role="role"
    :aria-live="ariaLive"
    :aria-atomic="ariaLive ? true : undefined"
    :class="computedClasses"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'
import type {BFormFeedbackSharedProps} from '../../types'

const props = withDefaults(defineProps<BFormFeedbackSharedProps>(), {
  ariaLive: undefined,
  forceShow: false,
  id: undefined,
  role: undefined,
  state: null,
  tag: 'div',
  text: undefined,
  tooltip: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedShow = toRef(() => props.forceShow === true || props.state === false)

const computedClasses = computed(() => ({
  'd-block': computedShow.value,
  'invalid-feedback': !props.tooltip,
  'invalid-tooltip': props.tooltip,
}))
</script>
