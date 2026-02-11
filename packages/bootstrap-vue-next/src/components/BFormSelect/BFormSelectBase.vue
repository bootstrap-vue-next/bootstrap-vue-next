<template>
  <select
    :id="computedId"
    ref="_input"
    v-model="localValue"
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
        :value-field="props.valueField"
        :text-field="props.textField"
        :disabled-field="props.disabledField"
      />
      <BFormSelectOption v-else v-bind="option">
        <slot name="option" v-bind="option">
          {{ option.text }}
        </slot>
      </BFormSelectOption>
    </template>
    <slot />
  </select>
</template>

<script setup lang="ts">
import type {BFormSelectBaseProps} from '../../types/ComponentProps'
import {computed, provide, readonly, useTemplateRef} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import {useAriaInvalid} from '../../composables/useAriaInvalid'
import {useFocus, useToNumber} from '@vueuse/core'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {useStateClass} from '../../composables/useStateClass'
import {useFormSelect} from '../../composables/useFormSelect'
import {formSelectKey} from '../../utils/keys'

/**
 * Base component for BFormSelect - non-generic implementation using useDefaults.
 * Renders a select element with normalized options and option groups.
 * Supports both simple options and complex grouped options.
 */
const _props = withDefaults(defineProps<Omit<BFormSelectBaseProps, 'modelValue'>>(), {
  ariaInvalid: undefined,
  autofocus: false,
  disabled: false,
  disabledField: 'disabled',
  form: undefined,
  id: undefined,
  labelField: 'label',
  multiple: false,
  name: undefined,
  options: () => [],
  optionsField: 'options',
  plain: false,
  required: false,
  selectSize: 0,
  size: 'md',
  state: null,
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormSelect')

const modelValue = defineModel<unknown>({
  default: '',
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
  !props.plain && selectSizeNumber.value > 0 ? selectSizeNumber.value : undefined
)

const computedAriaInvalid = useAriaInvalid(
  () => props.ariaInvalid,
  () => props.state
)

const {normalizedOptions, isComplex} = useFormSelect(() => props.options, props)

const normalizedOptsWrapper = computed(() => normalizedOptions.value)

const localValue = computed({
  get: () => modelValue.value,
  set: (newValue) => {
    modelValue.value = newValue
  },
})

// Provide the current model value for child components to inject
provide(formSelectKey, {
  modelValue: readonly(localValue),
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
