<template>
  <textarea
    :id="computedId"
    ref="input"
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
    @input="onInput($event)"
    @change="onChange($event)"
    @blur="onBlur($event)"
  />
</template>

<script setup lang="ts">
import type {BFormTextareaProps, Numberish} from '../../types'
import {computed, type CSSProperties} from 'vue'
import {useDefaults, useFormInput, useStateClass} from '../../composables'

const _props = withDefaults(defineProps<BFormTextareaProps>(), {
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
const props = useDefaults(_props, 'BFormTextarea')

const [modelValue, modelModifiers] = defineModel<Numberish | null, 'trim' | 'lazy' | 'number'>({
  default: '',
  set: (v) => {
    if (v === null) return
    let update = v
    if (modelModifiers.trim) update = update.toString().trim()
    if (modelModifiers.number && typeof update === 'string' && update !== '') {
      const parsed = Number.parseFloat(update)
      update = Number.isNaN(parsed) ? update : parsed
    }
    return update
  },
})

const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
  useFormInput(props, modelValue, modelModifiers)

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
