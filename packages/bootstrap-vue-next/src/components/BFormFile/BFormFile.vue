<template>
  <label v-if="hasLabelSlot || label" :for="computedId" class="form-label" :class="labelClass">
    <slot name="label">
      {{ label }}
    </slot>
  </label>
  <input
    :id="computedId"
    v-bind="$attrs"
    ref="input"
    type="file"
    class="form-control"
    :class="computedClasses"
    :form="form"
    :name="name"
    :multiple="multipleBoolean"
    :disabled="disabledBoolean"
    :capture="computedCapture"
    :accept="computedAccept || undefined"
    :required="requiredBoolean || undefined"
    :aria-required="requiredBoolean || undefined"
    :directory="directoryBoolean"
    :webkitdirectory="directoryBoolean"
    @change="onChange"
    @drop="onDrop"
  />
</template>

<script setup lang="ts">
import {computed, ref, toRef, watch} from 'vue'
import {useFocus, useVModel} from '@vueuse/core'
import type {Booleanish, ClassValue, Size} from '../../types'
import {useBooleanish, useId, useStateClass} from '../../composables'
import {isEmptySlot} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<{
    accept?: string | string[]
    autofocus?: Booleanish
    capture?: Booleanish | 'user' | 'environment'
    directory?: Booleanish
    disabled?: Booleanish
    form?: string
    id?: string
    label?: string
    labelClass?: ClassValue
    modelValue?: File[] | File | null
    multiple?: Booleanish
    name?: string
    noDrop?: Booleanish
    noTraverse?: Booleanish
    required?: Booleanish
    size?: Size
    state?: Booleanish | null
  }>(),
  {
    accept: '',
    autofocus: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    capture: false,
    directory: false,
    disabled: false,
    form: undefined,
    id: undefined,
    label: '',
    labelClass: undefined,
    modelValue: null,
    multiple: false,
    name: undefined,
    noDrop: false,
    noTraverse: false,
    required: false,
    size: undefined,
    state: null,
  }
)

const emit = defineEmits<{
  'change': [value: Event]
  'update:modelValue': [value: File | File[] | null]
}>()

const modelValue = useVModel(props, 'modelValue', emit)
const computedId = useId(() => props.id)

const autofocusBoolean = useBooleanish(() => props.autofocus)
const directoryBoolean = useBooleanish(() => props.directory)
const disabledBoolean = useBooleanish(() => props.disabled)
const multipleBoolean = useBooleanish(() => props.multiple)
const noDropBoolean = useBooleanish(() => props.noDrop)
// TODO not implemented yet
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noTraverseBoolean = useBooleanish(() => props.noTraverse)
const requiredBoolean = useBooleanish(() => props.required)
const stateBoolean = useBooleanish(() => props.state)
const computedCapture = useBooleanish(() => props.capture)

const stateClass = useStateClass(stateBoolean)

const input = ref<HTMLInputElement | null>(null)

const {focused} = useFocus(input, {initialValue: autofocusBoolean.value})

const hasLabelSlot = toRef(() => !isEmptySlot(slots['label']))
const computedAccept = toRef(() =>
  typeof props.accept === 'string' ? props.accept : props.accept.join(',')
)

const computedClasses = computed(() => [
  stateClass.value,
  {
    [`form-control-${props.size}`]: props.size !== undefined,
  },
])

const onChange = (e: Event) => {
  const value =
    input.value?.files === null || input.value?.files === undefined ? null : [...input.value.files]
  modelValue.value = value === null ? null : multipleBoolean.value === true ? value : value[0]
  emit('change', e)
}

const onDrop = (e: Event) => {
  if (noDropBoolean.value === true) {
    e.preventDefault()
  }
}

/**
 * Reset the form input
 */
const reset = () => {
  modelValue.value = null
}

watch(modelValue, (newValue) => {
  if (newValue === null && input.value !== null) {
    input.value.value = ''
  }
})

defineExpose({
  blur: () => {
    focused.value = false
  },
  element: input,
  focus: () => {
    focused.value = true
  },
  reset,
})
</script>
