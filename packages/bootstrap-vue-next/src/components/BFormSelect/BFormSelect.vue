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
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import type {BFormSelectProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormSelectBase from './BFormSelectBase.vue'
import type {ComplexSelectOptionRaw, SelectOption} from '../../types/SelectTypes'
import type {BFormSelectSlots} from '../../types'

/**
 * Type-safe wrapper component for BFormSelect.
 * Provides generic type safety for options and field names.
 * Normalizes typed options and forwards to BFormSelectBase for rendering.
 */
const props = withDefaults(defineProps<Omit<BFormSelectProps<Item, ValueKey>, 'modelValue'>>(), {
  ariaInvalid: undefined,
  autofocus: false,
  disabled: false,
  disabledField: 'disabled' as keyof Item & string,
  form: undefined,
  id: undefined,
  labelField: 'label' as keyof Item & string,
  multiple: false,
  name: undefined,
  options: () => [],
  optionsField: 'options' as keyof Item & string,
  plain: false,
  required: false,
  selectSize: 0,
  size: 'md',
  state: null,
  textField: 'text' as keyof Item & string,
  valueField: 'value' as ValueKey & string,
})
defineSlots<BFormSelectSlots<Item[ValueKey]>>()

const modelValue = defineModel<Item[ValueKey] | Item[ValueKey][] | null>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: '' as any,
})

// Type-safe normalization of options (supports both simple and complex/grouped)
const normalizedOptions = computed(() => {
  const hasComplexOptions = props.options.some(
    (el) =>
      typeof el !== 'string' &&
      typeof el !== 'number' &&
      el[props.optionsField as keyof Item] !== undefined
  )

  if (hasComplexOptions) {
    return props.options.map((el) => {
      if (typeof el === 'string') {
        return el
      }
      if (typeof el === 'number') {
        return String(el)
      }

      // Check if this is a complex (grouped) option
      const optionsField = el[props.optionsField as keyof Item]
      if (optionsField !== undefined && Array.isArray(optionsField)) {
        // Complex option with nested options
        const label =
          (el[props.labelField as keyof Item] as string | undefined) ??
          (el[props.textField as keyof Item] as string | undefined) ??
          ''
        return {
          label,
          options: optionsField,
        } as ComplexSelectOptionRaw
      }

      // Simple option - spread all properties from the original object to preserve class, data-*, etc.
      return {
        ...el,
        value: el[props.valueField as ValueKey],
        text: (el[props.textField as keyof Item] as string | undefined) ?? '',
        disabled: (el[props.disabledField as keyof Item] as boolean | undefined) ?? false,
      } as SelectOption
    })
  }

  return props.options.map((el) => {
    if (typeof el === 'string') {
      return el
    }
    if (typeof el === 'number') {
      return String(el)
    }
    // Spread all properties from the original object to preserve class, data-*, etc.
    return {
      ...el,
      value: el[props.valueField as ValueKey],
      text: (el[props.textField as keyof Item] as string | undefined) ?? '',
      disabled: (el[props.disabledField as keyof Item] as boolean | undefined) ?? false,
    } as SelectOption
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
