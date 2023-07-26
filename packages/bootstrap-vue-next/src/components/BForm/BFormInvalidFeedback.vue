<template>
  <component
    :is="tag"
    :class="computedClasses"
    :aria-live="ariaLive"
    :aria-atomic="ariaLive ? true : undefined"
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

const props = withDefaults(
  defineProps<{
    ariaLive?: string
    forceShow?: Booleanish
    text?: string
    state?: Booleanish | null
    tag?: string
    tooltip?: Booleanish
  }>(),
  {
    text: undefined,
    ariaLive: undefined,
    forceShow: false,
    tag: 'div',
    state: null,
    tooltip: false,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const forceShowBoolean = useBooleanish(() => props.forceShow)
const stateBoolean = useBooleanish(() => props.state)
const tooltipBoolean = useBooleanish(() => props.tooltip)

const computedShow = computed<boolean>(
  () => forceShowBoolean.value === true || stateBoolean.value === false
)

const computedClasses = computed(() => ({
  'd-block': computedShow.value,
  'invalid-feedback': !tooltipBoolean.value,
  'invalid-tooltip': tooltipBoolean.value,
}))
</script>
