<template>
  <label
    v-if="hasLabelSlot || props.label"
    class="form-label"
    :class="props.labelClass"
    :for="computedId"
  >
    <slot name="label">
      {{ props.label }}
    </slot>
  </label>

  <input
    :id="computedId"
    v-bind="$attrs"
    ref="input"
    type="file"
    :class="computedClasses"
    :form="props.form"
    :name="props.name"
    :multiple="props.multiple"
    :disabled="props.disabled"
    :capture="props.capture"
    :accept="computedAccept || undefined"
    :required="props.required || undefined"
    :aria-label="props.ariaLabel"
    :aria-labelledby="props.ariaLabelledby"
    :aria-required="props.required || undefined"
    :directory="props.directory"
    :webkitdirectory="props.directory"
    @change="onChange"
    @drop="onDrop"
  />
</template>

<script setup lang="ts">
import {useFocus} from '@vueuse/core'
import {computed, ref, toRef, watch} from 'vue'
import type {BFormFileProps} from '../../types'
import {useDefaults, useId, useStateClass} from '../../composables'
import {isEmptySlot} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BFormFileProps>(), {
  ariaLabel: undefined,
  ariaLabelledby: undefined,
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
  multiple: false,
  name: undefined,
  noButton: false,
  noDrop: false,
  noTraverse: false,
  plain: false,
  required: false,
  size: undefined,
  state: null,
})
const props = useDefaults(_props, 'BFormFile')

const modelValue = defineModel<File | File[] | null>({
  default: null,
})

const computedId = useId(() => props.id)

// TODO noTraverse is not implemented yet

const stateClass = useStateClass(() => props.state)

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
    'form-control': !props.plain,
    'form-control-input-file-hide-button': props.noButton,
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
