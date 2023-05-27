<template>
  <component
    :is="tag"
    :id="id"
    :role="role"
    :aria-live="ariaLive"
    :aria-atomic="computedAriaAtomic"
    :class="computedClasses"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

interface BFormValidFeedbackProps {
  ariaLive?: string
  forceShow?: Booleanish
  id?: string
  role?: string
  text?: string
  state?: Booleanish | null
  tag?: string
  tooltip?: Booleanish
}

const props = withDefaults(defineProps<BFormValidFeedbackProps>(), {
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

const computedAriaAtomic = computed(() => (props.ariaLive ? true : undefined))
</script>
