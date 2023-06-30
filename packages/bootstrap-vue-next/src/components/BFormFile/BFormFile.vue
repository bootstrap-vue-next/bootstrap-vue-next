<template>
  <div :class="wrapperClasses">
    <label v-if="hasLabelSlot || label" :for="computedId" class="form-label" :class="labelClasses">
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
  </div>
</template>

<script setup lang="ts">
import {computed, ref, useSlots} from 'vue'
import {useFocus, useVModel} from '@vueuse/core'
import type {Booleanish, ClassValue, Size} from '../../types'
import {useBooleanish, useId, useStateClass} from '../../composables'
import {isEmptySlot, resolveBooleanish} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()

const props = withDefaults(
  defineProps<{
    accept?: string | string[]
    autofocus?: Booleanish
    capture?: boolean | 'true' | 'false' | '' | 'user' | 'environment' // Booleanish | 'user' | 'environment'
    directory?: Booleanish
    disabled?: Booleanish
    form?: string
    id?: string
    multiple?: Booleanish
    name?: string
    noDrop?: Booleanish
    noTraverse?: Booleanish
    required?: Booleanish
    size?: Size
    state?: Booleanish | null
    modelValue?: File[] | File | null
    label?: string
    wrapperClasses?: ClassValue
    labelClasses?: ClassValue
  }>(),
  {
    accept: '',
    autofocus: false,
    capture: false,
    directory: false,
    disabled: false,
    form: undefined,
    id: undefined,
    multiple: false,
    name: undefined,
    noDrop: false,
    noTraverse: false,
    required: false,
    size: undefined,
    state: null,
    modelValue: null,
    label: '',
    labelClasses: undefined,
    wrapperClasses: undefined,
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: File | File[] | null]
  'change': [value: Event]
}>()

const slots = useSlots()

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

const stateClass = useStateClass(stateBoolean)

const input = ref<HTMLInputElement | null>(null)

const {focused} = useFocus(input, {initialValue: autofocusBoolean.value})

const hasLabelSlot = computed(() => !isEmptySlot(slots['label']))
const computedAccept = computed(() =>
  typeof props.accept === 'string' ? props.accept : props.accept.join(',')
)
const computedCapture = computed(() =>
  props.capture === 'user' || props.capture === 'environment'
    ? props.capture
    : resolveBooleanish(props.capture)
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
  if (input.value !== null) {
    input.value.value = ''
  }
}

defineExpose({
  focus: () => {
    focused.value = true
  },
  blur: () => {
    focused.value = false
  },
  reset,
})
</script>
