<template>
  <div
    class="progress-bar"
    :class="computedClasses"
    role="progressbar"
    :aria-valuenow="props.value"
    aria-valuemin="0"
    :aria-valuemax="props.max"
    :style="{width: computedWidth}"
  >
    <slot>
      {{ computedLabel }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import type {BProgressBarProps} from '../../types'
import {useColorVariantClasses, useDefaults} from '../../composables'
import {computed, inject} from 'vue'
import {progressInjectionKey} from '../../utils'
import {useToNumber} from '@vueuse/core'

const _props = withDefaults(defineProps<BProgressBarProps>(), {
  animated: false,
  bgVariant: null,
  label: undefined,
  labelHtml: undefined,
  max: undefined,
  precision: 0,
  showProgress: false,
  showValue: false,
  striped: false,
  textVariant: null,
  value: 0,
  variant: null,
})
const props = useDefaults(_props, 'BProgressBar')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const parentData = inject(progressInjectionKey, null)

const resolvedBackgroundClasses = useColorVariantClasses(props)

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    'progress-bar-animated': props.animated || parentData?.animated.value,
    'progress-bar-striped':
      props.striped || parentData?.striped.value || props.animated || parentData?.animated.value,
  },
])

const numberPrecision = useToNumber(() => props.precision)
const numberValue = useToNumber(() => props.value)
const numberMax = useToNumber(() => props.max ?? NaN)
const parentMaxNumber = useToNumber(() => parentData?.max.value ?? NaN)

const computedLabel = computed(() =>
  props.labelHtml !== undefined
    ? props.labelHtml
    : props.showValue || parentData?.showValue.value
      ? numberValue.value.toFixed(numberPrecision.value)
      : props.showProgress || parentData?.showProgress.value
        ? ((numberValue.value * 100) / (numberMax.value || 100)).toFixed(numberPrecision.value)
        : props.label !== undefined
          ? props.label
          : ''
)

const computedWidth = computed(() =>
  parentMaxNumber.value
    ? `${(numberValue.value * 100) / parentMaxNumber.value}%`
    : numberMax.value
      ? `${(numberValue.value * 100) / numberMax.value}%`
      : typeof props.value === 'string'
        ? props.value
        : `${props.value}%`
)
</script>
