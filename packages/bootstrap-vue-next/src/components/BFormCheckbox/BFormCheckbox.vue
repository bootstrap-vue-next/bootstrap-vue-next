<template>
  <RenderComponentOrSkip
    :skip="isButtonGroup"
    v-bind="props.wrapperAttrs"
    :class="computedWrapperClasses"
  >
    <input
      :id="computedId"
      ref="input"
      v-model="localValue"
      :class="computedInputClasses"
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
      :indeterminate="indeterminate"
      v-bind="inputAttrs"
    />
    <label v-if="hasDefaultSlot || props.plain === false" :for="computedId" :class="labelClasses">
      <slot />
    </label>
  </RenderComponentOrSkip>
</template>

<script setup lang="ts">
import {useFocus} from '@vueuse/core'
import {computed, inject, ref, useAttrs} from 'vue'
import {getClasses, getInputClasses, getLabelClasses} from '../../composables/useFormCheck'
import type {BFormCheckboxProps} from '../../types/ComponentProps'
import {checkboxGroupKey} from '../../utils/keys'
import RenderComponentOrSkip from '../RenderComponentOrSkip.vue'
import {isEmptySlot} from '../../utils/dom'
import {useDefaults} from '../../composables/useDefaults'
import type {CheckboxValue} from '../../types/CheckboxTypes'
import {useId} from '../../composables/useId'

defineOptions({
  inheritAttrs: false,
})

const {class: wrapperClass, ...inputAttrs} = useAttrs()

const _props = withDefaults(
  defineProps<Omit<BFormCheckboxProps, 'modelValue' | 'indeterminate'>>(),
  {
    wrapperAttrs: undefined,
    inputClass: undefined,
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
  }
)
const props = useDefaults(_props, 'BFormCheckbox')

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<BFormCheckboxProps['modelValue']>({
  default: undefined,
})
const indeterminate = defineModel<Exclude<BFormCheckboxProps['indeterminate'], undefined>>(
  'indeterminate',
  {
    default: false,
  }
)

const computedId = useId(() => props.id, 'form-check')

const parentData = inject(checkboxGroupKey, null)

const input = ref<HTMLElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: props.autofocus,
})

const hasDefaultSlot = computed(() => !isEmptySlot(slots.default))

const localValue = computed({
  get: () => (parentData ? parentData.modelValue.value : modelValue.value),
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

const computedRequired = computed(
  () => !!(props.name ?? parentData?.name.value) && (props.required || parentData?.required.value)
)

const isButtonGroup = computed(() => props.buttonGroup || (parentData?.buttons.value ?? false))

const classesObject = computed(() => ({
  plain: props.plain || (parentData?.plain.value ?? false),
  button: props.button || (parentData?.buttons.value ?? false),
  inline: props.inline || (parentData?.inline.value ?? false),
  reverse: props.reverse || (parentData?.reverse.value ?? false),
  switch: props.switch || (parentData?.switch.value ?? false),
  state:
    props.state === true || props.state === false ? props.state : parentData?.state.value ?? null,
  size: props.size ?? parentData?.size.value ?? 'md', // This is where the true default is made
  buttonVariant: props.buttonVariant ?? parentData?.buttonVariant.value ?? 'secondary', // This is where the true default is made
  hasDefaultSlot: hasDefaultSlot.value,
}))
const wrapperClasses = getClasses(classesObject)
const computedWrapperClasses = computed(() => [wrapperClasses.value, wrapperClass])
const inputClasses = getInputClasses(classesObject)
const computedInputClasses = computed(() => [inputClasses.value, props.inputClass])
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
