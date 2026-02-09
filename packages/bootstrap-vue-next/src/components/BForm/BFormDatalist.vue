<template>
  <BFormDatalistBase v-bind="forwardedProps" :options="normalizedOptions as any">
    <!-- Forward all slots -->
    <template #first>
      <slot name="first" />
    </template>

    <template #option="slotProps">
      <slot name="option" v-bind="slotProps as any" />
    </template>

    <slot />
  </BFormDatalistBase>
</template>

<script
  setup
  lang="ts"
  generic="
    Item = Record<string, unknown> | string | number | boolean,
    ValueKey extends Item extends Record<string, unknown> ? keyof Item : string =
      Item extends Record<string, unknown> ? keyof Item : never
  "
>
import type {BFormDatalistProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormDatalistBase from './BFormDatalistBase.vue'
import type {SelectOption} from '../../types/SelectTypes'
import type {BFormDatalistSlots} from '../../types'

/**
 * Type-safe wrapper component for BFormDatalist.
 * Provides generic type safety for options and field names.
 * Normalizes typed options and forwards to BFormDatalistBase for rendering.
 * Supports both complex objects and simple scalar types (string, number).
 */
const props = withDefaults(defineProps<BFormDatalistProps<Item, ValueKey>>(), {
  disabled: false,
  disabledField: 'disabled' as keyof Item & string,
  id: undefined,
  options: () => [],
  textField: 'text' as keyof Item & string,
  // @ts-expect-error - ValueKey default doesn't satisfy InferDefault but works at runtime
  valueField: 'value',
})
defineSlots<
  BFormDatalistSlots<Item extends Record<string, unknown> ? Item[ValueKey & keyof Item] : Item>
>()

// Type-safe normalization of options
const normalizedOptions = computed(() =>
  props.options.map((el) => {
    if (typeof el === 'string') {
      return el
    }
    if (typeof el === 'number') {
      return String(el)
    }
    if (typeof el === 'boolean') {
      return String(el)
    }
    return {
      value: (el as Record<string, unknown>)[props.valueField as string],
      text:
        ((el as Record<string, unknown>)[props.textField as string] as string | undefined) ?? '',
      disabled:
        ((el as Record<string, unknown>)[props.disabledField as string] as boolean | undefined) ??
        false,
    } as SelectOption
  })
)

// Forward all props except options (which we normalize) and field mappings (already used)
const forwardedProps = computed(() => ({
  disabled: props.disabled,
  id: props.id,
}))
</script>
