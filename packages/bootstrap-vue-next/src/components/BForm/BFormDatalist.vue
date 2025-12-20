<template>
  <datalist :id="computedId">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptsWrapper"
      :key="index"
      v-bind="option"
    >
      <slot name="option" v-bind="option">
        {{ option.text }}
      </slot>
    </BFormSelectOption>
    <slot />
  </datalist>
</template>

<script
  setup
  lang="ts"
  generic="Item = Record<string, unknown>, ValueKey extends keyof Item = keyof Item"
>
import type {BFormDatalistProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import BFormSelectOption from '../BFormSelect/BFormSelectOption.vue'
import {useId} from '../../composables/useId'
import type {SelectOption} from '../../types/SelectTypes'
import type {BFormDatalistSlots} from '../../types'

// Note: Cannot use useDefaults composable with generic props due to Proxy/type inference limitations.
// BFormDatalist has minimal props and no commonly-customized style props, so manual defaults injection is not needed.
const props = withDefaults(defineProps<BFormDatalistProps<Item, ValueKey>>(), {
  disabledField: 'disabled' as keyof Item & string,
  id: undefined,
  options: () => [],
  textField: 'text' as keyof Item & string,
  valueField: 'value' as ValueKey & string,
})
defineSlots<BFormDatalistSlots<Item[ValueKey]>>()

const computedId = useId(() => props.id, 'datalist')

const normalizedOptsWrapper = computed(() => {
  const optionsList = props.options || []
  return optionsList.map((el) => {
    if (typeof el === 'string' || typeof el === 'number') {
      return {text: String(el), value: el, disabled: false}
    }
    return {
      text: String(el[props.textField as keyof typeof el]),
      value: el[props.valueField as keyof typeof el] as Item[ValueKey],
      disabled: props.disabledField ? Boolean(el[props.disabledField as keyof typeof el]) : false,
    }
  }) as readonly SelectOption<Item[ValueKey]>[]
})
</script>
