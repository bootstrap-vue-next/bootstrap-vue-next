<template>
  <div
    v-bind="attrs"
    :id="computedId"
    role="group"
    :class="classes"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <b-form-checkbox
      v-for="(item, key) in checkboxList"
      :key="key"
      v-model="localValue"
      v-bind="item.props"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="item.html" v-html="item.html" />
      <span v-else v-text="item.text" />
    </b-form-checkbox>
  </div>
</template>

<script setup lang="ts">
// import type {BFormCheckboxGroupEmits, BFormCheckboxGroupProps} from '../../types/components'
import {computed, reactive, toRef, useSlots} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import type {AriaInvalid, Booleanish, ButtonVariant, Size} from '../../types'
import {
  bindGroupProps,
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
  useBooleanish,
  useId,
} from '../../composables'

interface BFormCheckboxGroupProps {
  id?: string
  form?: string
  modelValue?: Array<unknown>
  ariaInvalid?: AriaInvalid
  autofocus?: Booleanish
  buttonVariant?: ButtonVariant
  buttons?: Booleanish
  disabled?: Booleanish
  disabledField?: string
  htmlField?: string
  name?: string
  options?: Array<unknown> // Objects are not supported yet
  plain?: Booleanish
  required?: Booleanish
  size?: Size
  stacked?: Booleanish
  state?: Booleanish
  switches?: Booleanish
  textField?: string
  validated?: Booleanish
  valueField?: string
}

const props = withDefaults(defineProps<BFormCheckboxGroupProps>(), {
  modelValue: () => [],
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
  switches: false,
  textField: 'text',
  validated: false,
  valueField: 'value',
})

// TODO autofocus is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const buttonsBoolean = useBooleanish(toRef(props, 'buttons'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
// TODO plain is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stackedBoolean = useBooleanish(toRef(props, 'stacked'))
const stateBoolean =
  props.state !== undefined ? useBooleanish(toRef(props, 'state')) : computed(() => undefined)
const switchesBoolean = useBooleanish(toRef(props, 'switches'))
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

interface BFormCheckboxGroupEmits {
  (e: 'input', value: unknown): void
  (e: 'update:modelValue', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormCheckboxGroupEmits>()

const slots = useSlots()

const slotsName = 'BFormCheckbox'
const computedId = useId(toRef(props, 'id'), 'checkbox')
const computedName = useId(toRef(props, 'name'), 'checkbox')

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
  (slots.first ? slotsToElements(slots.first(), slotsName, disabledBoolean.value) : [])
    .concat(props.options.map((e) => optionToElement(e, props)))
    .concat(slots.default ? slotsToElements(slots.default(), slotsName, disabledBoolean.value) : [])
    .map((e, idx) => bindGroupProps(e, idx, props, computedName, computedId))
    .map((e) => ({
      ...e,
      props: {
        switch: switchesBoolean.value,
        ...e.props,
      },
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
const attrs = getGroupAttr(classesObject)
const classes = getGroupClasses(classesObject)

// TODO: make tests compatible with the v-focus directive
</script>
