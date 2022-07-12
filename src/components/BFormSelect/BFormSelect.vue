<template>
  <select
    :id="computedId"
    ref="input"
    v-bind="$attrs"
    v-model="localValue"
    :class="classes"
    :name="name"
    :form="form || undefined"
    :multiple="multiple || undefined"
    :size="computedSelectSize"
    :disabled="disabled"
    :required="required"
    :aria-required="required ? true : undefined"
    :aria-invalid="computedAriaInvalid"
  >
    <slot name="first" />
    <template v-for="(option, index) in formOptions">
      <b-form-select-option-group
        v-if="Array.isArray(option.options)"
        :key="`option_${index}`"
        :label="option.label"
        :options="option.options"
      />
      <!-- eslint-disable vue/no-v-html -->
      <b-form-select-option
        v-else
        :key="`option2_${index}`"
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
// import type {BFormSelectEmits, BFormSelectProps} from '../types/components'
import type {Size} from '../../types'
import {computed, nextTick, onActivated, onMounted, ref} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import useId from '../../composables/useId'
import {normalizeOptions} from '../../composables/useFormSelect'

interface BFormSelectProps {
  ariaInvalid?: boolean | 'grammar' | 'spelling'
  autofocus?: boolean
  disabled?: boolean
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  labelField?: string
  multiple?: boolean
  name?: string
  options?: Array<unknown> | Record<string, unknown>
  optionsField?: string
  plain?: boolean
  required?: boolean
  selectSize?: number
  size?: Size
  state?: boolean
  textField?: string
  valueField?: string
  modelValue?: string | Array<unknown> | Record<string, unknown> | number
}

const props = withDefaults(defineProps<BFormSelectProps>(), {
  ariaInvalid: false,
  autofocus: false,
  disabled: false,
  disabledField: 'disabled',
  htmlField: 'html',
  labelField: 'label',
  multiple: false,
  options: () => [],
  optionsField: 'options',
  plain: false,
  required: false,
  selectSize: 0,
  state: undefined,
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

const input = ref<HTMLElement>()
const computedId = useId(props.id, 'input')

// lifecycle events
const handleAutofocus = () => {
  nextTick(() => {
    if (props.autofocus) input.value?.focus()
  })
}
onMounted(handleAutofocus)
onActivated(handleAutofocus)
// /lifecycle events

// computed
// noinspection PointlessBooleanExpressionJS
const classes = computed(() => ({
  'form-control': props.plain,
  [`form-control-${props.size}`]: props.size && props.plain,
  'form-select': !props.plain,
  [`form-select-${props.size}`]: props.size && !props.plain,
  'is-valid': props.state === true,
  'is-invalid': props.state === false,
}))

const computedSelectSize = computed<number | undefined>(() => {
  if (props.selectSize || props.plain) {
    return props.selectSize
  }
  return undefined
})

const computedAriaInvalid = computed<'grammar' | 'spelling' | boolean | undefined>(() => {
  // noinspection SuspiciousTypeOfGuard
  if (typeof props.state === 'boolean') {
    if (!props.state) {
      return true
    }
    return undefined
  }
  if (typeof props.ariaInvalid === 'boolean') {
    if (!props.ariaInvalid) {
      return undefined
    }
    return props.ariaInvalid
  }
  return props.ariaInvalid
})

const formOptions = computed(() =>
  normalizeOptions(props.options as Array<any>, 'BFormSelect', props)
)
const localValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue: any) {
    emit('change', newValue)
    emit('update:modelValue', newValue)
    emit('input', newValue)
  },
})

// /computed

// methods

const focus = () => {
  if (!props.disabled) input.value?.focus()
}

const blur = () => {
  if (!props.disabled) {
    input.value?.blur()
  }
}
// /methods

defineExpose({
  blur,
  focus,
})
</script>
