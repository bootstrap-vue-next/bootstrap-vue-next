<template>
  <div
    v-bind="computedAttrs"
    :id="computedId"
    ref="_element"
    role="group"
    :class="computedClasses"
    class="bv-no-focus-ring"
    tabindex="-1"
  >
    <slot name="first" />
    <BFormCheckbox v-for="(item, index) in normalizeOptions" :key="index" v-bind="item as any">
      <slot name="option" v-bind="item">
        {{ item.text }}
      </slot>
    </BFormCheckbox>
    <slot />
  </div>
</template>

<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import {computed, provide, toRef, useTemplateRef} from 'vue'
import BFormCheckbox from './BFormCheckbox.vue'
import {checkboxGroupKey} from '../../utils/keys'
import {useFocus} from '@vueuse/core'
import type {BFormCheckboxGroupProps} from '../../types/ComponentProps'
import {useId} from '../../composables/useId'
import {getGroupAttr, getGroupClasses} from '../../composables/useFormCheck'
import type {BFormCheckboxGroupSlots} from '../../types'

// Note: Cannot use useDefaults with generic props
const props = withDefaults(
  defineProps<Omit<BFormCheckboxGroupProps<Item, ValueKey>, 'modelValue'>>(),
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
    switches: false,
    textField: 'text' as keyof Item & string,
    validated: false,
    valueField: 'value' as ValueKey & string,
  }
)
defineSlots<BFormCheckboxGroupSlots<Item[ValueKey]>>()

const modelValue = defineModel<readonly Item[ValueKey][]>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: () => [] as any,
})

const computedId = useId(() => props.id, 'checkbox')
const computedName = useId(() => props.name, 'checkbox')

const element = useTemplateRef('_element')

const {focused} = useFocus(element, {
  initialValue: props.autofocus,
})

provide(checkboxGroupKey, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue: modelValue as any,
  switch: toRef(() => props.switches),
  buttonVariant: toRef(() => props.buttonVariant),
  form: toRef(() => props.form),
  name: computedName,
  state: toRef(() => props.state),
  plain: toRef(() => props.plain),
  size: toRef(() => props.size),
  inline: toRef(() => !props.stacked),
  reverse: toRef(() => props.reverse),
  required: toRef(() => props.required),
  buttons: toRef(() => props.buttons),
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
