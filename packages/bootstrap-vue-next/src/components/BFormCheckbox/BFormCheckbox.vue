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
      :required="computedRequired || undefined"
      :name="name || parentData?.name.value"
      :form="form || parentData?.form.value"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :aria-required="computedRequired || undefined"
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
import {computed, inject, nextTick, ref, useSlots, watch} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useBooleanish, useId} from '../../composables'
import type {Booleanish, ButtonVariant, Size} from '../../types'
import {checkboxGroupKey, isEmptySlot} from '../../utils'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
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
    buttonVariant?: ButtonVariant | null
    inline?: Booleanish
    required?: Booleanish
    size?: Size
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
    modelValue?:
      | unknown[]
      | Set<unknown>
      | boolean
      | string
      | Record<string, unknown>
      | number
      | null
  }>(),
  {
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
    buttonVariant: null,
    inline: false,
    size: undefined,
    value: true,
    uncheckedValue: undefined,
  }
)

const emit = defineEmits<{
  'update:modelValue': [
    value:
      | unknown[]
      | Set<unknown>
      | boolean
      | string
      | Record<string, unknown>
      | number
      | null
      | undefined,
  ]
  'input': [
    value:
      | unknown[]
      | Set<unknown>
      | boolean
      | string
      | Record<string, unknown>
      | number
      | null
      | undefined,
  ]
  'change': [
    value:
      | unknown[]
      | Set<unknown>
      | boolean
      | string
      | Record<string, unknown>
      | number
      | null
      | undefined,
  ]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(() => props.id, 'form-check')

const indeterminateBoolean = useBooleanish(() => props.indeterminate)
const autofocusBoolean = useBooleanish(() => props.autofocus)
const plainBoolean = useBooleanish(() => props.plain)
const buttonBoolean = useBooleanish(() => props.button)
const buttonGroupBoolean = useBooleanish(() => props.buttonGroup)
const switchBoolean = useBooleanish(() => props.switch)
const disabledBoolean = useBooleanish(() => props.disabled)
const inlineBoolean = useBooleanish(() => props.inline)
const requiredBoolean = useBooleanish(() => props.required)
const stateBoolean = useBooleanish(() => props.state)

const parentData = inject(checkboxGroupKey, null)

const input = ref<HTMLElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const hasDefaultSlot = computed(() => !isEmptySlot(slots.default))

let internalUpdate = false

const localValue = computed({
  get: () =>
    parentData !== null
      ? parentData.modelValue.value
          .map((el) => JSON.stringify(el))
          .includes(JSON.stringify(props.value))
      : Array.isArray(modelValue.value)
      ? modelValue.value?.map((el) => JSON.stringify(el)).includes(JSON.stringify(props.value))
      : JSON.stringify(modelValue.value) === JSON.stringify(props.value),
  set: (newValue) => {
    const updateValue = newValue
      ? props.value
      : props.uncheckedValue === undefined && props.value !== false
      ? false
      : props.uncheckedValue
    emit('input', updateValue)

    if (parentData === null && Array.isArray(modelValue.value)) {
      if (newValue) {
        modelValue.value.push(props.value)
        if (props.uncheckedValue !== undefined)
          modelValue.value = modelValue.value.filter(
            (x) => JSON.stringify(x) !== JSON.stringify(props.uncheckedValue)
          )
      } else {
        if (props.uncheckedValue !== undefined) modelValue.value.push(props.uncheckedValue)
        modelValue.value = modelValue.value.filter(
          (x) => JSON.stringify(x) !== JSON.stringify(props.value)
        )
      }
    } else {
      if (parentData !== null) {
        internalUpdate = true
        modelValue.value = updateValue

        if (newValue === false) {
          parentData.remove(props.value)
        } else {
          parentData.set(props.value)
        }
      } else {
        modelValue.value = updateValue
      }
    }
    nextTick(() => {
      emit('change', updateValue)
      internalUpdate = false
    })
  },
})

watch(modelValue, (newValue) => {
  if (internalUpdate) {
    internalUpdate = false
    return
  }
  if (parentData === null) return
  if ((newValue === props.value || newValue === true) && localValue.value !== true)
    localValue.value = true
  else if ((newValue === props.uncheckedValue || newValue === false) && localValue.value !== false)
    localValue.value = false
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
    props.buttonVariant !== null
      ? props.buttonVariant
      : parentData?.buttonVariant.value ?? 'secondary', // This is where the true default is made
}))
const computedClasses = getClasses(classesObject)
const inputClasses = getInputClasses(classesObject)
const labelClasses = getLabelClasses(classesObject)

defineExpose({
  focus: () => {
    focused.value = true
  },
  blur: () => {
    focused.value = false
  },
  input,
})
</script>
