<template>
  <input
    :id="computedId"
    ref="input"
    :class="computedClasses"
    :name="name || undefined"
    :form="form || undefined"
    :type="localType"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :autocomplete="autocomplete || undefined"
    :readonly="readonly || plaintext"
    :min="min"
    :max="max"
    :step="step"
    :list="type !== 'password' ? list : undefined"
    :aria-required="required ? 'true' : undefined"
    :aria-invalid="computedAriaInvalid"
    v-bind="$attrs"
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  />
</template>

<script lang="ts">
import {computed, defineComponent, type PropType, ref} from 'vue'
import {COMMON_INPUT_PROPS, useFormInput} from '../../composables'
import type {InputType} from '../../types'

const allowedTypes = [
  'text',
  'number',
  'email',
  'password',
  'search',
  'url',
  'tel',
  'date',
  'time',
  'range',
  'color',
]

export default defineComponent({
  props: {
    ...COMMON_INPUT_PROPS,
    // debounce: {type: [String, Number], default: 0}, TODO: not implemented yet
    max: {type: [String, Number], required: false},
    min: {type: [String, Number], required: false},
    // noWheel: {type: [Boolean, String] as PropType<Booleanish>, default: false}, TODO: not implemented yet
    step: {type: [String, Number], required: false},
    type: {
      type: String as PropType<InputType>,
      default: 'text',
      validator: (value: string) => allowedTypes.includes(value),
    },
  },
  emits: ['update:modelValue', 'change', 'blur', 'input'],
  setup(props, {emit}) {
    const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
      useFormInput(props, emit)

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

    const localType = computed<InputType>(() =>
      allowedTypes.includes(props.type) ? props.type : 'text'
    )

    const highlight = () => {
      if (isHighlighted.value === true) return
      isHighlighted.value = true
      setTimeout(() => {
        isHighlighted.value = false
      }, 2000)
    }

    return {
      computedClasses,
      localType,
      input,
      computedId,
      computedAriaInvalid,
      onInput,
      onChange,
      onBlur,
      focus,
      blur,
      highlight,
    }
  },
})
</script>
