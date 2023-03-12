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
    />
    <label v-if="hasDefaultSlot || !plainBoolean" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
// import type {BFormCheckboxEmits, BFormCheckboxProps} from '../../types/components'
import {useFocus, useVModel} from '@vueuse/core'
import {computed, inject, onUnmounted, ref, toRef, useSlots} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useBooleanish, useId} from '../../composables'
import type {Booleanish, ButtonVariant, InputSize} from '../../types'
import {checkboxGroupKey, isEmptySlot} from '../../utils'

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
  uncheckedValue?: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
  value?: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
  modelValue?: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
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
  value: true,
  uncheckedValue: false,
})

interface BFormCheckboxEmits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'input', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormCheckboxEmits>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

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

const parentData = inject(checkboxGroupKey, null)

const input = ref<HTMLElement | null>(null)

useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const hasDefaultSlot = computed<boolean>(() => !isEmptySlot(slots.default))

const localValue = computed({
  get() {
    if (parentData !== null) {
      const jsonified = parentData.modelValue.value.map((el) => JSON.stringify(el))
      const jsonifiedValue = JSON.stringify(props.value)
      return jsonified.includes(jsonifiedValue)
    }
    return JSON.stringify(modelValue.value) === JSON.stringify(props.value)
  },
  set(newValue) {
    const updateValue = !newValue ? props.uncheckedValue : props.value

    emit('input', updateValue)
    modelValue.value = updateValue
    emit('change', updateValue)

    if (parentData === null) return
    if (!newValue) {
      parentData.remove(props.value)
      return
    }
    parentData.set(props.value)
  },
})

const classesObject = computed(() => ({
  plain: plainBoolean.value || (parentData?.plain.value ?? false),
  button: buttonBoolean.value || (parentData?.buttons.value ?? false),
  inline: inlineBoolean.value || (parentData?.inline.value ?? false),
  switch: switchBoolean.value || (parentData?.switch.value ?? false),
  size: props.size || parentData?.size.value, // TODO some of these values will be weirdly incorrect since they arent falsy
  state: stateBoolean.value || parentData?.state.value,
  buttonVariant: props.buttonVariant || parentData?.buttonVariant.value,
}))
const computedClasses = getClasses(classesObject)
const inputClasses = getInputClasses(classesObject)
const labelClasses = getLabelClasses(classesObject)

onUnmounted(() => {
  if (parentData !== null && localValue.value === true) {
    parentData.remove(props.value)
  }
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
