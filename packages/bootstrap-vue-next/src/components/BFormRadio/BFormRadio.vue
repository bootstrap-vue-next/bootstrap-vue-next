<template>
  <RenderComponentOrSkip :skip="isButtonGroup" :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="radio"
      :disabled="disabledBoolean || parentData?.disabled.value"
      :required="computedRequired || undefined"
      :name="name || parentData?.name.value"
      :form="form || parentData?.form.value"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      :value="value"
      :aria-required="computedRequired || undefined"
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
import type {Booleanish, ButtonVariant, RadioValue, Size} from '../../types'
import {isEmptySlot, radioGroupKey} from '../../utils'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    ariaLabelledby?: string
    autofocus?: Booleanish
    button?: Booleanish
    buttonGroup?: Booleanish
    buttonVariant?: ButtonVariant | null
    disabled?: Booleanish
    form?: string
    id?: string
    inline?: Booleanish
    modelValue?: RadioValue
    name?: string
    plain?: Booleanish
    required?: Booleanish
    size?: Size
    state?: Booleanish | null
    value?: RadioValue
  }>(),
  {
    ariaLabel: undefined,
    ariaLabelledby: undefined,
    autofocus: false,
    button: false,
    buttonGroup: false,
    buttonVariant: null,
    disabled: false,
    form: undefined,
    id: undefined,
    inline: false,
    modelValue: undefined,
    name: undefined,
    plain: false,
    required: false,
    size: undefined,
    state: null,
    value: true,
  }
)

const emit = defineEmits<{
  'change': [value: RadioValue]
  'input': [value: RadioValue]
  'update:modelValue': [value: RadioValue]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(() => props.id, 'form-check')

const autofocusBoolean = useBooleanish(() => props.autofocus)
const plainBoolean = useBooleanish(() => props.plain)
const buttonBoolean = useBooleanish(() => props.button)
const buttonGroupBoolean = useBooleanish(() => props.buttonGroup)
const disabledBoolean = useBooleanish(() => props.disabled)
const inlineBoolean = useBooleanish(() => props.inline)
const requiredBoolean = useBooleanish(() => props.required)
const stateBoolean = useBooleanish(() => props.state)

const parentData = inject(radioGroupKey, null)

const input = ref<HTMLElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const hasDefaultSlot = toRef(() => !isEmptySlot(slots.default))

const localValue = computed({
  get: () => parentData?.modelValue.value ?? modelValue.value,
  set: (newValue) => {
    if (newValue === undefined) return
    if (parentData !== null) {
      parentData.modelValue.value = newValue as RadioValue
      return
    }
    modelValue.value = newValue as RadioValue
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
