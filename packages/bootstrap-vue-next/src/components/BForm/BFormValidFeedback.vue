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
// import type {BFormValidFeedbackProps} from '../../types/components'
import {computed, toRef} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

interface BFormValidFeedbackProps {
  ariaLive?: string
  forceShow?: Booleanish
  id?: string
  role?: string
  text?: string
  state?: Booleanish
  tag?: string
  tooltip?: Booleanish
}

const props = withDefaults(defineProps<BFormValidFeedbackProps>(), {
  forceShow: false,
  tag: 'div',
  tooltip: false,
  state: undefined,
})

const forceShowBoolean = useBooleanish(toRef(props, 'forceShow'))
const stateBoolean = useBooleanish(toRef(props, 'state'))
const tooltipBoolean = useBooleanish(toRef(props, 'tooltip'))

const computedShow = computed<boolean>(
  () => forceShowBoolean.value === true || stateBoolean.value === true
)

const computedClasses = computed(() => ({
  'd-block': computedShow.value,
  'valid-feedback': !tooltipBoolean.value,
  'valid-tooltip': tooltipBoolean.value,
}))

const computedAriaAtomic = computed(() => (props.ariaLive ? 'true' : undefined))
</script>
