<template>
  <ConditionalWrapper :skip="isButtonGroup" :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="_input"
      v-model="localValue"
      :class="inputClasses"
      type="radio"
      :disabled="props.disabled || parentData?.disabled.value"
      :required="computedRequired || undefined"
      :name="props.name || parentData?.name.value"
      :form="props.form || parentData?.form.value"
      :aria-label="props.ariaLabel"
      :aria-labelledby="props.ariaLabelledby"
      :value="props.value"
      :aria-required="computedRequired || undefined"
    />
    <label v-if="hasDefaultSlot || !resolvedPlain" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </ConditionalWrapper>
</template>

<script setup lang="ts">
import {useFocus} from '@vueuse/core'
import {computed, inject, useTemplateRef} from 'vue'
import {getClasses, getInputClasses, getLabelClasses} from '../../composables/useFormCheck'
import type {BFormRadioProps} from '../../types/ComponentProps'
import {isEmptySlot} from '../../utils/dom'
import ConditionalWrapper from '../ConditionalWrapper.vue'
import {useDefaults} from '../../composables/useDefaults'
import type {RadioValue} from '../../types/RadioTypes'
import {useId} from '../../composables/useId'
import {radioGroupKey} from '../../utils/keys'
import type {BFormRadioSlots} from '../../types'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<Omit<BFormRadioProps, 'modelValue'>>(), {
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  autofocus: false,
  button: undefined,
  buttonGroup: false,
  buttonVariant: undefined,
  disabled: false,
  form: undefined,
  id: undefined,
  inline: undefined,
  name: undefined,
  plain: undefined,
  required: false,
  reverse: undefined,
  size: undefined,
  state: undefined,
  value: true,
})
const props = useDefaults(_props, 'BFormRadio')
const slots = defineSlots<BFormRadioSlots>()

const modelValue = defineModel<BFormRadioProps['modelValue']>({
  default: undefined,
})

const computedId = useId(() => props.id, 'form-check')

const parentData = inject(radioGroupKey, null)

const input = useTemplateRef('_input')

const {focused} = useFocus(input, {
  initialValue: props.autofocus,
})

const hasDefaultSlot = computed(() => !isEmptySlot(slots.default))

// True default values for props that are undefined to support inheritance
const propDefaults = {
  plain: false,
  button: false,
  inline: false,
  reverse: false,
  size: 'md' as const,
  buttonVariant: 'secondary' as const,
  state: null,
}

// Single source of truth for resolved prop values with parent inheritance and defaults
const resolvedProps = computed(() => ({
  plain: props.plain ?? parentData?.plain.value ?? propDefaults.plain,
  button: props.button ?? parentData?.buttons.value ?? propDefaults.button,
  inline: props.inline ?? parentData?.inline.value ?? propDefaults.inline,
  reverse: props.reverse ?? parentData?.reverse.value ?? propDefaults.reverse,
  state: props.state ?? parentData?.state.value ?? propDefaults.state,
  size: props.size ?? parentData?.size.value ?? propDefaults.size,
  buttonVariant:
    props.buttonVariant ?? parentData?.buttonVariant.value ?? propDefaults.buttonVariant,
}))

// Shorthand for template usage
const resolvedPlain = computed(() => resolvedProps.value.plain)

const localValue = computed({
  get: () => (parentData ? parentData.modelValue.value : modelValue.value),
  set: (newValue) => {
    if (newValue === undefined) return
    if (parentData !== null) {
      parentData.modelValue.value = newValue as RadioValue
      return
    }
    modelValue.value = newValue as RadioValue
  },
})

const computedRequired = computed(
  () => !!(props.name ?? parentData?.name.value) && (props.required || parentData?.required.value)
)

const isButtonGroup = computed(() => props.buttonGroup || (parentData?.buttons.value ?? false))

const classesObject = computed(() => ({
  ...resolvedProps.value,
  hasDefaultSlot: hasDefaultSlot.value,
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
