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
  generic="
    Item extends Record<string, unknown> | string | number | boolean =
      | Record<string, unknown>
      | string
      | number
      | boolean
  "
>
import type {BFormCheckboxGroupProps, BFormCheckboxGroupSlots} from '../../types'
import {computed} from 'vue'
import BFormCheckboxGroupBase from './BFormCheckboxGroupBase.vue'
import type {CheckboxValue} from '../../types/CheckboxTypes'

// Generic props - type safety happens here
const props = withDefaults(defineProps<Omit<BFormCheckboxGroupProps<Item>, 'modelValue'>>(), {
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
  switches: false,
  textField: 'text',
  validated: false,
  valueField: 'value',
})
defineSlots<BFormCheckboxGroupSlots>()

// Type-safe model value
const modelValue = defineModel<unknown[] | undefined>({
  default: () => [],
})

// Type-safe normalization of options
const normalizedOptions = computed(() =>
  props.options.map(
    (el) =>
      (typeof el === 'string' || typeof el === 'number' || typeof el === 'boolean'
        ? {
            value: el,
            disabled: props.disabled,
            text: el.toString(),
          }
        : {
            value: (el as Record<string, unknown>)[props.valueField as string],
            disabled:
              props.disabled ||
              (((el as Record<string, unknown>)[props.disabledField as string] as
                | boolean
                | undefined) ??
                false),
            text:
              ((el as Record<string, unknown>)[props.textField as string] as string | undefined) ??
              String((el as Record<string, unknown>)[props.valueField as string]),
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
