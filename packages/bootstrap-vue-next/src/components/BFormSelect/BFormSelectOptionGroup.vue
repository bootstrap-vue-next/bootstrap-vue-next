<template>
  <optgroup :label="props.label">
    <slot name="first" />
    <BFormSelectOption
      v-for="(option, index) in normalizedOptsWrapper"
      :key="index"
      :disabled="option.disabled"
      :value="option.value"
      v-bind="$attrs"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-if="!!option.html" v-html="option.html" />
      <template v-else>
        {{ option.text }}
      </template>
    </BFormSelectOption>
    <slot />
  </optgroup>
</template>

<script setup lang="ts" generic="T">
import BFormSelectOption from './BFormSelectOption.vue'
import {useDefaults, useFormSelect} from '../../composables'
import type {BFormSelectOptionGroupProps, SelectOption} from '../../types'
import {computed} from 'vue'

const _props = withDefaults(defineProps<BFormSelectOptionGroupProps>(), {
  disabledField: 'disabled',
  htmlField: 'html',
  label: undefined,
  options: () => [],
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BFormSelectOptionGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const {normalizedOptions} = useFormSelect(() => props.options, props)

const normalizedOptsWrapper = computed(() => normalizedOptions.value as SelectOption<T>[])
</script>
