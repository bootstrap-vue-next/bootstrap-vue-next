<template>
  <RenderComponentOrSkip :skip="isButtonGroup" :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="checkbox"
      :disabled="disabledBoolean || parentData?.disabled.value"
      :required="computedRequired ? true : undefined"
      :name="name || parentData?.name.value"
      :form="form || parentData?.form.value"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :aria-required="computedRequired ? true : undefined"
      :value="value"
      :indeterminate="indeterminateBoolean"
    />
    <label v-if="hasDefaultSlot || plainBoolean === false" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </RenderComponentOrSkip>
</template>

<script setup lang="ts">
import {useFocus, useVModel} from '@vueuse/core'
import {computed, inject, nextTick, ref, toRef, useSlots, watch} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useBooleanish, useId} from '../../composables'
import type {Booleanish, ButtonVariant, InputSize} from '../../types'
import {checkboxGroupKey, isEmptySlot} from '../../utils'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

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
  buttonGroup?: Booleanish
  switch?: Booleanish
  disabled?: Booleanish
  buttonVariant?: ButtonVariant
  inline?: Booleanish
  required?: Booleanish
  size?: InputSize
  state?: Booleanish | null
  uncheckedValue?:
    | unknown[]
    | Set<unknown>
    | boolean
    | string
    | Record<string, unknown>
    | number
    | null
  value?: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  modelValue?: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
}

const props = withDefaults(defineProps<BFormCheckboxProps>(), {
  ariaLabel: undefined,
  ariaLabelledBy: undefined,
  form: undefined,
  indeterminate: undefined,
  name: undefined,
  autofocus: false,
  plain: false,
  button: false,
  buttonGroup: false,
  id: undefined,
  required: undefined,
  state: null,
  modelValue: undefined,
  switch: false,
  disabled: false,
  buttonVariant: undefined,
  inline: false,
  size: undefined,
  value: true,
  uncheckedValue: false,
})

interface BFormCheckboxEmits {
  (
    e: 'update:modelValue',
    value: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  ): void
  (
    e: 'input',
    value: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  ): void
  (
    e: 'change',
    value: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  ): void
}

const emit = defineEmits<BFormCheckboxEmits>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(toRef(props, 'id'), 'form-check')

const indeterminateBoolean = useBooleanish(toRef(props, 'indeterminate'))
const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const buttonBoolean = useBooleanish(toRef(props, 'button'))
const buttonGroupBoolean = useBooleanish(toRef(props, 'buttonGroup'))
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

const hasDefaultSlot = computed(() => !isEmptySlot(slots.default))

const localValue = computed({
  get: () =>
    parentData !== null
      ? parentData.modelValue.value
          .map((el) => JSON.stringify(el))
          .includes(JSON.stringify(props.value))
      : JSON.stringify(modelValue.value) === JSON.stringify(props.value),
  set: (newValue) => {
    const updateValue = newValue ? props.value : props.uncheckedValue

    emit('input', updateValue)
    modelValue.value = updateValue
    nextTick(() => {
      emit('change', updateValue)
    })
  },
})

watch(modelValue, (newValue) => {
  if (parentData === null) return
  if (newValue === false) {
    parentData.remove(props.value)
    return
  }
  parentData.set(props.value)
})

const computedRequired = computed(
  () =>
    !!(props.name ?? parentData?.name.value) &&
    (requiredBoolean.value || parentData?.required.value)
)

const isButtonGroup = computed(
  () => buttonGroupBoolean.value || (parentData?.buttons.value ?? false)
)

const classesObject = computed(() => ({
  plain: plainBoolean.value || (parentData?.plain.value ?? false),
  button: buttonBoolean.value || (parentData?.buttons.value ?? false),
  inline: inlineBoolean.value || (parentData?.inline.value ?? false),
  switch: switchBoolean.value || (parentData?.switch.value ?? false),
  state: stateBoolean.value || parentData?.state.value,
  size: props.size !== undefined ? props.size : parentData?.size.value ?? 'md', // This is where the true default is made
  buttonVariant:
    props.buttonVariant !== undefined
      ? props.buttonVariant
      : parentData?.buttonVariant.value ?? 'secondary', // This is where the true default is made
}))
const computedClasses = getClasses(classesObject)
const inputClasses = getInputClasses(classesObject)
const labelClasses = getLabelClasses(classesObject)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
