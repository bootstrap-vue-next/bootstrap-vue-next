<template>
  <input
    :id="computedId"
    ref="input"
    :value="modelValue"
    :class="computedClasses"
    :name="name || undefined"
    :form="form || undefined"
    :type="type"
    :disabled="props.disabled"
    :placeholder="placeholder"
    :required="props.required || undefined"
    :autocomplete="autocomplete || undefined"
    :readonly="props.readonly || props.plaintext"
    :min="min"
    :max="max"
    :step="step"
    :list="type !== 'password' ? list : undefined"
    :aria-required="props.required || undefined"
    :aria-invalid="computedAriaInvalid"
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  />
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useFormInput, useStateClass} from '../../composables'
import type {BFormInputProps, Numberish} from '../../types'

const props = withDefaults(defineProps<BFormInputProps>(), {
  max: undefined,
  min: undefined,
  step: undefined,
  type: 'text',
  // CommonInputProps
  ariaInvalid: undefined,
  autocomplete: undefined,
  autofocus: false,
  debounce: 0,
  debounceMaxWait: NaN,
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
  // End CommonInputProps
})

const emit = defineEmits<{
  'update:modelValue': [val: Numberish | null]
}>()

const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
  useFormInput(props, emit)

const stateClass = useStateClass(() => props.state)

const isHighlighted = ref(false)

const computedClasses = computed(() => {
  const isRange = props.type === 'range'
  const isColor = props.type === 'color'
  return [
    stateClass.value,
    {
      'form-control-highlighted': isHighlighted.value,
      'form-range': isRange,
      'form-control': isColor || (!props.plaintext && !isRange),
      'form-control-color': isColor,
      'form-control-plaintext': props.plaintext && !isRange && !isColor,
      [`form-control-${props.size}`]: !!props.size,
    },
  ]
})

defineExpose({
  blur,
  element: input,
  focus,
})

// const highlight = () => {
//   if (isHighlighted.value === true) return
//   isHighlighted.value = true
//   setTimeout(() => {
//     isHighlighted.value = false
//   }, 2000)
// }
</script>
