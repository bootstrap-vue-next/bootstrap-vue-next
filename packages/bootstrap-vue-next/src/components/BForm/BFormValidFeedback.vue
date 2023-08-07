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
import {computed} from 'vue'
import type {BFormFeedbackSharedProps} from '../../types'
import {useBooleanish} from '../../composables'

const props = withDefaults(defineProps<BFormFeedbackSharedProps>(), {
  id: undefined,
  role: undefined,
  text: undefined,
  ariaLive: undefined,
  forceShow: false,
  tag: 'div',
  tooltip: false,
  state: null,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const forceShowBoolean = useBooleanish(() => props.forceShow)
const stateBoolean = useBooleanish(() => props.state)
const tooltipBoolean = useBooleanish(() => props.tooltip)

const computedShow = computed<boolean>(
  () => forceShowBoolean.value === true || stateBoolean.value === true
)

const computedClasses = computed(() => ({
  'd-block': computedShow.value,
  'valid-feedback': !tooltipBoolean.value,
  'valid-tooltip': tooltipBoolean.value,
}))
</script>
