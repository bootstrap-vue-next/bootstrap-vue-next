<template>
  <select
    :id="computedId"
    ref="input"
    v-model="localValue"
    :class="computedClasses"
    :name="name"
    :form="form || undefined"
    :multiple="multipleBoolean || undefined"
    :size="computedSelectSize"
    :disabled="disabledBoolean"
    :required="requiredBoolean || undefined"
    :aria-required="requiredBoolean || undefined"
    :aria-invalid="computedAriaInvalid"
  >
    <slot name="first" />
    <template v-for="(option, index) in normalizedOptsWrapper" :key="index">
      <BFormSelectOptionGroup
        v-if="isComplex(option)"
        :label="option.label"
        :options="option.options"
        :value-field="valueField"
        :text-field="textField"
        :html-field="htmlField"
        :disabled-field="disabledField"
      />
      <BFormSelectOption v-else :value="option.value" :disabled="option.disabled">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="!!option.html" v-html="option.html" />
        <template v-else>
          {{ option.text }}
        </template>
      </BFormSelectOption>
    </template>
    <slot />
  </select>
</template>

<script setup lang="ts" generic="T = unknown">
import type {
  AriaInvalid,
  Booleanish,
  ComplexSelectOptionRaw,
  Numberish,
  SelectOption,
  Size,
} from '../../types'
import {computed, ref, toRef} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import {useAriaInvalid, useBooleanish, useFormSelect, useId, useStateClass} from '../../composables'
import {useFocus, useToNumber, useVModel} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    ariaInvalid?: AriaInvalid
    autofocus?: Booleanish
    disabled?: Booleanish
    disabledField?: string
    form?: string
    htmlField?: string
    id?: string
    labelField?: string
    modelValue?:
      | string
      | readonly unknown[]
      | Readonly<Record<string, unknown>>
      | number
      | boolean
      | null
    multiple?: Booleanish
    name?: string
    options?: readonly (unknown | Record<string, unknown>)[]
    optionsField?: string
    plain?: Booleanish
    required?: Booleanish
    selectSize?: Numberish
    size?: Size
    state?: Booleanish | null
    textField?: string
    valueField?: string
  }>(),
  {
    ariaInvalid: undefined,
    autofocus: false,
    disabled: false,
    disabledField: 'disabled',
    form: undefined,
    htmlField: 'html',
    id: undefined,
    labelField: 'label',
    modelValue: '',
    multiple: false,
    name: undefined,
    // eslint-disable-next-line vue/require-valid-default-prop
    options: () => [],
    optionsField: 'options',
    plain: false,
    required: false,
    selectSize: 0,
    size: 'md',
    state: null,
    textField: 'text',
    valueField: 'value',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(() => props.id, 'input')

const autofocusBoolean = useBooleanish(() => props.autofocus)
const disabledBoolean = useBooleanish(() => props.disabled)
const multipleBoolean = useBooleanish(() => props.multiple)
const plainBoolean = useBooleanish(() => props.plain)
const requiredBoolean = useBooleanish(() => props.required)
const stateBoolean = useBooleanish(() => props.state)
const selectSizeNumber = useToNumber(() => props.selectSize)

const stateClass = useStateClass(stateBoolean)

const input = ref<HTMLElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const computedClasses = computed(() => [
  stateClass.value,
  {
    'form-control': plainBoolean.value,
    [`form-control-${props.size}`]: props.size !== 'md' && plainBoolean.value,
    'form-select': !plainBoolean.value,
    [`form-select-${props.size}`]: props.size !== 'md' && !plainBoolean.value,
  },
])

const computedSelectSize = toRef(() =>
  selectSizeNumber.value || plainBoolean.value ? selectSizeNumber.value : undefined
)

const computedAriaInvalid = useAriaInvalid(() => props.ariaInvalid, stateBoolean)

const {normalizedOptions, isComplex} = useFormSelect(() => props.options, props)

const normalizedOptsWrapper = computed(
  () => normalizedOptions.value as readonly (ComplexSelectOptionRaw<T> | SelectOption<T>)[]
)

const localValue = computed({
  get: () => modelValue.value,
  set: (newValue) => {
    modelValue.value = newValue
  },
})

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
