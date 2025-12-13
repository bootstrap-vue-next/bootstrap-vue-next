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
    <BFormRadio v-for="(item, index) in normalizeOptions" :key="index" v-bind="item as any">
      <slot name="option" v-bind="item">
        {{ item.text }}
      </slot>
    </BFormRadio>
    <slot />
  </div>
</template>

<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import type {BFormRadioGroupProps} from '../../types/ComponentProps'
import {computed, provide, type Ref, toRef, useTemplateRef} from 'vue'
import {radioGroupKey} from '../../utils/keys'
import BFormRadio from './BFormRadio.vue'
import {getGroupAttr, getGroupClasses} from '../../composables/useFormCheck'
import {useFocus} from '@vueuse/core'
import {useId} from '../../composables/useId'
import type {BFormRadioGroupSlots} from '../../types/ComponentSlots'
import type {RadioValue} from '../../types/RadioTypes'

// Note: Cannot use useDefaults with generic props
const props = withDefaults(
  defineProps<Omit<BFormRadioGroupProps<Item, ValueKey>, 'modelValue'>>(),
  {
    ariaInvalid: undefined,
    autofocus: false,
    buttonVariant: 'secondary',
    buttons: false,
    disabled: false,
    disabledField: 'disabled' as keyof Item & string,
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
    textField: 'text' as keyof Item & string,
    validated: false,
    valueField: 'value' as ValueKey & string,
  }
)
defineSlots<BFormRadioGroupSlots<Item[ValueKey]>>()

const modelValue = defineModel<Item[ValueKey] | undefined>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: null as any,
})

const computedId = useId(() => props.id, 'radio')
const computedName = useId(() => props.name, 'checkbox')

const element = useTemplateRef('_element')

const {focused} = useFocus(element, {
  initialValue: props.autofocus,
})

provide(radioGroupKey, {
  modelValue: modelValue as Ref<RadioValue>,
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

const normalizeOptions = computed(() =>
  props.options.map((el) =>
    typeof el === 'string' || typeof el === 'number'
      ? {
          value: el as Item[ValueKey],
          disabled: props.disabled,
          text: el.toString(),
        }
      : {
          value: el[props.valueField as keyof typeof el] as Item[ValueKey],
          disabled: el[props.disabledField as keyof typeof el] as boolean | undefined,
          text: el[props.textField as keyof typeof el] as string | undefined,
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
