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
import type {BProgressBarProps} from '../../types'
import {useBackgroundVariant, useBooleanish} from '../../composables'
import {computed, inject} from 'vue'
import {progressInjectionKey} from '../../utils'
import {useToNumber} from '@vueuse/core'

const props = withDefaults(defineProps<BProgressBarProps>(), {
  label: undefined,
  labelHtml: undefined,
  max: undefined,
  variant: null,
  animated: false,
  precision: 0,
  showProgress: false,
  showValue: false,
  striped: false,
  value: 0,
  bgVariant: null,
  textVariant: null,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const parentData = inject(progressInjectionKey, null)

const animatedBoolean = useBooleanish(() => props.animated)
const showProgressBoolean = useBooleanish(() => props.showProgress)
const showValueBoolean = useBooleanish(() => props.showValue)
const stripedBoolean = useBooleanish(() => props.striped)
const resolvedBackgroundClasses = useBackgroundVariant(props)

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    'progress-bar-animated': animatedBoolean.value || parentData?.animated.value,
    'progress-bar-striped':
      stripedBoolean.value ||
      parentData?.striped.value ||
      animatedBoolean.value ||
      parentData?.animated.value,
  },
])

const numberPrecision = useToNumber(() => props.precision)
const numberValue = useToNumber(() => props.value)
const numberMax = useToNumber(computed(() => props.max ?? NaN))
const parentMaxNumber = useToNumber(computed(() => parentData?.max.value ?? NaN))

const computedLabel = computed(() =>
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
