<template>
  <select
    :id="computedId"
    ref="input"
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
        :html-field="props.htmlField"
        :disabled-field="props.disabledField"
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

<script setup lang="ts" generic="T">
import type {BFormSelectProps, ComplexSelectOptionRaw, SelectOption} from '../../types'
import {computed, ref, toRef} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import {useAriaInvalid, useDefaults, useFormSelect, useId, useStateClass} from '../../composables'
import {useFocus, useToNumber} from '@vueuse/core'

const _props = withDefaults(defineProps<BFormSelectProps>(), {
  ariaInvalid: undefined,
  autofocus: false,
  disabled: false,
  disabledField: 'disabled',
  form: undefined,
  htmlField: 'html',
  id: undefined,
  labelField: 'label',
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
})
const props = useDefaults(_props, 'BFormSelect')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const modelValue = defineModel<T>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: '' as any,
})

const computedId = useId(() => props.id, 'input')

const selectSizeNumber = useToNumber(() => props.selectSize)

const stateClass = useStateClass(() => props.state)

const input = ref<HTMLElement | null>(null)

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

const computedSelectSize = toRef(() =>
  selectSizeNumber.value || props.plain ? selectSizeNumber.value : undefined
)

const computedAriaInvalid = useAriaInvalid(
  () => props.ariaInvalid,
  () => props.state
)

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
