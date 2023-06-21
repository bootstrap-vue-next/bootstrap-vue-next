<template>
  <input
    :id="computedId"
    ref="input"
    :class="computedClasses"
    :name="name || undefined"
    :form="form || undefined"
    :type="type"
    :disabled="disabledBoolean"
    :placeholder="placeholder"
    :required="requiredBoolean"
    :autocomplete="autocomplete || undefined"
    :readonly="readonlyBoolean || plaintextBoolean"
    :min="min"
    :max="max"
    :step="step"
    :list="type !== 'password' ? list : undefined"
    :aria-required="requiredBoolean ? true : undefined"
    :aria-invalid="computedAriaInvalid"
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  />
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useBooleanish, useFormInput} from '../../composables'
import type {InputType} from '../../types'
import type {CommonInputProps} from '../../composables/useFormInput'

const props = withDefaults(
  defineProps<
    {
      // debounce: {type: [String, Number], default: 0}, TODO: not implemented yet
      // The above is likely a CommonInputProp
      max?: string | number
      min?: string | number
      // noWheel: {type: [Boolean, String] as PropType<Booleanish>, default: false}, TODO: not implemented yet
      step?: string | number
      type?: InputType
    } & CommonInputProps
  >(),
  {
    max: undefined,
    min: undefined,
    step: undefined,
    type: 'text',
    // CommonInputProps
    ariaInvalid: undefined,
    autocomplete: undefined,
    autofocus: false,
    disabled: false,
    form: undefined,
    formatter: undefined,
    id: undefined,
    lazy: false,
    lazyFormatter: false,
    list: undefined,
    modelValue: '',
    name: undefined,
    number: false,
    placeholder: undefined,
    plaintext: false,
    readonly: false,
    required: false,
    size: undefined,
    state: null,
    trim: false,
  }
)

const emit = defineEmits<{
  'update:modelValue': [val: any]
  'change': [val: any]
  'blur': [val: any]
  'input': [val: any]
}>()

const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
  useFormInput(props, emit)

const disabledBoolean = useBooleanish(() => props.disabled)
const requiredBoolean = useBooleanish(() => props.required)
const readonlyBoolean = useBooleanish(() => props.readonly)
const plaintextBoolean = useBooleanish(() => props.plaintext)

const isHighlighted = ref(false)

const computedClasses = computed(() => {
  const isRange = props.type === 'range'
  const isColor = props.type === 'color'
  return {
    'form-control-highlighted': isHighlighted.value,
    'form-range': isRange,
    'form-control': isColor || (!props.plaintext && !isRange),
    'form-control-color': isColor,
    'form-control-plaintext': props.plaintext && !isRange && !isColor,
    [`form-control-${props.size}`]: !!props.size,
    'is-valid': props.state === true,
    'is-invalid': props.state === false,
  }
})

// const highlight = () => {
//   if (isHighlighted.value === true) return
//   isHighlighted.value = true
//   setTimeout(() => {
//     isHighlighted.value = false
//   }, 2000)
// }
</script>
