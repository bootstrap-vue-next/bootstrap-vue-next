<template>
  <component :is="tag" :class="computedClasses" v-bind="computedAttrs">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BFormInvalidFeedbackProps} from '../../types/components'
import {computed, toRef} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

interface BFormInvalidFeedbackProps {
  ariaLive?: string
  forceShow?: Booleanish
  id?: string
  text?: string
  role?: string
  state?: Booleanish
  tag?: string
  tooltip?: Booleanish
}

const props = withDefaults(defineProps<BFormInvalidFeedbackProps>(), {
  forceShow: false,
  tag: 'div',
  state: undefined,
  tooltip: false,
})

const forceShowBoolean = useBooleanish(toRef(props, 'forceShow'))
const stateBoolean = useBooleanish(toRef(props, 'state'))
const tooltipBoolean = useBooleanish(toRef(props, 'tooltip'))

const computedShow = computed<boolean>(
  () => forceShowBoolean.value === true || stateBoolean.value === false
)

const computedClasses = computed(() => ({
  'd-block': computedShow.value,
  'invalid-feedback': !tooltipBoolean.value,
  'invalid-tooltip': tooltipBoolean.value,
}))

const computedAttrs = computed(() => ({
  'id': props.id,
  'role': props.role,
  'aria-live': props.ariaLive,
  'aria-atomic': props.ariaLive ? 'true' : undefined,
}))
</script>
