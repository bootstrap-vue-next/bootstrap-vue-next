<template>
  <BFormSelectBase v-bind="forwardedProps" v-model="modelValue" :options="normalizedOptions as any">
    <!-- Forward all slots -->
    <template #first>
      <slot name="first" />
    </template>

    <template #option="slotProps">
      <slot name="option" v-bind="slotProps as any" />
    </template>

    <slot />
  </BFormSelectBase>
</template>

<script
  setup
  lang="ts"
  generic="
    Options extends readonly (object | string | number | boolean)[] = readonly (
      | object
      | string
      | number
      | boolean
    )[]
  "
>
import type {BFormSelectProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormSelectBase from './BFormSelectBase.vue'
import type {ComplexSelectOptionRaw, SelectOption} from '../../types/SelectTypes'
import type {BFormSelectSlots} from '../../types'
import type {OptionsValues} from '../../types/OptionsTypes'

/**
 * Type-safe wrapper component for BFormSelect.
 * Provides generic type safety for options array and strongly-typed modelValue.
 * Uses Options array generic to extract union of all possible values.
 * Normalizes typed options and forwards to BFormSelectBase for rendering.
 * Supports both complex objects and simple scalar types (string, number).
 *
 * For strongly-typed modelValue:
 * - Primitive arrays: modelValue is union of those values (or array if multiple)
 * - Object arrays with 'value' field: modelValue is union of value field types
 * - Use 'as const' on options for literal type inference
 */
const props = withDefaults(defineProps<Omit<BFormSelectProps<Options>, 'modelValue'>>(), {
  ariaInvalid: undefined,
  autofocus: false,
  disabled: false,
  disabledField: 'disabled',
  form: undefined,
  id: undefined,
  labelField: 'label',
  multiple: false,
  name: undefined,
  options: () => [] as unknown as Options,
  optionsField: 'options',
  plain: false,
  required: false,
  selectSize: 0,
  size: undefined,
  state: null,
  textField: 'text',
  valueField: 'value',
})
defineSlots<BFormSelectSlots<OptionsValues<Options>>>()

// Type-safe model value - single value or array depending on multiple prop.
// NOTE: OptionsValues assumes a static "value" key; custom valueField is not
// reflected in the type — modelValue falls back to unknown in that case.
const modelValue = defineModel<OptionsValues<Options> | OptionsValues<Options>[] | null>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: '' as any,
})

// Normalize a single simple option using custom field names
const normalizeSimpleOption = (el: object): SelectOption =>
  ({
    ...(el as Record<string, unknown>),
    value: (el as Record<string, unknown>)[props.valueField as string],
    text: ((el as Record<string, unknown>)[props.textField as string] as string | undefined) ?? '',
    disabled:
      ((el as Record<string, unknown>)[props.disabledField as string] as boolean | undefined) ??
      false,
  }) as SelectOption

const normalizePrimitive = (el: string | number | boolean): SelectOption =>
  ({value: el, text: String(el), disabled: false}) as SelectOption

// Type-safe normalization of options (supports both simple and complex/grouped)
const normalizedOptions = computed(() => {
  const optionsArray = props.options ?? []
  const hasComplexOptions = optionsArray.some(
    (el) =>
      typeof el !== 'string' &&
      typeof el !== 'number' &&
      typeof el !== 'boolean' &&
      (el as Record<string, unknown>)[props.optionsField as string] !== undefined
  )

  if (hasComplexOptions) {
    return optionsArray.map((el) => {
      if (typeof el === 'string' || typeof el === 'number' || typeof el === 'boolean') {
        return normalizePrimitive(el)
      }

      // Check if this is a complex (grouped) option
      const optionsField = (el as Record<string, unknown>)[props.optionsField as string]
      if (optionsField !== undefined && Array.isArray(optionsField)) {
        // Complex option with nested options
        const label =
          ((el as Record<string, unknown>)[props.labelField as string] as string | undefined) ??
          ((el as Record<string, unknown>)[props.textField as string] as string | undefined) ??
          ''
        return {
          label,
          options: optionsField.map((subOpt: unknown) => {
            if (
              typeof subOpt === 'string' ||
              typeof subOpt === 'number' ||
              typeof subOpt === 'boolean'
            ) {
              return normalizePrimitive(subOpt)
            }
            return normalizeSimpleOption(subOpt as object)
          }),
        } as ComplexSelectOptionRaw
      }

      // Simple option - spread all properties from the original object to preserve class, data-*, etc.
      return normalizeSimpleOption(el as object)
    })
  }

  return optionsArray.map((el) => {
    if (typeof el === 'string' || typeof el === 'number' || typeof el === 'boolean') {
      return normalizePrimitive(el)
    }
    // Spread all properties from the original object to preserve class, data-*, etc.
    return normalizeSimpleOption(el as object)
  })
})

// Forward all props except options (which we normalize), modelValue (handled separately),
// and field mappings (already used for normalization)
const forwardedProps = computed(() => ({
  ariaInvalid: props.ariaInvalid,
  autofocus: props.autofocus,
  disabled: props.disabled,
  form: props.form,
  id: props.id,
  multiple: props.multiple,
  name: props.name,
  plain: props.plain,
  required: props.required,
  selectSize: props.selectSize,
  size: props.size,
  state: props.state,
}))
</script>
