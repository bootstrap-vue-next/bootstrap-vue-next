<template>
  <textarea
    :id="computedId"
    ref="input"
    :class="computedClasses"
    :name="name || undefined"
    :form="form || undefined"
    :value="modelValue ?? undefined"
    :disabled="props.disabled"
    :placeholder="placeholder"
    :required="props.required || undefined"
    :autocomplete="autocomplete || undefined"
    :readonly="props.readonly || props.plaintext"
    :aria-required="required || undefined"
    :aria-invalid="computedAriaInvalid"
    :rows="rows"
    :style="computedStyles"
    :wrap="wrap || undefined"
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  />
</template>

<script setup lang="ts">
import type {BFormTextareaProps, Numberish} from '../../types'
import {computed, type CSSProperties} from 'vue'
import {useFormInput, useStateClass} from '../../composables'

const props = withDefaults(defineProps<BFormTextareaProps>(), {
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
  noResize: false,
  rows: 2,
  wrap: 'soft',
})

const emit = defineEmits<{
  'update:modelValue': [val: Numberish | null]
}>()

const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
  useFormInput(props, emit)

const stateClass = useStateClass(() => props.state)

const computedClasses = computed(() => [
  stateClass.value,
  props.plaintext ? 'form-control-plaintext' : 'form-control',
  {
    [`form-control-${props.size}`]: !!props.size,
  },
])

const computedStyles = computed<CSSProperties>(() => ({
  resize: props.noResize ? 'none' : undefined,
}))

defineExpose({
  blur,
  element: input,
  focus,
})
</script>
