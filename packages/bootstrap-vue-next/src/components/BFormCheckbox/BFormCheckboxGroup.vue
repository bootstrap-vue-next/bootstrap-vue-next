<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    role="group"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <b-form-checkbox v-for="item in normalizeOptions" :key="item.self" v-bind="item.props">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="item.html" v-html="item.html" />
      <span v-else v-text="item.text" />
    </b-form-checkbox>
    <slot />
  </div>
</template>

<script setup lang="ts">
// import type {BFormCheckboxGroupEmits, BFormCheckboxGroupProps} from '../../types/components'
import {computed, provide, ref, toRef, watchEffect} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import type {AriaInvalid, Booleanish, ButtonVariant, Size} from '../../types'
import {getGroupAttr, getGroupClasses, useBooleanish, useId} from '../../composables'
import {checkboxGroupKey} from '../../utils'
import {useVModel} from '@vueuse/core'

interface BFormCheckboxGroupProps {
  id?: string
  form?: string
  modelValue?: (unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number)[]
  ariaInvalid?: AriaInvalid
  autofocus?: Booleanish
  buttonVariant?: ButtonVariant
  buttons?: Booleanish
  disabled?: Booleanish
  disabledField?: string
  htmlField?: string
  name?: string
  options?: (string | Record<string, unknown>)[] // I don't believe it possible to make a strongly typed object if object fields come from a prop
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

const modelValue = useVModel(props, 'modelValue', emit)

const computedId = useId(toRef(props, 'id'), 'checkbox')
const computedName = useId(toRef(props, 'name'), 'checkbox')
// TODO somehow we need to be able to get it to the first item in the list that it is autofocusable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const buttonsBoolean = useBooleanish(toRef(props, 'buttons'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stackedBoolean = useBooleanish(toRef(props, 'stacked'))
const stateBoolean = useBooleanish(toRef(props, 'state'))
const switchesBoolean = useBooleanish(toRef(props, 'switches'))
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

const actives = ref<
  (unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number)[]
>([])

provide(checkboxGroupKey, {
  set: (value: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number) => {
    actives.value.push(value)
  },
  remove: (
    value: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number
  ) => {
    actives.value.splice(actives.value.indexOf(value), 1)
  },
  modelValue,
  switch: switchesBoolean,
  buttonVariant: toRef(props, 'buttonVariant'),
  form: toRef(props, 'form'),
  name: computedName,
  state: stateBoolean,
  plain: plainBoolean,
  size: toRef(props, 'size'),
  inline: computed(() => !stackedBoolean.value),
  required: requiredBoolean,
  buttons: buttonsBoolean,
  disabled: disabledBoolean,
})

watchEffect(() => (modelValue.value = actives.value))

const normalizeOptions = computed<
  {
    props: {
      value: string | undefined
      disabled: boolean | undefined
    }
    text: string | undefined
    html: string | undefined
    self: symbol
  }[]
>(() =>
  props.options.map((el) =>
    typeof el === 'string'
      ? {
          props: {
            value: el,
            disabled: disabledBoolean.value,
          },
          text: el,
          html: undefined,
          self: Symbol(),
        }
      : {
          props: {
            value: el[props.valueField] as string | undefined,
            disabled: el[props.disabledField] as boolean | undefined,
            ...(el.props ? el.props : {}),
          },
          text: el[props.textField] as string | undefined,
          html: el[props.htmlField] as string | undefined,
          self: Symbol(),
        }
  )
)

const classesObject = computed(() => ({
  required: requiredBoolean.value,
  ariaInvalid: props.ariaInvalid,
  state: stateBoolean.value,
  validated: validatedBoolean.value,
  buttons: buttonsBoolean.value,
  stacked: stackedBoolean.value,
  size: props.size,
}))
const computedAttrs = getGroupAttr(classesObject)
const computedClasses = getGroupClasses(classesObject)
</script>
