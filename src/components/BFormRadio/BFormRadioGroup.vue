<template>
  <div
    v-bind="attrs"
    :id="computedId"
    role="radiogroup"
    :class="classes"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <template v-for="(item, key) in checkboxList" :key="key">
      <b-form-radio v-model="localValue" v-bind="item.props">
        <!-- eslint-disable vue/no-v-html -->
        <span v-if="item.html" v-html="item.html" />
        <!--eslint-enable-->
        <span v-else v-text="item.text" />
      </b-form-radio>
    </template>
  </div>
</template>

<script setup lang="ts">
// import type {BFormRadioGroupEmits, BFormRadioGroupProps} from '../../types/components'
import type {ButtonVariant, Size} from '../../types'
import {computed, useSlots} from 'vue'
import BFormRadio from './BFormRadio.vue'
import {
  bindGroupProps,
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
} from '../../composables/useFormCheck'
import useId from '../../composables/useId'

interface BFormRadioGroupProps {
  size?: Size
  form?: string
  id?: string
  name?: string
  modelValue?: string | boolean | Array<unknown> | Record<string, unknown> | number
  ariaInvalid?: boolean | string
  autofocus?: boolean
  buttonVariant?: ButtonVariant
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  htmlField?: string
  options?: Array<unknown> // Objects are not supported yet
  plain?: boolean
  required?: boolean
  stacked?: boolean
  state?: boolean
  textField?: string
  validated?: boolean
  valueField?: string
}

const props = withDefaults(defineProps<BFormRadioGroupProps>(), {
  modelValue: '',
  ariaInvalid: undefined,
  autofocus: false,
  buttonVariant: 'secondary',
  buttons: false,
  disabled: false,
  disabledField: 'disabled',
  htmlField: 'html',
  options: () => [],
  plain: false,
  required: false,
  stacked: false,
  state: undefined,
  textField: 'text',
  validated: false,
  valueField: 'value',
})

interface BFormRadioGroupEmits {
  (e: 'input', value: unknown): void
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormRadioGroupEmits>()

const slots = useSlots()

const slotsName = 'BFormRadio'
const computedId = useId(props.id, 'radio')
const computedName = useId(props.name, 'checkbox')

const localValue = computed<string | boolean | Array<unknown> | Record<string, unknown> | number>({
  get: () => props.modelValue,
  set: (newValue: any) => {
    emit('input', newValue)
    emit('update:modelValue', newValue)
    emit('change', newValue)
  },
})

const checkboxList = computed<Array<any>>(() =>
  (slots.first ? slotsToElements(slots.first(), slotsName, props.disabled) : [])
    .concat(props.options.map((e) => optionToElement(e, props)))
    .concat(slots.default ? slotsToElements(slots.default(), slotsName, props.disabled) : [])
    .map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId))
    .map((e) => ({
      ...e,
    }))
)

const attrs = getGroupAttr(props)
const classes = getGroupClasses(props)

// TODO: make tests compatible with the v-focus directive
</script>
