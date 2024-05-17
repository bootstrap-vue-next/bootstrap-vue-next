<template>
  <component
    :is="props.tag"
    :id="props.id"
    :role="props.role"
    :aria-live="props.ariaLive"
    :aria-atomic="props.ariaLive ? true : undefined"
    :class="computedClasses"
  >
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'
import type {BFormFeedbackSharedProps} from '../../types'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BFormFeedbackSharedProps>(), {
  ariaLive: undefined,
  forceShow: false,
  id: undefined,
  role: undefined,
  state: null,
  tag: 'div',
  text: undefined,
  tooltip: false,
})
const props = useDefaults(_props, 'BFormInvalidFeedback')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedShow = toRef(() => props.forceShow === true || props.state === true)

const computedClasses = computed(() => ({
  'd-block': computedShow.value,
  'valid-feedback': !props.tooltip,
  'valid-tooltip': props.tooltip,
}))
</script>
