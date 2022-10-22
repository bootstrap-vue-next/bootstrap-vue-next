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
import type {BProgressParentData} from '../../types/components'
import {useBooleanish} from '../../composables'
import {computed, inject, toRef} from 'vue'
import {injectionKey} from './BProgress.vue'

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
  animated: false,
  precision: 0,
  showProgress: false,
  showValue: false,
  striped: false,
  value: 0,
})

const parent = inject<BProgressParentData>(injectionKey)

const animatedBoolean = useBooleanish(toRef(props, 'animated'))
const showProgressBoolean = useBooleanish(toRef(props, 'showProgress'))
const showValueBoolean = useBooleanish(toRef(props, 'showValue'))
const stripedBoolean = useBooleanish(toRef(props, 'striped'))

const computedClasses = computed(() => ({
  'progress-bar-animated': animatedBoolean.value || parent?.animated,
  'progress-bar-striped':
    stripedBoolean.value || parent?.striped || animatedBoolean.value || parent?.animated,
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
    : showValueBoolean.value || parent?.showValue
    ? numberValue.value.toFixed(numberPrecision.value)
    : showProgressBoolean.value || parent?.showProgress
    ? ((numberValue.value * 100) / (numberMax.value || 100)).toFixed(numberPrecision.value)
    : props.label !== undefined
    ? props.label
    : ''
)

const computedWidth = computed<string>(() =>
  parent?.max
    ? `${
        (numberValue.value * 100) /
        (typeof parent.max === 'number' ? parent.max : Number.parseInt(parent.max))
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
