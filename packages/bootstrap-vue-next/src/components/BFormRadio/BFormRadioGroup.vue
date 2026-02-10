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
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import type {BFormRadioGroupProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormRadioGroupBase from './BFormRadioGroupBase.vue'
import type {RadioOption} from '../../types/RadioTypes'

/**
 * Type-safe wrapper component for BFormRadioGroup.
 * Provides generic type safety for options and field names.
 * Normalizes typed options and forwards to BFormRadioGroupBase for rendering.
 */
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

// Type-safe model value
const modelValue = defineModel<Item[ValueKey] | undefined>({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: null as any,
})

// Type-safe normalization of options
// Note: We need to cast to RadioOption[] because TypeScript can't prove that Item[ValueKey]
// is assignable to RadioValue. This is safe because the values are runtime compatible.
const normalizedOptions = computed(
  () =>
    props.options.map((el) =>
      typeof el === 'string' || typeof el === 'number'
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
            text: (el[props.textField as keyof Item] as string | undefined) ?? '',
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
