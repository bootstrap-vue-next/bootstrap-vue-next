<template>
  <RenderComponentOrSkip :skip="isButtonGroup" :class="computedClasses">
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="input"
      v-model="localValue"
      :class="inputClasses"
      type="checkbox"
      :disabled="props.disabled || parentData?.disabled.value"
      :required="computedRequired || undefined"
      :name="props.name || parentData?.name.value"
      :form="props.form || parentData?.form.value"
      :aria-label="props.ariaLabel"
      :aria-labelledby="props.ariaLabelledby"
      :aria-required="computedRequired || undefined"
      :value="props.value"
      :true-value="props.value"
      :false-value="props.uncheckedValue"
      :indeterminate="props.indeterminate"
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
import type {BFormCheckboxProps, CheckboxValue} from '../../types'
import {checkboxGroupKey, isEmptySlot} from '../../utils'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BFormCheckboxProps>(), {
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
  required: undefined,
  reverse: false,
  size: undefined,
  state: null,
  switch: false,
  uncheckedValue: false,
  value: true,
})
const props = useDefaults(_props, 'BFormCheckbox')

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<CheckboxValue | CheckboxValue[]>({
  default: undefined,
})
const indeterminate = defineModel<boolean>('indeterminate', {
  default: false,
})

const computedId = useId(() => props.id, 'form-check')

const parentData = inject(checkboxGroupKey, null)

const input = ref<HTMLElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: props.autofocus,
})

const hasDefaultSlot = toRef(() => !isEmptySlot(slots.default))

const localValue = computed({
  get: () => parentData?.modelValue.value ?? modelValue.value,
  set: (newVal) => {
    if (newVal === undefined) return
    // Indeterminate is implicitly cleared when the checked state is changed to any value
    //  by the user.  We reflect that here by setting our indetermiate model to false
    //  which will emit the indeterminate event to the parent
    indeterminate.value = false
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
  () => !!(props.name ?? parentData?.name.value) && (props.required || parentData?.required.value)
)

const isButtonGroup = toRef(() => props.buttonGroup || (parentData?.buttons.value ?? false))

const classesObject = computed(() => ({
  plain: props.plain || (parentData?.plain.value ?? false),
  button: props.button || (parentData?.buttons.value ?? false),
  inline: props.inline || (parentData?.inline.value ?? false),
  reverse: props.reverse || (parentData?.reverse.value ?? false),
  switch: props.switch || (parentData?.switch.value ?? false),
  state: props.state || parentData?.state.value,
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
