<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="element"
    role="radiogroup"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormRadio
      v-for="item in normalizeOptions"
      :key="item.self"
      :disabled="item.disabled"
      :value="item.value"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="!!item.html" v-html="item.html" />
      <template v-else>
        {{ item.text }}
      </template>
    </BFormRadio>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {AriaInvalid, ButtonVariant, RadioOptionRaw, RadioValue, Size} from '../../types'
import {computed, provide, ref, toRef} from 'vue'
import {radioGroupKey} from '../../utils'
import BFormRadio from './BFormRadio.vue'
import {getGroupAttr, getGroupClasses, useId} from '../../composables'
import {useFocus, useVModel} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    ariaInvalid?: AriaInvalid
    autofocus?: boolean
    buttonVariant?: ButtonVariant | null
    buttons?: boolean
    disabled?: boolean
    disabledField?: string
    form?: string
    htmlField?: string
    id?: string
    modelValue?: RadioValue
    name?: string
    options?: readonly RadioOptionRaw[]
    plain?: boolean
    required?: boolean
    reverse?: boolean
    size?: Size
    stacked?: boolean
    state?: boolean | null
    textField?: string
    validated?: boolean
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
    modelValue: null,
    name: undefined,
    options: () => [],
    plain: false,
    required: false,
    reverse: false,
    size: 'md',
    stacked: false,
    state: null,
    textField: 'text',
    validated: false,
    valueField: 'value',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: RadioValue]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const computedId = useId(() => props.id, 'radio')
const computedName = useId(() => props.name, 'checkbox')

const element = ref<HTMLElement | null>(null)

const {focused} = useFocus(element, {
  initialValue: props.autofocus,
})

provide(radioGroupKey, {
  modelValue,
  buttonVariant: toRef(() => props.buttonVariant),
  form: toRef(() => props.form),
  name: computedName,
  buttons: toRef(() => props.buttons),
  state: toRef(() => props.state),
  plain: toRef(() => props.plain),
  size: toRef(() => props.size),
  inline: toRef(() => !props.stacked),
  reverse: toRef(() => !props.reverse),
  required: toRef(() => props.required),
  disabled: toRef(() => props.disabled),
})

const normalizeOptions = computed(() =>
  props.options.map((el, ind) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          value: el,
          disabled: props.disabled,
          text: el.toString(),
          html: undefined,
          self: Symbol(`radioGroupOptionItem${ind}`),
        }
      : {
          value: el[props.valueField] as string | undefined,
          disabled: el[props.disabledField] as boolean | undefined,
          ...(el.props ? el.props : {}),
          text: el[props.textField] as string | undefined,
          html: el[props.htmlField] as string | undefined,
          self: Symbol(`radioGroupOptionItem${ind}`),
        }
  )
)

const classesObject = computed(() => ({
  required: props.required,
  ariaInvalid: props.ariaInvalid,
  state: props.state,
  validated: props.validated,
  buttons: props.buttons,
  stacked: props.stacked,
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
