<template>
  <div
    v-bind="attrs"
    :id="computedId"
    role="group"
    :class="classes"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <template v-for="(item, key) in checkboxList" :key="key">
      <b-form-checkbox v-model="localValue" v-bind="item.props">
        <!-- eslint-disable vue/no-v-html -->
        <span v-if="item.html" v-html="item.html" />
        <!--eslint-enable-->
        <span v-else v-text="item.text" />
      </b-form-checkbox>
    </template>
  </div>
</template>

<script setup lang="ts">
// import type {BFormCheckboxGroupEmits, BFormCheckboxGroupProps} from '../../types/components'
import {computed, useSlots} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import type {ButtonVariant, Size} from '../../types'
import useId from '../../composables/useId'
import {
  bindGroupProps,
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
} from '../../composables/useFormCheck'

interface BFormCheckboxGroupProps {
  id?: string
  form?: string
  modelValue?: Array<unknown>
  ariaInvalid?: boolean | string
  autofocus?: boolean
  buttonVariant?: ButtonVariant
  buttons?: boolean
  disabled?: boolean
  disabledField?: string
  htmlField?: string
  name?: string
  options?: Array<unknown> // Objects are not supported yet
  plain?: boolean
  required?: boolean
  size?: Size
  stacked?: boolean
  state?: boolean
  switches?: boolean
  textField?: string
  validated?: boolean
  valueField?: string
}

const props = withDefaults(defineProps<BFormCheckboxGroupProps>(), {
  modelValue: () => [],
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
  switches: false,
  textField: 'text',
  validated: false,
  valueField: 'value',
})

interface BFormCheckboxGroupEmits {
  (e: 'input', value: unknown): void
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormCheckboxGroupEmits>()

const slots = useSlots()

const slotsName = 'BFormCheckbox'
const computedId = useId(props.id, 'checkbox')
const computedName = useId(props.name, 'checkbox')

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue: any) => {
    if (JSON.stringify(newValue) === JSON.stringify(props.modelValue)) return
    emit('input', newValue)
    emit('update:modelValue', newValue)
    emit('change', newValue)
  },
})

const checkboxList = computed(() =>
  (slots.first ? slotsToElements(slots.first(), slotsName, props.disabled) : [])
    .concat(props.options.map((e) => optionToElement(e, props)))
    .concat(slots.default ? slotsToElements(slots.default(), slotsName, props.disabled) : [])
    .map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId))
    .map((e) => ({
      ...e,
      props: {
        switch: props.switches,
        ...e.props,
      },
    }))
)

const attrs = getGroupAttr(props)
const classes = getGroupClasses(props)

// TODO: make tests compatible with the v-focus directive
</script>
