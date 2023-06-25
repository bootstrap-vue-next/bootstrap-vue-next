<template>
  <component :is="tag" :class="computedClasses" v-bind="computedAttrs">
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
    id?: string
    text?: string
    role?: string
    state?: Booleanish | null
    tag?: string
    tooltip?: Booleanish
  }>(),
  {
    id: undefined,
    text: undefined,
    role: undefined,
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

const computedAttrs = computed(() => ({
  'id': props.id,
  'role': props.role,
  'aria-live': props.ariaLive,
  'aria-atomic': props.ariaLive ? true : undefined,
}))
</script>
