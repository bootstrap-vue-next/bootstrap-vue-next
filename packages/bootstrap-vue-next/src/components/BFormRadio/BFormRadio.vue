<template>
  <RenderComponentOrSkip :skip="isButtonGroup" :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
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
    <label v-if="hasDefaultSlot || props.plain === false" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </RenderComponentOrSkip>
</template>

<script setup lang="ts">
import {useFocus} from '@vueuse/core'
import {computed, inject, ref, toRef} from 'vue'
import {getClasses, getInputClasses, getLabelClasses, useDefaults, useId} from '../../composables'
import type {BFormRadioProps, RadioValue} from '../../types'
import {isEmptySlot, radioGroupKey} from '../../utils'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BFormRadioProps>(), {
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
  name: undefined,
  plain: false,
  required: false,
  reverse: false,
  size: undefined,
  state: null,
  value: true,
})
const props = useDefaults(_props, 'BFormRadio')

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<RadioValue | undefined>({
  default: undefined,
})

const computedId = useId(() => props.id, 'form-check')

const parentData = inject(radioGroupKey, null)

const input = ref<HTMLElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: props.autofocus,
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
  () => !!(props.name ?? parentData?.name.value) && (props.required || parentData?.required.value)
)

const isButtonGroup = toRef(() => props.buttonGroup || (parentData?.buttons.value ?? false))

const classesObject = computed(() => ({
  plain: props.plain || (parentData?.plain.value ?? false),
  button: props.button || (parentData?.buttons.value ?? false),
  inline: props.inline || (parentData?.inline.value ?? false),
  state: props.state || parentData?.state.value,
  reverse: props.reverse || (parentData?.reverse.value ?? false),
  size: props.size ?? parentData?.size.value ?? 'md', // This is where the true default is made
  buttonVariant: props.buttonVariant ?? parentData?.buttonVariant.value ?? 'secondary', // This is where the true default is made
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
