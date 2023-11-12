<template>
  <textarea
    :id="computedId"
    ref="input"
    :class="computedClasses"
    :name="name || undefined"
    :form="form || undefined"
    :value="modelValue"
    :disabled="disabledBoolean"
    :placeholder="placeholder"
    :required="requiredBoolean || undefined"
    :autocomplete="autocomplete || undefined"
    :readonly="readonlyBoolean || plaintextBoolean"
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
import type {Booleanish} from '../../types'
import {computed, type CSSProperties} from 'vue'
import {useBooleanish, useFormInput, useStateClass} from '../../composables'
import type {CommonInputProps} from '../../composables/useFormInput'

const props = withDefaults(
  defineProps<
    {
      noResize?: Booleanish
      rows?: string | number
      wrap?: string
    } & CommonInputProps
  >(),
  {
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
  }
)

const emit = defineEmits<{
  'blur': [val: FocusEvent]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'change': [val: any]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'input': [val: any]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'update:modelValue': [val: any]
}>()

const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
  useFormInput(props, emit)

const disabledBoolean = useBooleanish(() => props.disabled)
const requiredBoolean = useBooleanish(() => props.required)
const readonlyBoolean = useBooleanish(() => props.readonly)
const plaintextBoolean = useBooleanish(() => props.plaintext)
const noResizeBoolean = useBooleanish(() => props.noResize)
const stateBoolean = useBooleanish(() => props.state)

const stateClass = useStateClass(stateBoolean)

const computedClasses = computed(() => [
  stateClass.value,
  {
    'form-control': !props.plaintext,
    'form-control-plaintext': props.plaintext,
    [`form-control-${props.size}`]: !!props.size,
  },
])

const computedStyles = computed<CSSProperties>(() => ({
  resize: noResizeBoolean.value ? 'none' : undefined,
}))

defineExpose({
  blur,
  element: input,
  focus,
})
</script>
