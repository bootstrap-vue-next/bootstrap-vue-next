<template>
  <div :class="classes">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="checkbox"
      :disabled="disabled"
      :required="!!name && !!required"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :aria-required="name && required ? 'true' : undefined"
      :value="value"
      :indeterminate="indeterminate"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <label
      v-if="$slots.default || !plain"
      :for="computedId"
      :class="[labelClasses, {active: isChecked, focus: isFocused}]"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
// import type {BFormCheckboxEmits, BFormCheckboxProps} from '../../types/components'
import {getClasses, getInputClasses, getLabelClasses} from '../../composables/useFormCheck'
import type {ButtonVariant, InputSize} from '../../types'
import useId from '../../composables/useId'

interface BFormCheckboxProps {
  ariaLabel?: string
  ariaLabelledBy?: string
  form?: string
  indeterminate?: boolean
  name?: string
  id?: string
  autofocus?: boolean
  plain?: boolean
  button?: boolean
  switch?: boolean
  disabled?: boolean
  buttonVariant?: ButtonVariant
  inline?: boolean
  required?: boolean
  size?: InputSize
  state?: boolean
  uncheckedValue?:
    | Array<unknown>
    | Set<unknown>
    | boolean
    | string
    | Record<string, unknown>
    | number
  value?: Array<unknown> | Set<unknown> | boolean | string | Record<string, unknown> | number
  modelValue?: Array<unknown> | Set<unknown> | boolean | string | Record<string, unknown> | number
}

const props = withDefaults(defineProps<BFormCheckboxProps>(), {
  id: undefined,
  autofocus: false,
  plain: false,
  button: false,
  switch: false,
  disabled: false,
  buttonVariant: 'secondary',
  inline: false,
  required: undefined,
  size: 'md',
  state: undefined,
  uncheckedValue: false,
  value: true,
  modelValue: undefined,
})

interface BFormCheckboxEmits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'input', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormCheckboxEmits>()

const computedId = useId(props.id, 'form-check')
const input = ref<HTMLElement>(null as unknown as HTMLElement)
const isFocused = ref<boolean>(false)

const localValue = computed({
  get: (): unknown[] | Set<unknown> | boolean | undefined => {
    if (props.uncheckedValue) {
      if (!Array.isArray(props.modelValue)) {
        return props.modelValue === props.value
      }
      return props.modelValue.indexOf(props.value) > -1
    }
    return props.modelValue as unknown[] | Set<unknown> | boolean | undefined
  },
  set: (newValue: any) => {
    let emitValue = newValue
    if (!Array.isArray(props.modelValue)) {
      emitValue = newValue ? props.value : props.uncheckedValue
    } else {
      if (props.uncheckedValue) {
        emitValue = props.modelValue
        if (newValue) {
          if (emitValue.indexOf(props.uncheckedValue) > -1)
            emitValue.splice(emitValue.indexOf(props.uncheckedValue), 1)
          emitValue.push(props.value)
        } else {
          if (emitValue.indexOf(props.value) > -1)
            emitValue.splice(emitValue.indexOf(props.value), 1)
          emitValue.push(props.uncheckedValue)
        }
      }
    }
    emit('input', emitValue)
    emit('update:modelValue', emitValue)
    emit('change', emitValue)
  },
})

const isChecked = computed<boolean>(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.indexOf(props.value) > -1
  }
  return JSON.stringify(props.modelValue) === JSON.stringify(props.value)
})

const classes = getClasses(props)
const inputClasses = getInputClasses(props)
const labelClasses = getLabelClasses(props)

// TODO: make tests compatible with the v-focus directive
onMounted((): void => {
  if (props.autofocus) {
    input.value.focus()
  }
})
</script>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>
