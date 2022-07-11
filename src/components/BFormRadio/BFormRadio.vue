<template>
  <div :class="classes">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="radio"
      :disabled="disabled"
      :required="!!name && !!required"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :value="value"
      :aria-required="name && required ? true : undefined"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <label
      v-if="$slots.default || !plain"
      :for="computedId"
      :class="[labelClasses, {active: isChecked, focus: isFocused}]"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
// import type {BFormRadioEmits, BFormRadioProps} from '../../types/components'
import type {ButtonVariant} from '../../types'
import {getClasses, getInputClasses, getLabelClasses} from '../../composables/useFormCheck'
import {computed, onMounted, ref} from 'vue'
import useId from '../../composables/useId'

interface BFormRadioProps {
  ariaLabel?: string
  ariaLabelledBy?: string
  form?: string
  id?: string
  name?: string
  size?: string
  autofocus?: boolean
  modelValue?: boolean | string | Array<unknown> | Record<string, unknown> | number
  plain?: boolean
  button?: boolean
  switch?: boolean
  disabled?: boolean
  buttonVariant?: ButtonVariant
  inline?: boolean
  required?: boolean
  state?: boolean | null
  value?: string | boolean | Record<string, unknown> | number
}

const props = withDefaults(defineProps<BFormRadioProps>(), {
  autofocus: false,
  modelValue: undefined,
  plain: false,
  button: false,
  switch: false,
  disabled: false,
  buttonVariant: 'secondary',
  inline: false,
  required: false,
  state: undefined,
  value: true,
})

interface BFormRadioEmits {
  (e: 'input', value: boolean | string | Array<unknown> | Record<string, unknown> | number): void
  (e: 'change', value: boolean | string | Array<unknown> | Record<string, unknown> | number): void
  (
    e: 'update:modelValue',
    value: boolean | string | Array<unknown> | Record<string, unknown> | number
  ): void
}

const emit = defineEmits<BFormRadioEmits>()

const computedId = useId(props.id, 'form-check')
const input = ref<HTMLElement>(null as unknown as HTMLElement)
const isFocused = ref<boolean>(false)

const localValue = computed<unknown>({
  get: () => (Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue),
  set: (newValue: any) => {
    const value = newValue ? props.value : false
    const emitValue = Array.isArray(props.modelValue) ? [value] : value
    emit('input', emitValue)
    emit('change', emitValue)
    emit('update:modelValue', emitValue)
  },
})

const isChecked = computed<unknown>(() => {
  if (Array.isArray(props.modelValue)) {
    return (props.modelValue || []).find((e) => e === props.value)
  }
  return JSON.stringify(props.modelValue) === JSON.stringify(props.value)
})

const classes = getClasses(props)
const inputClasses = getInputClasses(props)
const labelClasses = getLabelClasses(props)

// TODO: make tests compatible with the v-focus directive
onMounted(() => {
  if (props.autofocus) {
    input.value.focus()
  }
})
</script>
