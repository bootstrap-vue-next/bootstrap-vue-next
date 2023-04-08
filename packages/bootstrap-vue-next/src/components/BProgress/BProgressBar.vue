<template>
  <div
    class="progress-bar"
    :class="computedClasses"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    :aria-valuemax="max"
    :style="{width: computedWidth}"
  >
    <slot>
      {{ computedLabel }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import type {Booleanish, ColorVariant} from '../../types'
import {useBooleanish} from '../../composables'
import {computed, inject, toRef} from 'vue'
import {progressInjectionKey} from '../../utils'

interface Props {
  animated?: Booleanish
  label?: string
  labelHtml?: string
  max?: string | number
  precision?: string | number
  showProgress?: Booleanish
  showValue?: Booleanish
  striped?: Booleanish
  value?: string | number
  variant?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  labelHtml: undefined,
  max: undefined,
  variant: undefined,
  animated: false,
  precision: 0,
  showProgress: false,
  showValue: false,
  striped: false,
  value: 0,
})

const parentData = inject(progressInjectionKey, null)

const animatedBoolean = useBooleanish(toRef(props, 'animated'))
const showProgressBoolean = useBooleanish(toRef(props, 'showProgress'))
const showValueBoolean = useBooleanish(toRef(props, 'showValue'))
const stripedBoolean = useBooleanish(toRef(props, 'striped'))

const computedClasses = computed(() => ({
  'progress-bar-animated': animatedBoolean.value || parentData?.animated.value,
  'progress-bar-striped':
    stripedBoolean.value ||
    parentData?.striped.value ||
    animatedBoolean.value ||
    parentData?.animated.value,
  [`bg-${props.variant}`]: props.variant !== undefined,
}))

const numberPrecision = computed<number>(() =>
  typeof props.precision === 'number' ? props.precision : Number.parseFloat(props.precision)
)

const numberValue = computed<number>(() =>
  typeof props.value === 'number' ? props.value : Number.parseFloat(props.value)
)

const numberMax = computed<number | undefined>(() =>
  typeof props.max === 'number'
    ? props.max
    : props.max === undefined
    ? undefined
    : Number.parseFloat(props.max)
)

const computedLabel = computed<string>(() =>
  props.labelHtml !== undefined
    ? props.labelHtml
    : showValueBoolean.value || parentData?.showValue.value
    ? numberValue.value.toFixed(numberPrecision.value)
    : showProgressBoolean.value || parentData?.showProgress.value
    ? ((numberValue.value * 100) / (numberMax.value || 100)).toFixed(numberPrecision.value)
    : props.label !== undefined
    ? props.label
    : ''
)

const computedWidth = computed<string>(() =>
  parentData?.max.value
    ? `${
        (numberValue.value * 100) /
        (typeof parentData.max.value === 'number'
          ? parentData.max.value
          : Number.parseInt(parentData.max.value))
      }%`
    : props.max
    ? `${
        (numberValue.value * 100) /
        (typeof props.max === 'number' ? props.max : Number.parseInt(props.max))
      }%`
    : typeof props.value === 'string'
    ? props.value
    : `${props.value}%`
)
</script>
