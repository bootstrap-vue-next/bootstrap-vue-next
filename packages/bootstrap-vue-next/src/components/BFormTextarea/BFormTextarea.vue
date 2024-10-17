<template>
  <textarea
    :id="computedId"
    ref="input"
    :key="forceUpdateKey"
    :class="computedClasses"
    :name="props.name || undefined"
    :form="props.form || undefined"
    :value="modelValue ?? undefined"
    :disabled="props.disabled"
    :placeholder="props.placeholder"
    :required="props.required || undefined"
    :autocomplete="props.autocomplete || undefined"
    :readonly="props.readonly || props.plaintext"
    :aria-required="props.required || undefined"
    :aria-invalid="computedAriaInvalid"
    :rows="props.rows"
    :style="computedStyles"
    :wrap="props.wrap || undefined"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import type {BFormTextareaProps} from '../../types/ComponentProps'
import {computed, type CSSProperties} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {normalizeInput} from '../../utils/normalizeInput'
import {useFormInput} from '../../composables/useFormInput'
import {useStateClass} from '../../composables/useStateClass'

const _props = withDefaults(defineProps<Omit<BFormTextareaProps, 'modelValue'>>(), {
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
  lazyFormatter: false,
  list: undefined,
  modelValue: '',
  name: undefined,
  placeholder: undefined,
  plaintext: false,
  readonly: false,
  required: false,
  size: undefined,
  state: null,
  // End CommonInputProps
  noResize: false,
  rows: 2,
  wrap: 'soft',
})
const props = useDefaults(_props, 'BFormTextarea')

const [modelValue, modelModifiers] = defineModel<
  Exclude<BFormTextareaProps['modelValue'], undefined>,
  'trim' | 'lazy' | 'number'
>({
  default: '',
  set: (v) => normalizeInput(v, modelModifiers),
})

const {
  input,
  computedId,
  forceUpdateKey,
  computedAriaInvalid,
  onInput,
  onChange,
  onBlur,
  focus,
  blur,
} = useFormInput(props, modelValue, modelModifiers)

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
