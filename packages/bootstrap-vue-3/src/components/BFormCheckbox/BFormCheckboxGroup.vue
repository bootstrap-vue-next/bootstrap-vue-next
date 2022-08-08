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
import {computed, toRef, useSlots} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import type {Booleanish, ButtonVariant, Size} from '../../types'
import {
  bindGroupProps,
  getGroupAttr,
  getGroupClasses,
  optionToElement,
  slotsToElements,
  useBooleanish,
  useId,
} from '../../composables'
import {resolveBooleanish} from '../../utils'

interface BFormCheckboxGroupProps {
  id?: string
  form?: string
  modelValue?: Array<unknown>
  ariaInvalid?: boolean | string
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
// TODO buttons is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buttonsBoolean = useBooleanish(toRef(props, 'buttons'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
// TODO plain is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plainBoolean = useBooleanish(toRef(props, 'plain'))
// TODO required is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const requiredBoolean = useBooleanish(toRef(props, 'required'))
// TODO stacked is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stackedBoolean = useBooleanish(toRef(props, 'stacked'))
// TODO state is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stateBoolean = computed<boolean | undefined>(() =>
  props.state !== undefined ? resolveBooleanish(props.state) : undefined
)
const switchesBoolean = useBooleanish(toRef(props, 'switches'))
// TODO validated is not used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

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

const attrs = getGroupAttr(props)
const classes = getGroupClasses(props)

// TODO: make tests compatible with the v-focus directive
</script>
