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
import {computed, reactive, Ref, toRef, useSlots} from 'vue'
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
  (e: 'input', value: unknown): void
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormRadioGroupEmits>()

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
const stateBoolean = useBooleanish(toRef(props, 'state') as Ref<Booleanish | undefined>)
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

const localValue = computed<string | boolean | Array<unknown> | Record<string, unknown> | number>({
  get: () => props.modelValue,
  set: (newValue: any) => {
    emit('input', newValue)
    emit('update:modelValue', newValue)
    emit('change', newValue)
  },
})

const checkboxList = computed<Array<any>>(() =>
  (slots.first ? slotsToElements(slots.first(), slotsName, disabledBoolean.value) : [])
    .concat(props.options.map((e) => optionToElement(e, props)))
    .concat(slots.default ? slotsToElements(slots.default(), slotsName, disabledBoolean.value) : [])
    .map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId))
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
