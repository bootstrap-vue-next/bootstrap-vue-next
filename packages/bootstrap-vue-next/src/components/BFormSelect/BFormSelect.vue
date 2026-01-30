<template>
  <select
    :id="computedId"
    ref="_input"
    v-model="modelValue"
    :class="computedClasses"
    :name="props.name"
    :form="props.form || undefined"
    :multiple="props.multiple || undefined"
    :size="computedSelectSize"
    :disabled="props.disabled"
    :required="props.required || undefined"
    :aria-required="props.required || undefined"
    :aria-invalid="computedAriaInvalid"
  >
    <slot name="first" />
    <template v-for="(option, index) in normalizedOptsWrapper" :key="index">
      <BFormSelectOptionGroup
        v-if="isComplex(option)"
        :label="option.label"
        :options="option.options"
        :value-field="props.valueField as any"
        :text-field="props.textField as any"
        :disabled-field="props.disabledField as any"
      />
      <BFormSelectOption
        v-else
        :value="option.value"
        :disabled="option.disabled"
        v-bind="getOptionAttrs(option)"
      >
        <slot name="option" v-bind="option">
          {{ option.text }}
        </slot>
      </BFormSelectOption>
    </template>
    <slot />
  </select>
</template>

<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import type {BFormSelectProps} from '../../types/ComponentProps'
import {computed, provide, readonly, useTemplateRef} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import {useAriaInvalid} from '../../composables/useAriaInvalid'
import {useFocus, useToNumber} from '@vueuse/core'
import {useId} from '../../composables/useId'
import {useStateClass} from '../../composables/useStateClass'
import {useFormSelect} from '../../composables/useFormSelect'
import type {ComplexSelectOptionRaw, SelectOption} from '../../types/SelectTypes'
import type {BFormSelectSlots} from '../../types'
import {formSelectKey} from '../../utils/keys'

const props = withDefaults(defineProps<Omit<BFormSelectProps<Item, ValueKey>, 'modelValue'>>(), {
  ariaInvalid: undefined,
  autofocus: false,
  disabled: false,
  disabledField: 'disabled' as keyof Item & string,
  form: undefined,
  id: undefined,
  labelField: 'label' as keyof Item & string,
  multiple: false,
  name: undefined,
  options: () => [],
  optionsField: 'options' as keyof Item & string,
  plain: false,
  required: false,
  selectSize: 0,
  size: 'md',
  state: null,
  textField: 'text' as keyof Item & string,
  valueField: 'value' as ValueKey & string,
})
defineSlots<BFormSelectSlots<Item[ValueKey]>>()

const modelValue = defineModel<Item[ValueKey] | readonly Item[ValueKey][]>({
  default: undefined,
})

const computedId = useId(() => props.id, 'input')

const selectSizeNumber = useToNumber(() => props.selectSize)

const stateClass = useStateClass(() => props.state)

const input = useTemplateRef('_input')

const {focused} = useFocus(input, {
  initialValue: props.autofocus,
})

const computedClasses = computed(() => [
  stateClass.value,
  {
    'form-control': props.plain,
    [`form-control-${props.size}`]: props.size !== 'md' && props.plain,
    'form-select': !props.plain,
    [`form-select-${props.size}`]: props.size !== 'md' && !props.plain,
  },
])

const computedSelectSize = computed(() =>
  selectSizeNumber.value || props.plain ? selectSizeNumber.value : undefined
)

const computedAriaInvalid = useAriaInvalid(
  () => props.ariaInvalid,
  () => props.state
)

const {normalizedOptions, isComplex} = useFormSelect(() => props.options, props)

const normalizedOptsWrapper = computed(
  () =>
    normalizedOptions.value as readonly (
      | ComplexSelectOptionRaw<Item[ValueKey]>
      | SelectOption<Item[ValueKey]>
    )[]
)

// Helper to extract additional attributes from option (excluding known props)
const getOptionAttrs = (option: SelectOption<Item[ValueKey]>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {value, text, disabled, ...attrs} = option
  return attrs
}

// Provide the current model value for child components to inject
provide(formSelectKey, {
  modelValue: readonly(modelValue),
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
