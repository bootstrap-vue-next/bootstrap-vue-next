<template>
  <div class="progress" :style="{height}">
    <slot>
      <b-progress-bar v-bind="computedAttrs" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import BProgressBar from './BProgressBar.vue'
import type {Booleanish, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, provide, readonly, toRef} from 'vue'
import {progressInjectionKey} from '../../utils'

const props = withDefaults(
  defineProps<{
    variant?: ColorVariant | null
    max?: number | string
    height?: string
    animated?: Booleanish
    precision?: number | string
    showProgress?: Booleanish
    showValue?: Booleanish
    striped?: Booleanish
    value?: number | string
  }>(),
  {
    variant: undefined,
    max: 100,
    height: undefined,
    animated: false,
    precision: 0,
    showProgress: false,
    showValue: false,
    striped: false,
    value: 0,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const animatedBoolean = useBooleanish(() => props.animated)
const showProgressBoolean = useBooleanish(() => props.showProgress)
const showValueBoolean = useBooleanish(() => props.showValue)
const stripedBoolean = useBooleanish(() => props.striped)

const computedAttrs = computed(() => ({
  animated: props.animated,
  max: props.max,
  precision: props.precision,
  showProgress: props.showProgress,
  showValue: props.showValue,
  striped: props.striped,
  value: props.value,
  variant: props.variant,
}))

provide(progressInjectionKey, {
  animated: animatedBoolean,
  max: readonly(toRef(props, 'max')),
  showProgress: showProgressBoolean,
  showValue: showValueBoolean,
  striped: stripedBoolean,
})
</script>
