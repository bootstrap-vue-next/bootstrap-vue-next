<template>
  <div :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :checked="localValue"
      :class="inputClasses"
      type="radio"
      :disabled="disabledBoolean || parentData?.disabled.value"
      :required="computedRequired ? true : undefined"
      :name="name || parentData?.name.value"
      :form="form || parentData?.form.value"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      :value="value"
      :aria-required="computedRequired ? true : undefined"
    />
    <label v-if="hasDefaultSlot || plainBoolean === false" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import {useFocus, useVModel} from '@vueuse/core'
import {computed, inject, onUnmounted, ref, toRef, useSlots} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useBooleanish, useId} from '../../composables'
import type {Booleanish, ButtonVariant, InputSize} from '../../types'
import {isEmptySlot, radioGroupKey} from '../../utils'

interface BFormRadioProps {
  ariaLabel?: string
  ariaLabelledby?: string
  form?: string
  id?: string
  name?: string
  size?: InputSize
  autofocus?: Booleanish
  modelValue?: boolean | string | unknown[] | Record<string, unknown> | number
  plain?: Booleanish
  button?: Booleanish
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
  disabled: false,
  modelValue: undefined,
  state: undefined,
  buttonVariant: 'secondary',
  inline: false,
  required: false,
  value: true,
})

interface BFormRadioEmits {
  (e: 'input', value: boolean | string | unknown[] | Record<string, unknown> | number): void
  (e: 'change', value: boolean | string | unknown[] | Record<string, unknown> | number): void
  (
    e: 'update:modelValue',
    value: boolean | string | unknown[] | Record<string, unknown> | number
  ): void
}

const emit = defineEmits<BFormRadioEmits>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(toRef(props, 'id'), 'form-check')

const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const buttonBoolean = useBooleanish(toRef(props, 'button'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const inlineBoolean = useBooleanish(toRef(props, 'inline'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stateBoolean = useBooleanish(toRef(props, 'state'))

const parentData = inject(radioGroupKey, null)

const input = ref<HTMLElement | null>(null)

useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const hasDefaultSlot = computed(() => !isEmptySlot(slots.default))

const localValue = computed({
  get: () =>
    parentData !== null
      ? JSON.stringify(parentData.modelValue.value) === JSON.stringify(props.value)
      : JSON.stringify(modelValue.value) === JSON.stringify(props.value),
  set: (newValue) => {
    const updateValue = !newValue ? false : props.value

    emit('input', updateValue)
    modelValue.value = updateValue
    emit('change', updateValue)

    if (parentData === null || updateValue === false) return
    parentData.set(props.value)
  },
})

const computedRequired = computed(
  () =>
    !!(props.name ?? parentData?.name.value) &&
    (requiredBoolean.value || parentData?.required.value)
)

const classesObject = computed(() => ({
  plain: plainBoolean.value || (parentData?.plain.value ?? false),
  button: buttonBoolean.value || (parentData?.button.value ?? false),
  inline: inlineBoolean.value || (parentData?.inline.value ?? false),
  size: props.size || parentData?.size.value, // TODO some of these values will be weirdly incorrect since they arent falsy
  state: stateBoolean.value || parentData?.state.value,
  buttonVariant: props.buttonVariant || parentData?.buttonVariant.value, // Above
}))
const computedClasses = getClasses(classesObject)
const inputClasses = getInputClasses(classesObject)
const labelClasses = getLabelClasses(classesObject)

onUnmounted(() => {
  if (parentData !== null && localValue.value === true) {
    parentData.set('')
  }
})
</script>
