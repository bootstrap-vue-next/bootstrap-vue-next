<template>
  <BFormRadioGroupBase v-bind="forwardedProps" v-model="modelValue" :options="normalizedOptions">
    <!-- Forward all slots -->
    <template #first>
      <slot name="first" />
    </template>

    <template #option="slotProps">
      <slot name="option" v-bind="slotProps" />
    </template>

    <slot />
  </BFormRadioGroupBase>
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
import type {BFormRadioGroupProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormRadioGroupBase from './BFormRadioGroupBase.vue'
import type {RadioOption} from '../../types/RadioTypes'
import type {OptionsValues} from '../../types/OptionsTypes'

/**
 * Type-safe wrapper component for BFormRadioGroup.
 * Provides generic type safety for options array and strongly-typed modelValue.
 * Uses Options array generic to extract union of all possible values.
 * Normalizes typed options and forwards to BFormRadioGroupBase for rendering.
 * Supports both complex objects and simple scalar types (string, number, boolean).
 *
 * For strongly-typed modelValue:
 * - Primitive arrays: modelValue is union of those values
 * - Object arrays with 'value' field: modelValue is union of value field types
 * - Use 'as const' on options for literal type inference
 */
const props = withDefaults(defineProps<Omit<BFormRadioGroupProps<Options>, 'modelValue'>>(), {
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
  textField: 'text',
  validated: false,
  valueField: 'value',
})

// Type-safe model value - extracts union from options.
// NOTE: OptionsValues assumes a static "value" key; custom valueField is not
// reflected in the type — modelValue falls back to unknown in that case.
const modelValue = defineModel<OptionsValues<Options> | undefined>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: undefined as any,
})

// Type-safe normalization of options
const normalizedOptions = computed(
  () =>
    (props.options ?? []).map((el) =>
      typeof el === 'string' || typeof el === 'number' || typeof el === 'boolean'
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
              '',
          }
    ) as RadioOption[]
)

// Forward all non-option-related props to base component
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
}))
</script>
