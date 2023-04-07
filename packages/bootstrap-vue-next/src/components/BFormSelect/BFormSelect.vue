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
    :required="requiredBoolean"
    :aria-required="requiredBoolean ? true : undefined"
    :aria-invalid="computedAriaInvalid"
  >
    <slot name="first" />
    <template v-for="option in normalizeOptions" :key="option">
      <b-form-select-option-group
        v-if="Array.isArray(option)"
        :label="option.label"
        :options="option.options"
      />
      <!-- eslint-disable vue/no-v-text-v-html-on-component -->
      <!-- eslint-disable vue/no-v-html -->
      <b-form-select-option
        v-else
        :value="option.value"
        :disabled="option.disabled"
        v-html="option.html || option.text"
      />
      <!--eslint-enable-->
    </template>
    <slot />
  </select>
</template>

<script setup lang="ts">
import {resolveAriaInvalid} from '../../utils'
import type {AriaInvalid, Booleanish, Size} from '../../types'
import {computed, nextTick, ref, toRef} from 'vue'
import {useBooleanish, useId} from '../../composables'
import {useFocus, useVModel} from '@vueuse/core'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'

interface BFormSelectProps {
  ariaInvalid?: AriaInvalid
  autofocus?: Booleanish
  disabled?: Booleanish
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  labelField?: string
  multiple?: Booleanish
  name?: string
  options?: (
    | string
    | number
    | Record<string, unknown>
    | (string | number | Record<string, unknown>)[]
  )[]
  optionsField?: string
  plain?: Booleanish
  required?: Booleanish
  selectSize?: number
  size?: Size
  state?: Booleanish
  textField?: string
  valueField?: string
  modelValue?: string | unknown[] | Record<string, unknown> | number
}

const props = withDefaults(defineProps<BFormSelectProps>(), {
  ariaInvalid: undefined,
  autofocus: false,
  disabled: false,
  disabledField: 'disabled',
  htmlField: 'html',
  state: undefined,
  labelField: 'label',
  multiple: false,
  options: () => [],
  optionsField: 'options',
  plain: false,
  required: false,
  selectSize: 0,
  textField: 'text',
  valueField: 'value',
  modelValue: '',
})

interface BFormSelectEmits {
  (e: 'input', value: unknown): void
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormSelectEmits>()

const modelValue = useVModel(props, 'modelValue', emit)

const computedId = useId(toRef(props, 'id'), 'input')

const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const multipleBoolean = useBooleanish(toRef(props, 'multiple'))
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stateBoolean = useBooleanish(toRef(props, 'state'))

const input = ref<HTMLElement>()

useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const computedClasses = computed(() => ({
  'form-control': plainBoolean.value,
  [`form-control-${props.size}`]: props.size && plainBoolean.value,
  'form-select': !plainBoolean.value,
  [`form-select-${props.size}`]: props.size && !plainBoolean.value,
  'is-valid': stateBoolean.value === true,
  'is-invalid': stateBoolean.value === false,
}))

const computedSelectSize = computed<number | undefined>(() => {
  if (props.selectSize || plainBoolean.value) {
    return props.selectSize
  }
  return undefined
})

const computedAriaInvalid = computed(() =>
  resolveAriaInvalid(props.ariaInvalid, stateBoolean.value)
)

const localValue = computed({
  get: () => modelValue.value,
  set: (newValue: any) => {
    emit('input', newValue)
    modelValue.value = newValue
    nextTick(() => {
      emit('change', newValue)
    })
  },
})
</script>
