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
    ValueKey extends Item extends Record<string, unknown> ? keyof Item : never =
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
const props = withDefaults(defineProps<Omit<BFormDatalistProps<Item, ValueKey>, 'modelValue'>>(), {
  disabled: false,
  disabledField: 'disabled' as keyof Item & string,
  id: undefined,
  options: () => [],
  textField: 'text' as keyof Item & string,
  valueField: 'value' as ValueKey & string,
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
    return {
      value: el[props.valueField as ValueKey],
      text: (el[props.textField as keyof Item] as string | undefined) ?? '',
      disabled: (el[props.disabledField as keyof Item] as boolean | undefined) ?? false,
    } as SelectOption
  })
)

// Forward all props except options (which we normalize) and field mappings (already used)
const forwardedProps = computed(() => ({
  disabled: props.disabled,
  id: props.id,
}))
</script>
