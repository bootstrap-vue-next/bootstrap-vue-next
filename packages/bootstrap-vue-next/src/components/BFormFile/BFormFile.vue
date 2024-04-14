<template>
  <DefineTemplate>
    <label class="input-group-text" :for="computedId">
      {{ browserText }}
    </label>
  </DefineTemplate>

  <label v-if="hasLabelSlot || label" class="form-label" :class="labelClass" :for="computedId">
    <slot name="label">
      {{ label }}
    </slot>
  </label>

  <div class="input-group form-input-file">
    <ReusableTemplate v-if="placement === 'start'" />
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
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      :aria-required="props.required || undefined"
      :directory="props.directory"
      :webkitdirectory="props.directory"
      @change="onChange"
      @drop="onDrop"
    />
    <ReusableTemplate v-if="placement === 'end'" />
  </div>
</template>

<script setup lang="ts">
import {createReusableTemplate, useFocus} from '@vueuse/core'
import {computed, ref, toRef, watch} from 'vue'
import type {BFormFileProps} from '../../types'
import {useId, useStateClass} from '../../composables'
import {isEmptySlot} from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (props: Record<string, never>) => any
}>()

const props = withDefaults(defineProps<BFormFileProps>(), {
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  accept: '',
  autofocus: false,
  browserText: 'Choose',
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
  noDrop: false,
  noTraverse: false,
  placement: 'start',
  required: false,
  size: undefined,
  state: null,
})

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

const [DefineTemplate, ReusableTemplate] = createReusableTemplate()
</script>

<style scoped>
.form-input-file {
  input[type='file'] {
    margin-left: -2px !important;

    &::-webkit-file-upload-button {
      display: none;
    }

    &::file-selector-button {
      display: none;
    }
  }

  &:hover {
    label {
      background-color: #dde0e3;
      cursor: pointer;
    }
  }
}
</style>
