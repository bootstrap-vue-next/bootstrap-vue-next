<template>
  <textarea
    :id="computedId"
    ref="input"
    :class="computedClasses"
    :name="name || undefined"
    :form="form || undefined"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :autocomplete="autocomplete || undefined"
    :readonly="readonly || plaintext"
    :aria-required="required ? 'true' : undefined"
    :aria-invalid="computedAriaInvalid"
    :rows="rows"
    :style="computedStyles"
    :wrap="wrap || undefined"
    v-bind="$attrs"
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  />
</template>

<script lang="ts">
import type {Booleanish} from '../../types'
import {computed, defineComponent, type PropType, type StyleValue, toRef} from 'vue'
import {COMMON_INPUT_PROPS, useBooleanish, useFormInput} from '../../composables'

export default defineComponent({
  props: {
    ...COMMON_INPUT_PROPS,
    noResize: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    rows: {type: [String, Number], required: false, default: 2},
    wrap: {type: String, default: 'soft'},
  },
  emits: ['update:modelValue', 'change', 'blur', 'input'],
  setup(props, {emit}) {
    const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
      useFormInput(props, emit)

    const noResizeBoolean = useBooleanish(toRef(props, 'noResize'))

    const computedClasses = computed(() => ({
      'form-control': !props.plaintext,
      'form-control-plaintext': props.plaintext,
      [`form-control-${props.size}`]: !!props.size,
      'is-valid': props.state === true,
      'is-invalid': props.state === false,
    }))

    const computedStyles = computed<StyleValue | undefined>(() =>
      noResizeBoolean.value ? {resize: 'none'} : undefined
    )

    return {
      input,
      computedId,
      computedAriaInvalid,
      onInput,
      onChange,
      onBlur,
      focus,
      blur,
      computedClasses,
      computedStyles,
    }
  },
})
</script>
