<template>
  <input
    :id="computedId"
    ref="_input"
    :value="getDisplayedValue()"
    :class="computedClasses"
    :name="props.name || undefined"
    :form="props.form || undefined"
    :type="computedType"
    :disabled="isDisabled"
    :placeholder="props.placeholder"
    :required="props.required || undefined"
    :autocomplete="props.autocomplete || undefined"
    :readonly="props.readonly || props.plaintext"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :list="computedType !== 'password' ? props.list : undefined"
    :aria-required="props.required || undefined"
    :aria-invalid="computedAriaInvalid"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import {computed, inject, onMounted, useTemplateRef, watch} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {normalizeInput} from '../../utils/normalizeInput'
import type {BFormInputProps, InputType} from '../../types'
import {useFormInput} from '../../composables/useFormInput'
import {inputGroupKey} from '../../utils/keys'
import {warn} from '../../utils/console'

// The value handling in useFormInput is built around text-like values, so only
// these types are rendered. Typing it as a Record keeps it in sync with InputType.
const supportedTypes: Readonly<Record<InputType, true>> = {
  'text': true,
  'number': true,
  'email': true,
  'password': true,
  'search': true,
  'url': true,
  'tel': true,
  'date': true,
  'time': true,
  'range': true,
  'color': true,
  'datetime': true,
  'datetime-local': true,
  'month': true,
  'week': true,
}
const isSupportedType = (type: string): type is InputType => Object.hasOwn(supportedTypes, type)

// parseFloat turns these values into a number (e.g. "2025-01-02" into 2025),
// so `.number` gives a model that no longer describes the value
const numberUnsupportedTypes: ReadonlySet<InputType> = new Set([
  'date',
  'time',
  'month',
  'week',
  'datetime-local',
])

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
  computedValue,
  onInput,
  onChange,
  onBlur,
  stateClass,
  focus,
  blur,
  isDisabled,
} = useFormInput(props, input, modelValue, modelModifiers)

// JS consumers (or `as any`) can still pass types such as `file` or `checkbox`,
// which the text-based handlers don't support, so fall back to `text`
const computedType = computed<InputType>(() => {
  const {type} = props
  return type !== undefined && isSupportedType(type) ? type : 'text'
})

watch(
  () => props.type,
  (type) => {
    if (type !== undefined && !isSupportedType(type)) {
      warn('BFormInput', `Unsupported type "${type}", rendering a "text" input instead`)
    }
  },
  {immediate: true}
)

watch(
  () =>
    modelModifiers.number === true && numberUnsupportedTypes.has(computedType.value)
      ? computedType.value
      : null,
  (type) => {
    if (type !== null) {
      warn(
        'BFormInput',
        `The ".number" modifier should not be used with type "${type}": parseFloat turns values such as "2025-01-02" into 2025`
      )
    }
  },
  {immediate: true}
)

// Like Vue's native `v-model.number`, keep what the user entered when it
// already parses to the model. Writing the number back would turn "2.0" into
// "2", and makes the browser clear date and time inputs ("2025" is invalid).
// A plain function, not a computed: it reads the DOM, so it must run on every render.
// The element is kept outside of reactivity, so rendering doesn't track the template
// ref (that would queue an extra render after mount, overwriting early input)
let element: HTMLInputElement | null = null
onMounted(() => {
  element = input.value
})
const getDisplayedValue = () => {
  const value = computedValue.value
  if (modelModifiers.number !== true || typeof value !== 'number' || element === null) {
    return value
  }
  return Number.parseFloat(element.value) === value ? element.value : value
}

const computedClasses = computed(() => {
  const isRange = computedType.value === 'range'
  const isColor = computedType.value === 'color'
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
  flushDebounce: onBlur,
  focus,
})
</script>
