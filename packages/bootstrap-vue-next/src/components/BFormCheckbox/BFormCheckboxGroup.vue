<template>
  <BFormCheckboxGroupBase
    v-bind="forwardedProps"
    v-model="modelValue as unknown as CheckboxValue[]"
    :options="normalizedOptions"
  >
    <!-- Forward all slots -->
    <template #first>
      <slot name="first" />
    </template>

    <template #option="slotProps">
      <slot name="option" v-bind="slotProps" />
    </template>

    <slot />
  </BFormCheckboxGroupBase>
</template>

<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import type {BFormCheckboxGroupProps, BFormCheckboxGroupSlots} from '../../types'
import {computed} from 'vue'
import BFormCheckboxGroupBase from './BFormCheckboxGroupBase.vue'
import type {CheckboxValue} from '../../types/CheckboxTypes'

// Generic props - type safety happens here
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
defineSlots<BFormCheckboxGroupSlots>()

// Type-safe model value
const modelValue = defineModel<Item[ValueKey][] | undefined>({
  default: () => [],
})

// Type-safe normalization of options
const normalizedOptions = computed(() =>
  props.options.map(
    (el) =>
      (typeof el === 'string' || typeof el === 'number'
        ? {
            value: el,
            disabled: props.disabled,
            text: el.toString(),
          }
        : {
            value: el[props.valueField as ValueKey],
            disabled:
              (el[props.disabledField as keyof Item] as boolean | undefined) ??
              props.disabled ??
              false,
            text:
              (el[props.textField as keyof Item] as string | undefined) ??
              String(el[props.valueField as ValueKey]),
          }) as {text: string; value: CheckboxValue; disabled: boolean}
  )
)

// Forward all non-option-related props
const forwardedProps = computed(() => ({
  id: props.id,
  name: props.name,
  size: props.size,
  state: props.state,
  buttonVariant: props.buttonVariant,
  buttons: props.buttons,
  stacked: props.stacked,
  disabled: props.disabled,
  required: props.required,
  validated: props.validated,
  autofocus: props.autofocus,
  form: props.form,
  ariaInvalid: props.ariaInvalid,
  plain: props.plain,
  reverse: props.reverse,
  switches: props.switches,
}))
</script>
