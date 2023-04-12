<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="element"
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
import {computed, nextTick, provide, readonly, ref, toRef} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import type {AriaInvalid, Booleanish, ButtonVariant, Size} from '../../types'
import {getGroupAttr, getGroupClasses, useBooleanish, useId} from '../../composables'
import {checkboxGroupKey} from '../../utils'
import {useFocus, useVModel} from '@vueuse/core'

interface BFormCheckboxGroupProps {
  id?: string
  form?: string
  modelValue?: (
    | unknown[]
    | Set<unknown>
    | boolean
    | string
    | Record<string, unknown>
    | number
    | null
  )[]
  ariaInvalid?: AriaInvalid
  autofocus?: Booleanish
  buttonVariant?: ButtonVariant
  buttons?: Booleanish
  disabled?: Booleanish
  disabledField?: string
  htmlField?: string
  name?: string
  options?: (string | number | Record<string, unknown>)[]
  plain?: Booleanish
  required?: Booleanish
  size?: Size
  stacked?: Booleanish
  state?: Booleanish | null
  switches?: Booleanish
  textField?: string
  validated?: Booleanish
  valueField?: string
}

const props = withDefaults(defineProps<BFormCheckboxGroupProps>(), {
  id: undefined,
  size: undefined,
  name: undefined,
  form: undefined,
  modelValue: () => [],
  autofocus: false,
  buttonVariant: 'secondary',
  buttons: false,
  ariaInvalid: undefined,
  state: null,
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
  (
    e: 'input',
    value: (unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null)[]
  ): void
  (
    e: 'update:modelValue',
    value: (unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null)[]
  ): void
  (
    e: 'change',
    value: (unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null)[]
  ): void
}

const emit = defineEmits<BFormCheckboxGroupEmits>()

const modelValue = useVModel(props, 'modelValue', emit)

const computedId = useId(toRef(props, 'id'), 'checkbox')
const computedName = useId(toRef(props, 'name'), 'checkbox')
const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const buttonsBoolean = useBooleanish(toRef(props, 'buttons'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const plainBoolean = useBooleanish(toRef(props, 'plain'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stackedBoolean = useBooleanish(toRef(props, 'stacked'))
const stateBoolean = useBooleanish(toRef(props, 'state'))
const switchesBoolean = useBooleanish(toRef(props, 'switches'))
const validatedBoolean = useBooleanish(toRef(props, 'validated'))

const element = ref<HTMLElement | null>(null)

useFocus(element, {
  initialValue: autofocusBoolean.value,
})

provide(checkboxGroupKey, {
  set: (
    value: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  ) => {
    const localValue = [...modelValue.value]
    localValue.push(value)

    emit('input', localValue)
    modelValue.value = localValue
    nextTick(() => {
      emit('change', localValue)
    })
  },
  remove: (
    value: unknown[] | Set<unknown> | boolean | string | Record<string, unknown> | number | null
  ) => {
    const localValue = [...modelValue.value]
    // TODO if the value is an array, set, or object, indexOf may not work correctly
    localValue.splice(modelValue.value.indexOf(value), 1)

    emit('input', localValue)
    modelValue.value = localValue
    nextTick(() => {
      emit('change', localValue)
    })
  },
  modelValue: computed(() => modelValue.value),
  switch: switchesBoolean,
  buttonVariant: readonly(toRef(props, 'buttonVariant')),
  form: readonly(toRef(props, 'form')),
  name: computedName,
  state: stateBoolean,
  plain: plainBoolean,
  size: readonly(toRef(props, 'size')),
  inline: computed(() => !stackedBoolean.value),
  required: requiredBoolean,
  buttons: buttonsBoolean,
  disabled: disabledBoolean,
})

const normalizeOptions = computed(() =>
  props.options.map((el, ind) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          props: {
            value: el,
            disabled: disabledBoolean.value,
          },
          text: el.toString(),
          html: undefined,
          self: Symbol(`checkboxGroupOptionItem${ind}`),
        }
      : {
          props: {
            value: el[props.valueField] as string | number | undefined,
            disabled: el[props.disabledField] as boolean | undefined,
            ...(el.props ? el.props : {}),
          },
          text: el[props.textField] as string | undefined,
          html: el[props.htmlField] as string | undefined,
          self: Symbol(`checkboxGroupOptionItem${ind}`),
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
