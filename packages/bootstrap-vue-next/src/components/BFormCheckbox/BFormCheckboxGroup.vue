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
    <BFormCheckbox v-for="item in normalizeOptions" :key="item.self" v-bind="item.props">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="item.html" v-html="item.html" />
      <span v-else v-text="item.text" />
    </BFormCheckbox>
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, nextTick, provide, ref, toRef, watch} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import type {AriaInvalid, Booleanish, ButtonVariant, CheckboxValue, Size} from '../../types'
import {getGroupAttr, getGroupClasses, useBooleanish, useId} from '../../composables'
import {checkboxGroupKey} from '../../utils'
import {useFocus, useVModel} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    ariaInvalid?: AriaInvalid
    autofocus?: Booleanish
    buttonVariant?: ButtonVariant | null
    buttons?: Booleanish
    disabled?: Booleanish
    disabledField?: string
    form?: string
    htmlField?: string
    id?: string
    modelValue?: CheckboxValue[]
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
  }>(),
  {
    ariaInvalid: undefined,
    autofocus: false,
    buttonVariant: 'secondary',
    buttons: false,
    disabled: false,
    disabledField: 'disabled',
    form: undefined,
    htmlField: 'html',
    id: undefined,
    modelValue: () => [],
    name: undefined,
    options: () => [],
    plain: false,
    required: false,
    size: 'md',
    stacked: false,
    state: null,
    switches: false,
    textField: 'text',
    validated: false,
    valueField: 'value',
  }
)

const emit = defineEmits<{
  'change': [value: CheckboxValue[]]
  'input': [value: CheckboxValue[]]
  'update:modelValue': [value: CheckboxValue[]]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit)

const computedId = useId(() => props.id, 'checkbox')
const computedName = useId(() => props.name, 'checkbox')
const autofocusBoolean = useBooleanish(() => props.autofocus)
const buttonsBoolean = useBooleanish(() => props.buttons)
const disabledBoolean = useBooleanish(() => props.disabled)
const plainBoolean = useBooleanish(() => props.plain)
const requiredBoolean = useBooleanish(() => props.required)
const stackedBoolean = useBooleanish(() => props.stacked)
const stateBoolean = useBooleanish(() => props.state)
const switchesBoolean = useBooleanish(() => props.switches)
const validatedBoolean = useBooleanish(() => props.validated)

const element = ref<HTMLElement | null>(null)

const {focused} = useFocus(element, {
  initialValue: autofocusBoolean.value,
})

provide(checkboxGroupKey, {
  modelValue,
  switch: switchesBoolean,
  buttonVariant: toRef(() => props.buttonVariant),
  form: toRef(() => props.form),
  name: computedName,
  state: stateBoolean,
  plain: plainBoolean,
  size: toRef(() => props.size),
  inline: toRef(() => !stackedBoolean.value),
  required: requiredBoolean,
  buttons: buttonsBoolean,
  disabled: disabledBoolean,
})

watch(modelValue, (newValue) => {
  emit('input', newValue)
  nextTick(() => {
    emit('change', newValue)
  })
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

defineExpose({
  blur: () => {
    focused.value = false
  },
  focus: () => {
    focused.value = true
  },
})
</script>
