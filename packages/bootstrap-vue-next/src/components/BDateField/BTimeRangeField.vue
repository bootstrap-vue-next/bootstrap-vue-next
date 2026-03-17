<template>
  <TimeRangeFieldRoot
    :id="computedId"
    v-slot="{segments, isInvalid, modelValue: currentValue}"
    v-model="modelValue"
    v-model:placeholder="placeholderModel"
    :default-value="props.defaultValue"
    :default-placeholder="props.defaultPlaceholder"
    :hour-cycle="props.hourCycle"
    :step="props.step"
    :granularity="props.granularity"
    :hide-time-zone="props.hideTimeZone"
    :max-value="props.maxValue"
    :min-value="props.minValue"
    :locale="props.locale"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :name="props.name"
    :required="props.required"
    :dir="props.dir"
    :is-time-unavailable="props.isTimeUnavailable"
    :class="computedRootClasses"
    class="b-time-range-field form-control d-inline-flex align-items-center gap-0"
  >
    <slot :model-value="currentValue" :segments="segments" :is-invalid="isInvalid">
      <template v-for="{part, value} in segments.start" :key="`start-${part}`">
        <TimeRangeFieldInput
          v-if="part === 'literal'"
          type="start"
          :part="part"
          class="b-time-range-field-literal"
        >
          {{ value }}
        </TimeRangeFieldInput>
        <TimeRangeFieldInput v-else type="start" :part="part" class="b-time-range-field-segment">
          {{ value }}
        </TimeRangeFieldInput>
      </template>
      <span class="b-time-range-field-separator" aria-hidden="true"> – </span>
      <template v-for="{part, value} in segments.end" :key="`end-${part}`">
        <TimeRangeFieldInput
          v-if="part === 'literal'"
          type="end"
          :part="part"
          class="b-time-range-field-literal"
        >
          {{ value }}
        </TimeRangeFieldInput>
        <TimeRangeFieldInput v-else type="end" :part="part" class="b-time-range-field-segment">
          {{ value }}
        </TimeRangeFieldInput>
      </template>
    </slot>
  </TimeRangeFieldRoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {TimeRangeFieldInput, TimeRangeFieldRoot} from 'reka-ui'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BTimeRangeFieldSlots} from '../../types'
import type {BTimeRangeFieldProps} from '../../types/ComponentProps'

const _props = withDefaults(
  defineProps<Omit<BTimeRangeFieldProps, 'modelValue' | 'placeholder'>>(),
  {
    defaultPlaceholder: undefined,
    defaultValue: undefined,
    dir: undefined,
    disabled: false,
    granularity: undefined,
    hideTimeZone: undefined,
    hourCycle: undefined,
    id: undefined,
    isTimeUnavailable: undefined,
    locale: undefined,
    maxValue: undefined,
    minValue: undefined,
    name: undefined,
    readonly: false,
    required: false,
    size: undefined,
    state: null,
    step: undefined,
    stepSnapping: false,
  }
)
const props = useDefaults(_props, 'BTimeRangeField')
defineSlots<BTimeRangeFieldSlots>()

const modelValue = defineModel<Exclude<BTimeRangeFieldProps['modelValue'], undefined>>({
  default: null,
})

const placeholderModel = defineModel<BTimeRangeFieldProps['placeholder']>('placeholder')

const computedId = useId(() => props.id, 'time-range-field')

const computedRootClasses = computed(() => ({
  'disabled': props.disabled,
  'readonly': props.readonly,
  'is-valid': props.state === true,
  'is-invalid': props.state === false,
  [`form-control-${props.size}`]: props.size !== undefined,
}))
</script>
