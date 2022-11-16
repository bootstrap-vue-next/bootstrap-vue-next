<template>
  <div :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="radio"
      :disabled="disabledBoolean"
      :required="!!name && requiredBoolean"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      :value="value"
      :aria-required="!!name && requiredBoolean ? true : undefined"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <label
      v-if="hasDefaultSlot || plainBoolean === false"
      :for="computedId"
      :class="[labelClasses, {active: isChecked, focus: isFocused}]"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
// import type {BFormRadioEmits, BFormRadioProps} from '../../types/components'
import type {Booleanish, ButtonVariant, InputSize} from '../../types'
import {getClasses, getInputClasses, getLabelClasses, useBooleanish, useId} from '../../composables'
import {computed, onMounted, reactive, ref, toRef, useSlots} from 'vue'
import {isEmptySlot} from '../../utils'

interface BFormRadioProps {
  ariaLabel?: string
  ariaLabelledby?: string
  form?: string
  id?: string
  name?: string
  size?: InputSize
  autofocus?: Booleanish
  modelValue?: boolean | string | Array<unknown> | Record<string, unknown> | number
  plain?: Booleanish
  button?: Booleanish
  switch?: Booleanish
  disabled?: Booleanish
  buttonVariant?: ButtonVariant
  inline?: Booleanish
  required?: Booleanish
  state?: Booleanish
  value?: string | boolean | Record<string, unknown> | number
}

const props = withDefaults(defineProps<BFormRadioProps>(), {
  autofocus: false,
  plain: false,
  button: false,
  switch: false,
  disabled: false,
  modelValue: undefined,
  state: undefined,
  buttonVariant: 'secondary',
  inline: false,
  required: false,
  value: true,
})

interface BFormRadioEmits {
  (e: 'input', value: boolean | string | Array<unknown> | Record<string, unknown> | number): void
  (e: 'change', value: boolean | string | Array<unknown> | Record<string, unknown> | number): void
  (
    e: 'update:modelValue',
    value: boolean | string | Array<unknown> | Record<string, unknown> | number
  ): void
}

const emit = defineEmits<BFormRadioEmits>()

const slots = useSlots()

const computedId = useId(toRef(props, 'id'), 'form-check')

const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const buttonBoolean = useBooleanish(toRef(props, 'button'))
const switchBoolean = useBooleanish(toRef(props, 'switch'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const inlineBoolean = useBooleanish(toRef(props, 'inline'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stateBoolean = useBooleanish(toRef(props, 'state'))

const input = ref<HTMLElement | null>(null)
const isFocused = ref<boolean>(false)

const localValue = computed<unknown>({
  get: () => (Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue),
  set: (newValue) => {
    const value = newValue ? props.value : false
    const emitValue = Array.isArray(props.modelValue) ? [value] : value
    emit('input', emitValue)
    emit('change', emitValue)
    emit('update:modelValue', emitValue)
  },
})

const isChecked = computed<unknown>(() => {
  if (Array.isArray(props.modelValue)) {
    return (props.modelValue || []).find((e) => e === props.value)
  }
  return JSON.stringify(props.modelValue) === JSON.stringify(props.value)
})

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))

const classesObject = reactive({
  plain: toRef(plainBoolean, 'value'),
  button: toRef(buttonBoolean, 'value'),
  inline: toRef(inlineBoolean, 'value'),
  switch: toRef(switchBoolean, 'value'),
  size: toRef(props, 'size'),
  state: toRef(stateBoolean, 'value'),
  buttonVariant: toRef(props, 'buttonVariant'),
})
const computedClasses = getClasses(classesObject)
const inputClasses = getInputClasses(classesObject)
const labelClasses = getLabelClasses(classesObject)

// TODO: make tests compatible with the v-focus directive
onMounted(() => {
  if (autofocusBoolean.value && input.value !== null) {
    input.value.focus()
  }
})
</script>
