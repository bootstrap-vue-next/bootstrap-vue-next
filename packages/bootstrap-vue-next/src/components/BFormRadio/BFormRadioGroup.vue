<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    role="radiogroup"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <b-form-radio
      v-for="(item, key) in checkboxList"
      :key="key"
      v-model="localValue"
      v-bind="item.props"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="item.html" v-html="item.html" />
      <span v-else v-text="item.text" />
    </b-form-radio>
  </div>
</template>

<script setup lang="ts">
// import type {BFormRadioGroupEmits, BFormRadioGroupProps} from '../../types/components'
import type {AriaInvalid, Booleanish, ButtonVariant, Size} from '../../types'
import {computed, reactive, toRef, useSlots} from 'vue'
import BFormRadio from './BFormRadio.vue'
import {
  bindGroupProps,
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
  useBooleanish,
  useId,
} from '../../composables'

interface BFormRadioGroupProps {
  size?: Size
  form?: string
  id?: string
  name?: string
  modelValue?: string | boolean | Array<unknown> | Record<string, unknown> | number
  ariaInvalid?: AriaInvalid
  autofocus?: Booleanish
  buttonVariant?: ButtonVariant
  buttons?: Booleanish
  disabled?: Booleanish
  disabledField?: string
  htmlField?: string
  options?: Array<unknown> // Objects are not supported yet
  plain?: Booleanish
  required?: Booleanish
  stacked?: Booleanish
  state?: Booleanish
  textField?: string
  validated?: Booleanish
  valueField?: string
}

const props = withDefaults(defineProps<BFormRadioGroupProps>(), {
  modelValue: '',
  autofocus: false,
  buttonVariant: 'secondary',
  buttons: false,
  ariaInvalid: undefined,
  state: undefined,
  disabled: false,
  disabledField: 'disabled',
  htmlField: 'html',
  options: () => [],
  plain: false,
  required: false,
  stacked: false,
  textField: 'text',
  validated: false,
  valueField: 'value',
})

interface BFormRadioGroupEmits {
  (e: 'input', value: BFormRadioGroupProps['modelValue']): void
  (e: 'update:modelValue', value: BFormRadioGroupProps['modelValue']): void
  (e: 'change', value: BFormRadioGroupProps['modelValue']): void
}

const emit = defineEmits<BFormRadioGroupEmits>()

/**
 * The available slots are default and first
 */
const slots = useSlots()

const slotsName = 'BFormRadio'

const computedId = useId(toRef(props, 'id'), 'radio')
const computedName = useId(toRef(props, 'name'), 'checkbox')

// TODO autofocus is unused
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const buttonsBoolean = useBooleanish(toRef(props, 'buttons'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
// TODO plain is unused
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stackedBoolean = useBooleanish(toRef(props, 'stacked'))
const stateBoolean = useBooleanish(toRef(props, 'state'))
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

// TODO this needs to be tested
const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('input', newValue)
    emit('update:modelValue', newValue)
    emit('change', newValue)
  },
})

// TODO this needs to be tested
const checkboxList = computed(() =>
  (slots.first ? slotsToElements(slots.first(), slotsName, disabledBoolean.value) : []) // Add slot.first to array
    .concat(props.options.map((e) => optionToElement(e, props))) // Convert props.options to usable value, then concat to array
    .concat(slots.default ? slotsToElements(slots.default(), slotsName, disabledBoolean.value) : []) // Concat slot.default to array
    .map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId)) // Map it to preferred structure
    .map((e) => ({
      ...e,
    }))
)

const classesObject = reactive({
  required: toRef(requiredBoolean, 'value'),
  ariaInvalid: toRef(props, 'ariaInvalid'),
  state: toRef(stateBoolean, 'value'),
  validated: toRef(validatedBoolean, 'value'),
  buttons: toRef(buttonsBoolean, 'value'),
  stacked: toRef(stackedBoolean, 'value'),
  size: toRef(props, 'size'),
})
const computedAttrs = getGroupAttr(classesObject)
const computedClasses = getGroupClasses(classesObject)

// TODO: make tests compatible with the v-focus directive
</script>
