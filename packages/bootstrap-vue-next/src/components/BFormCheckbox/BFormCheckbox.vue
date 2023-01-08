<template>
  <div :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="checkbox"
      :disabled="disabledBoolean"
      :required="!!name && !!requiredBoolean"
      :name="name"
      :form="form"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :aria-required="name && requiredBoolean ? 'true' : undefined"
      :value="value"
      :indeterminate="indeterminateBoolean"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <label
      v-if="hasDefaultSlot || !plainBoolean"
      :for="computedId"
      :class="[labelClasses, {active: isChecked, focus: isFocused}]"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
// import type {BFormCheckboxEmits, BFormCheckboxProps} from '../../types/components'
import {isEmptySlot} from '../../utils'
import {computed, onMounted, reactive, ref, toRef, useSlots} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useBooleanish, useId} from '../../composables'
import type {Booleanish, ButtonVariant, InputSize} from '../../types'

interface BFormCheckboxProps {
  ariaLabel?: string
  ariaLabelledBy?: string
  form?: string
  indeterminate?: Booleanish
  name?: string
  id?: string
  autofocus?: Booleanish
  plain?: Booleanish
  button?: Booleanish
  switch?: Booleanish
  disabled?: Booleanish
  buttonVariant?: ButtonVariant
  inline?: Booleanish
  required?: Booleanish
  size?: InputSize
  state?: Booleanish
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
  autofocus: false,
  plain: false,
  button: false,
  id: undefined,
  required: undefined,
  state: undefined,
  modelValue: undefined,
  switch: false,
  disabled: false,
  buttonVariant: 'secondary',
  inline: false,
  size: 'md',
  uncheckedValue: false,
  value: true,
})

interface BFormCheckboxEmits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'input', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormCheckboxEmits>()

const slots = useSlots()

const computedId = useId(toRef(props, 'id'), 'form-check')

const indeterminateBoolean = useBooleanish(toRef(props, 'indeterminate'))
const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const buttonBoolean = useBooleanish(toRef(props, 'button'))
const switchBoolean = useBooleanish(toRef(props, 'switch'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const inlineBoolean = useBooleanish(toRef(props, 'inline'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stateBoolean = useBooleanish(toRef(props, 'state'))

const input = ref<HTMLElement>(null as unknown as HTMLElement)
const isFocused = ref<boolean>(false)

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))

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
onMounted((): void => {
  if (autofocusBoolean.value) {
    input.value.focus()
  }
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
