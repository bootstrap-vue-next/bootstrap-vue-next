<template>
  <DateFieldRoot
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
    class="b-date-field form-control d-inline-flex align-items-center gap-0"
  >
    <slot :model-value="currentValue" :segments="segments" :is-invalid="isInvalid">
      <template v-for="{part, value} in segments" :key="part">
        <DateFieldInput v-if="part === 'literal'" :part="part" class="b-date-field-literal">
          {{ value }}
        </DateFieldInput>
        <DateFieldInput v-else :part="part" class="b-date-field-segment">
          {{ value }}
        </DateFieldInput>
      </template>
    </slot>
  </DateFieldRoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {DateFieldInput, DateFieldRoot} from 'reka-ui'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BDateFieldSlots} from '../../types'
import type {BDateFieldProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<Omit<BDateFieldProps, 'modelValue' | 'placeholder'>>(), {
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
})
const props = useDefaults(_props, 'BDateField')
defineSlots<BDateFieldSlots>()

const modelValue = defineModel<Exclude<BDateFieldProps['modelValue'], undefined>>({
  default: null,
})

const placeholderModel = defineModel<BDateFieldProps['placeholder']>('placeholder')

const computedId = useId(() => props.id, 'date-field')

const computedRootClasses = computed(() => ({
  'disabled': props.disabled,
  'readonly': props.readonly,
  'is-valid': props.state === true,
  'is-invalid': props.state === false,
  [`form-control-${props.size}`]: props.size !== undefined,
}))
</script>
