<template>
  <select
    :id="computedId"
    ref="input"
    v-bind="$attrs"
    v-model="localValue"
    :class="classes"
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
import type {Booleanish, Size} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed, nextTick, onActivated, onMounted, ref} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import {normalizeOptions, useId} from '../../composables'

interface BFormSelectProps {
  ariaInvalid?: boolean | 'grammar' | 'spelling'
  autofocus?: Booleanish
  disabled?: Booleanish
  disabledField?: string
  form?: string
  htmlField?: string
  id?: string
  labelField?: string
  multiple?: Booleanish
  name?: string
  options?: Array<unknown> | Record<string, unknown>
  optionsField?: string
  plain?: Booleanish
  required?: Booleanish
  selectSize?: number
  size?: Size
  state?: Booleanish
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
  textField: 'text',
  valueField: 'value',
  modelValue: '',
})

const autofocusBoolean = computed<boolean>(() => resolveBooleanish(props.autofocus))
const disabledBoolean = computed<boolean>(() => resolveBooleanish(props.disabled))
const multipleBoolean = computed<boolean>(() => resolveBooleanish(props.multiple))
const plainBoolean = computed<boolean>(() => resolveBooleanish(props.plain))
const requiredBoolean = computed<boolean>(() => resolveBooleanish(props.required))
const stateBoolean = computed(() =>
  props.state !== undefined ? resolveBooleanish(props.state) : undefined
)

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
    if (autofocusBoolean.value) input.value?.focus()
  })
}
onMounted(handleAutofocus)
onActivated(handleAutofocus)
// /lifecycle events

// computed
// noinspection PointlessBooleanExpressionJS
const classes = computed(() => ({
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

const computedAriaInvalid = computed<'grammar' | 'spelling' | boolean | undefined>(() => {
  // noinspection SuspiciousTypeOfGuard
  if (typeof stateBoolean.value === 'boolean') {
    if (!stateBoolean.value) {
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
  if (!disabledBoolean.value) input.value?.focus()
}

const blur = () => {
  if (!disabledBoolean.value) {
    input.value?.blur()
  }
}
// /methods

defineExpose({
  blur,
  focus,
})
</script>
