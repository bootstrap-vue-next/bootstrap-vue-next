<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    role="group"
    :class="computedClasses"
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
  modelValue?: Array<string | number | Record<string, unknown>>
  ariaInvalid?: AriaInvalid
  autofocus?: Booleanish
  buttonVariant?: ButtonVariant
  buttons?: Booleanish
  disabled?: Booleanish
  disabledField?: string
  htmlField?: string
  name?: string
  options?: Array<string | Record<string, unknown>> // I don't believe it possible to make a strongly typed object if object fields come from a prop
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

interface BFormCheckboxGroupEmits {
  (e: 'input', value: Exclude<BFormCheckboxGroupProps['modelValue'], undefined>): void
  (e: 'update:modelValue', value: Exclude<BFormCheckboxGroupProps['modelValue'], undefined>): void
  (e: 'change', value: Exclude<BFormCheckboxGroupProps['modelValue'], undefined>): void
}

const emit = defineEmits<BFormCheckboxGroupEmits>()

const slots = useSlots()

const slotsName = 'BFormCheckbox'

const computedId = useId(toRef(props, 'id'), 'checkbox')
const computedName = useId(toRef(props, 'name'), 'checkbox')

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
const stateBoolean = useBooleanish(toRef(props, 'state'))
const switchesBoolean = useBooleanish(toRef(props, 'switches'))
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    if (JSON.stringify(newValue) === JSON.stringify(props.modelValue)) return

    /**
     * Sorts the value and makes it the same order as options
     * Ie: props.options = ['a', 'b', 'c'], no matter what order the options are selected,
     * User clicks 'c', then clicks 'b' => ['b', 'c'], not ['c', 'b']
     */
    const sortByOptions: Array<string | number | Record<string, unknown>> = props.options
      .filter((el) =>
        newValue
          .map((it) => JSON.stringify(it))
          .includes(JSON.stringify(typeof el === 'string' ? el : el[props.valueField]))
      )
      .map((el) => (typeof el === 'string' ? el : el[props.valueField])) as Array<
      string | number | Record<string, unknown>
    >

    emit('input', sortByOptions)
    emit('update:modelValue', sortByOptions)
    emit('change', sortByOptions)
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
const computedAttrs = getGroupAttr(classesObject)
const computedClasses = getGroupClasses(classesObject)

// TODO: make tests compatible with the v-focus directive
</script>
