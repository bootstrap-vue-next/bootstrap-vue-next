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
    :multiple="props.multiple"
    :disabled="props.disabled"
    :capture="props.capture"
    :accept="computedAccept || undefined"
    :required="props.required || undefined"
    :aria-required="props.required || undefined"
    :directory="props.directory"
    :webkitdirectory="props.directory"
    @change="onChange"
    @drop="onDrop"
  />
</template>

<script setup lang="ts">
import {computed, ref, toRef, watch} from 'vue'
import {useFocus, useVModel} from '@vueuse/core'
import type {ClassValue, Size} from '../../types'
import {useId, useStateClass} from '../../composables'
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
    accept?: string | readonly string[]
    autofocus?: boolean
    capture?: boolean | 'user' | 'environment'
    directory?: boolean
    disabled?: boolean
    form?: string
    id?: string
    label?: string
    labelClass?: ClassValue
    modelValue?: readonly File[] | File | null
    multiple?: boolean
    name?: string
    noDrop?: boolean
    noTraverse?: boolean
    required?: boolean
    size?: Size
    state?: boolean | null
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
  'update:modelValue': [value: File | File[] | null]
}>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})
const computedId = useId(() => props.id)

// TODO noTraverse is not implemented yet

const stateClass = useStateClass(props.state)

const input = ref<HTMLInputElement | null>(null)

const {focused} = useFocus(input, {initialValue: props.autofocus})

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

const onChange = () => {
  const value =
    input.value?.files === null || input.value?.files === undefined ? null : [...input.value.files]
  modelValue.value = value === null ? null : props.multiple === true ? value : value[0]
}

const onDrop = (e: Readonly<Event>) => {
  if (props.noDrop === true) {
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
