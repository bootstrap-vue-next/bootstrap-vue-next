<template>
  <DateRangeFieldRoot
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
    :is-date-unavailable="props.isDateUnavailable"
    :class="computedRootClasses"
    class="b-date-range-field form-control d-inline-flex align-items-center gap-0"
  >
    <slot :model-value="currentValue" :segments="segments" :is-invalid="isInvalid">
      <template v-for="{part, value} in segments.start" :key="`start-${part}`">
        <DateRangeFieldInput
          v-if="part === 'literal'"
          type="start"
          :part="part"
          class="b-date-range-field-literal"
        >
          {{ value }}
        </DateRangeFieldInput>
        <DateRangeFieldInput v-else type="start" :part="part" class="b-date-range-field-segment">
          {{ value }}
        </DateRangeFieldInput>
      </template>
      <span class="b-date-range-field-separator" aria-hidden="true"> – </span>
      <template v-for="{part, value} in segments.end" :key="`end-${part}`">
        <DateRangeFieldInput
          v-if="part === 'literal'"
          type="end"
          :part="part"
          class="b-date-range-field-literal"
        >
          {{ value }}
        </DateRangeFieldInput>
        <DateRangeFieldInput v-else type="end" :part="part" class="b-date-range-field-segment">
          {{ value }}
        </DateRangeFieldInput>
      </template>
    </slot>
  </DateRangeFieldRoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {DateRangeFieldInput, DateRangeFieldRoot} from 'reka-ui'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BDateRangeFieldSlots} from '../../types'
import type {BDateRangeFieldProps} from '../../types/ComponentProps'

const _props = withDefaults(
  defineProps<Omit<BDateRangeFieldProps, 'modelValue' | 'placeholder'>>(),
  {
    defaultPlaceholder: undefined,
    defaultValue: undefined,
    dir: undefined,
    disabled: false,
    granularity: undefined,
    hideTimeZone: undefined,
    hourCycle: undefined,
    id: undefined,
    isDateUnavailable: undefined,
    locale: undefined,
    maxValue: undefined,
    minValue: undefined,
    name: undefined,
    readonly: false,
    required: false,
    size: undefined,
    state: null,
    step: undefined,
  }
)
const props = useDefaults(_props, 'BDateRangeField')
defineSlots<BDateRangeFieldSlots>()

const modelValue = defineModel<Exclude<BDateRangeFieldProps['modelValue'], undefined>>({
  default: null,
})

const placeholderModel = defineModel<BDateRangeFieldProps['placeholder']>('placeholder')

const computedId = useId(() => props.id, 'date-range-field')

const computedRootClasses = computed(() => ({
  'disabled': props.disabled,
  'readonly': props.readonly,
  'is-valid': props.state === true,
  'is-invalid': props.state === false,
  [`form-control-${props.size}`]: props.size !== undefined,
}))
</script>
