<template>
  <textarea
    :id="computedId"
    ref="input"
    :class="computedClasses"
    :name="name || undefined"
    :form="form || undefined"
    :value="modelValue ?? undefined"
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
import type {CommonInputProps, Numberish} from '../../types'
import {computed, type CSSProperties} from 'vue'
import {useFormInput, useStateClass} from '../../composables'

const props = withDefaults(
  defineProps<
    {
      noResize?: boolean
      rows?: Numberish
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
  'update:modelValue': [val: Numberish | null]
}>()

const {input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur} =
  useFormInput(props, emit)

const disabledBoolean = computed(() => props.disabled)
const requiredBoolean = computed(() => props.required)
const readonlyBoolean = computed(() => props.readonly)
const plaintextBoolean = computed(() => props.plaintext)
const noResizeBoolean = computed(() => props.noResize)
const stateBoolean = computed(() => props.state)

const stateClass = useStateClass(stateBoolean)

const computedClasses = computed(() => [
  stateClass.value,
  plaintextBoolean.value ? 'form-control-plaintext' : 'form-control',
  {
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
