<template>
  <div :class="classes">
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
      v-if="$slots.default || !plainBoolean"
      :for="computedId"
      :class="[labelClasses, {active: isChecked, focus: isFocused}]"
    >
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
// import type {BFormCheckboxEmits, BFormCheckboxProps} from '../../types/components'
import {computed, onMounted, ref} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useId} from '../../composables'
import type {Booleanish, ButtonVariant, InputSize} from '../../types'
import {resolveBooleanish} from '../../utils'

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
  switch: false,
  disabled: false,
  buttonVariant: 'secondary',
  inline: false,
  size: 'md',
  uncheckedValue: false,
  value: true,
})

const indeterminateBoolean = computed<boolean | undefined>(() =>
  props.indeterminate ? resolveBooleanish(props.indeterminate) : undefined
)
const autofocusBoolean = computed(() => resolveBooleanish(props.autofocus))
const plainBoolean = computed(() => resolveBooleanish(props.plain))
// TODO button is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buttonBoolean = computed(() => resolveBooleanish(props.button))
// TODO switch is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const switchBoolean = computed(() => resolveBooleanish(props.switch))
const disabledBoolean = computed(() => resolveBooleanish(props.disabled))
// TODO inline is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inlineBoolean = computed(() => resolveBooleanish(props.inline))
const requiredBoolean = computed(() =>
  props.required !== undefined ? resolveBooleanish(props.required) : undefined
)
// TODO state is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stateBoolean = computed(() =>
  props.state !== undefined ? resolveBooleanish(props.state) : undefined
)

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
