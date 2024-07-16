<template>
  <datalist :id="computedId">
    <slot name="first" />
    <template v-for="(option, index) in normalizedOptsWrapper" :key="index">
      <BFormSelectOption :value="option.value" :disabled="option.disabled">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="!!option.html" v-html="option.html" />
        <template v-else>
          {{ option.text }}
        </template>
      </BFormSelectOption>
    </template>
    <slot />
  </datalist>
</template>

<script setup lang="ts" generic="T">
import type {BFormDatalistProps, SelectOption} from '../../types'
import {computed} from 'vue'
import BFormSelectOption from '../BFormSelect/BFormSelectOption.vue'
import {useDefaults, useFormSelect, useId} from '../../composables'

const _props = withDefaults(defineProps<BFormDatalistProps>(), {
  disabled: false,
  disabledField: 'disabled',
  htmlField: 'html',
  id: undefined,
  // eslint-disable-next-line vue/require-valid-default-prop
  options: () => [],
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormSelect')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id, 'datalist')

const {normalizedOptions, isComplex} = useFormSelect(() => props.options, props)

const normalizedOptsWrapper = computed(() => {
  let opts = normalizedOptions.value
  if (opts.find((opt) => isComplex(opt))) {
    // eslint-disable-next-line no-console
    console.warn('Datalist may not contain complex options', computedId.value)

    opts = opts.filter((opt) => !isComplex(opt))
  }
  return opts as readonly SelectOption<T>[]
})
</script>
