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
    Options extends readonly (Record<string, unknown> | string | number | boolean)[] = readonly (
      | Record<string, unknown>
      | string
      | number
      | boolean
    )[]
  "
>
import type {BFormCheckboxGroupProps, BFormCheckboxGroupSlots} from '../../types'
import {computed} from 'vue'
import BFormCheckboxGroupBase from './BFormCheckboxGroupBase.vue'
import type {CheckboxValue} from '../../types/CheckboxTypes'

/**
 * Type-safe wrapper component for BFormCheckboxGroup.
 * Provides generic type safety for options array and strongly-typed modelValue.
 * Uses Options array generic to extract union of all possible values.
 * Supports both complex objects and simple scalar types (string, number, boolean).
 *
 * For strongly-typed modelValue:
 * - Primitive arrays: modelValue is array of those value types
 * - Object arrays with 'value' field: modelValue is array of value field types
 * - Use 'as const' on options for literal type inference
 */

// Generic props - type safety happens here
const props = withDefaults(defineProps<Omit<BFormCheckboxGroupProps<Options>, 'modelValue'>>(), {
  ariaInvalid: undefined,
  autofocus: false,
  buttonVariant: 'secondary',
  buttons: false,
  disabled: false,
  disabledField: 'disabled',
  form: undefined,
  id: undefined,
  name: undefined,
  options: () => [] as unknown as Options,
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

// Extract value types from options array
type ExtractItemValue<T> = T extends string | number | boolean
  ? T
  : T extends {value: infer V}
    ? V
    : unknown

type OptionsValues<T extends readonly unknown[]> = T extends readonly (infer Item)[]
  ? ExtractItemValue<Item>
  : unknown

// Type-safe model value - extracts union from options, wraps in array
const modelValue = defineModel<OptionsValues<Options>[] | undefined>({
  default: () => [],
})

// Type-safe normalization of options
const normalizedOptions = computed(() =>
  (props.options ?? []).map(
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
