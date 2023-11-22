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
      :true-value="value"
      :false-value="uncheckedValue"
      :indeterminate="indeterminateBoolean"
      @change="modelValue !== undefined && emit('change', modelValue)"
      @input="modelValue !== undefined && emit('input', modelValue)"
    />
    <label v-if="hasDefaultSlot || plainBoolean === false" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </RenderComponentOrSkip>
</template>

<script setup lang="ts">
import {useFocus, useVModel} from '@vueuse/core'
import {computed, inject, ref, toRef} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useBooleanish, useId} from '../../composables'
import type {Booleanish, ButtonVariant, CheckboxValue, Size} from '../../types'
import {checkboxGroupKey, isEmptySlot} from '../../utils'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    ariaLabelledBy?: string
    autofocus?: Booleanish
    button?: Booleanish
    buttonGroup?: Booleanish
    buttonVariant?: ButtonVariant | null
    disabled?: Booleanish
    form?: string
    id?: string
    indeterminate?: Booleanish
    inline?: Booleanish
    modelValue?: CheckboxValue | CheckboxValue[]
    name?: string
    plain?: Booleanish
    required?: Booleanish
    size?: Size
    state?: Booleanish | null
    switch?: Booleanish
    uncheckedValue?: CheckboxValue
    value?: CheckboxValue
  }>(),
  {
    ariaLabel: undefined,
    ariaLabelledBy: undefined,
    autofocus: false,
    button: false,
    buttonGroup: false,
    buttonVariant: null,
    disabled: false,
    form: undefined,
    id: undefined,
    indeterminate: undefined,
    inline: false,
    modelValue: undefined,
    name: undefined,
    plain: false,
    required: undefined,
    size: undefined,
    state: null,
    switch: false,
    uncheckedValue: false,
    value: true,
  }
)

const emit = defineEmits<{
  'change': [value: CheckboxValue | CheckboxValue[]]
  'input': [value: CheckboxValue | CheckboxValue[]]
  'update:modelValue': [value: CheckboxValue | CheckboxValue[]]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

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

const hasDefaultSlot = toRef(() => !isEmptySlot(slots.default))

const localValue = computed({
  get: () => parentData?.modelValue.value ?? modelValue.value,
  set: (newVal) => {
    if (newVal === undefined) return
    if (parentData !== null && Array.isArray(newVal)) {
      // The type cast isn't perfect. Array.isArray detects CheckboxValue.unknown[],
      // but since it's parentData, it should always be CheckboxValue[]
      // It doesn't quite work when props.value is an [], but this is more of a Vue issue
      parentData.modelValue.value = newVal as CheckboxValue[]
      return
    }
    modelValue.value = newVal as CheckboxValue
  },
})

const computedRequired = toRef(
  () =>
    !!(props.name ?? parentData?.name.value) &&
    (requiredBoolean.value || parentData?.required.value)
)

const isButtonGroup = toRef(() => buttonGroupBoolean.value || (parentData?.buttons.value ?? false))

const classesObject = computed(() => ({
  plain: plainBoolean.value || (parentData?.plain.value ?? false),
  button: buttonBoolean.value || (parentData?.buttons.value ?? false),
  inline: inlineBoolean.value || (parentData?.inline.value ?? false),
  switch: switchBoolean.value || (parentData?.switch.value ?? false),
  state: stateBoolean.value || parentData?.state.value,
  size: props.size ?? parentData?.size.value ?? 'md', // This is where the true default is made
  buttonVariant: props.buttonVariant ?? parentData?.buttonVariant.value ?? 'secondary', // This is where the true default is made
}))
const computedClasses = getClasses(classesObject)
const inputClasses = getInputClasses(classesObject)
const labelClasses = getLabelClasses(classesObject)

defineExpose({
  blur: () => {
    focused.value = false
  },
  element: input,
  focus: () => {
    focused.value = true
  },
})
</script>
