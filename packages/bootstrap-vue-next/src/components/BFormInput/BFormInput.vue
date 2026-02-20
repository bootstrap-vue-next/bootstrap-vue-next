<template>
  <input
    :id="computedId"
    ref="_input"
    :value="modelValue"
    :class="computedClasses"
    :name="props.name || undefined"
    :form="props.form || undefined"
    :type="props.type"
    :disabled="isDisabled"
    :placeholder="props.placeholder"
    :required="props.required || undefined"
    :autocomplete="props.autocomplete || undefined"
    :readonly="props.readonly || props.plaintext"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :list="props.type !== 'password' ? props.list : undefined"
    :aria-required="props.required || undefined"
    :aria-invalid="computedAriaInvalid"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import {computed, inject, useTemplateRef} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {normalizeInput} from '../../utils/normalizeInput'
import type {BFormInputProps} from '../../types/ComponentProps'
import {useFormInput} from '../../composables/useFormInput'
import {inputGroupKey} from '../../utils/keys'

const _props = withDefaults(defineProps<Omit<BFormInputProps, 'modelValue'>>(), {
  max: undefined,
  min: undefined,
  step: undefined,
  type: 'text',
  // CommonInputProps
  ariaInvalid: undefined,
  autocomplete: undefined,
  autofocus: false,
  debounce: 0,
  debounceMaxWait: Number.NaN,
  disabled: false,
  form: undefined,
  formatter: undefined,
  id: undefined,
  lazyFormatter: false,
  list: undefined,
  modelValue: '',
  name: undefined,
  placeholder: undefined,
  plaintext: false,
  readonly: false,
  required: false,
  size: undefined,
  state: undefined,
  // End CommonInputProps
})
const props = useDefaults(_props, 'BFormInput')

const [modelValue, modelModifiers] = defineModel<
  Exclude<BFormInputProps['modelValue'], undefined>,
  'trim' | 'lazy' | 'number'
>({
  default: '',
  set: (v) => normalizeInput(v, modelModifiers),
})

const input = useTemplateRef('_input')

const inInputGroup = inject(inputGroupKey, false)

const {
  computedId,
  computedAriaInvalid,
  onInput,
  onChange,
  onBlur,
  stateClass,
  focus,
  blur,
  flush,
  isDisabled,
} = useFormInput(props, input, modelValue, modelModifiers)

const computedClasses = computed(() => {
  const isRange = props.type === 'range'
  const isColor = props.type === 'color'
  return [
    stateClass.value,
    {
      'form-range': isRange,
      'form-control': isColor || (!props.plaintext && !isRange) || (isRange && inInputGroup),
      'form-control-color': isColor,
      'form-control-plaintext': props.plaintext && !isRange && !isColor,
      [`form-control-${props.size}`]: !!props.size,
    },
  ]
})

defineExpose({
  blur,
  element: input,
  flush,
  focus,
})
</script>
