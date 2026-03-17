<template>
  <TimeFieldRoot
    :id="computedId"
    v-slot="{segments, isInvalid, modelValue: currentValue}"
    v-model="modelValue"
    :default-value="props.defaultValue"
    :default-placeholder="props.defaultPlaceholder"
    :placeholder="props.placeholder"
    :hour-cycle="props.hourCycle"
    :step="props.step"
    :step-snapping="props.stepSnapping"
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
    :class="computedRootClasses"
    class="b-time-field form-control d-inline-flex align-items-center gap-0"
    @update:placeholder="(val: TimeValue) => emit('update:placeholder', val)"
  >
    <slot :model-value="currentValue" :segments="segments" :is-invalid="isInvalid">
      <template v-for="{part, value} in segments" :key="part">
        <TimeFieldInput v-if="part === 'literal'" :part="part" class="b-time-field-literal">
          {{ value }}
        </TimeFieldInput>
        <TimeFieldInput v-else :part="part" class="b-time-field-segment">
          {{ value }}
        </TimeFieldInput>
      </template>
    </slot>
  </TimeFieldRoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {TimeFieldInput, TimeFieldRoot, type TimeValue} from 'reka-ui'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BTimeFieldEmits, BTimeFieldSlots} from '../../types'
import type {BTimeFieldProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<Omit<BTimeFieldProps, 'modelValue'>>(), {
  defaultPlaceholder: undefined,
  defaultValue: undefined,
  dir: undefined,
  disabled: false,
  granularity: undefined,
  hideTimeZone: undefined,
  hourCycle: undefined,
  id: undefined,
  locale: undefined,
  maxValue: undefined,
  minValue: undefined,
  name: undefined,
  placeholder: undefined,
  readonly: false,
  required: false,
  size: undefined,
  state: null,
  step: undefined,
  stepSnapping: false,
})
const props = useDefaults(_props, 'BTimeField')
const emit = defineEmits<BTimeFieldEmits>()
defineSlots<BTimeFieldSlots>()

const modelValue = defineModel<Exclude<BTimeFieldProps['modelValue'], undefined>>({
  default: null,
})

const computedId = useId(() => props.id, 'time-field')

const computedRootClasses = computed(() => ({
  'disabled': props.disabled,
  'readonly': props.readonly,
  'is-valid': props.state === true,
  'is-invalid': props.state === false,
  [`form-control-${props.size}`]: props.size !== undefined,
}))
</script>
