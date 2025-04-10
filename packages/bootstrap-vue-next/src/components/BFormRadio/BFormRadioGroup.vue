<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="_element"
    role="radiogroup"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormRadio v-for="(item, index) in normalizeOptions" :key="index" v-bind="item">
      <slot name="option" v-bind="item">
        {{ item.text }}
      </slot>
    </BFormRadio>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type {BFormRadioGroupProps} from '../../types/ComponentProps'
import {computed, provide, toRef, useTemplateRef} from 'vue'
import {radioGroupKey} from '../../utils/keys'
import BFormRadio from './BFormRadio.vue'
import {getGroupAttr, getGroupClasses} from '../../composables/useFormCheck'
import {useFocus} from '@vueuse/core'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'

const _props = withDefaults(defineProps<Omit<BFormRadioGroupProps, 'modelValue'>>(), {
  ariaInvalid: undefined,
  autofocus: false,
  buttonVariant: 'secondary',
  buttons: false,
  disabled: false,
  disabledField: 'disabled',
  form: undefined,
  id: undefined,
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
})
const props = useDefaults(_props, 'BFormRadioGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  option: (props: (typeof normalizeOptions.value)[number]) => any
}>()

const modelValue = defineModel<Exclude<BFormRadioGroupProps['modelValue'], undefined>>({
  default: null,
})

const computedId = useId(() => props.id, 'radio')
const computedName = useId(() => props.name, 'checkbox')

const element = useTemplateRef<HTMLElement>('_element')

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
  reverse: toRef(() => props.reverse),
  required: toRef(() => props.required),
  disabled: toRef(() => props.disabled),
})

const normalizeOptions = computed<
  {
    text: string | undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
    disabled?: boolean | undefined
    [key: string]: unknown
  }[]
>(() =>
  props.options.map((el) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          value: el,
          disabled: props.disabled,
          text: el.toString(),
        }
      : {
          ...el,
          value: el[props.valueField],
          disabled: el[props.disabledField] as boolean | undefined,
          ...(el.props || undefined),
          text: el[props.textField] as string | undefined,
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
