<template>
  <option :value="props.value" :disabled="props.disabled" v-bind="props.optionsAttrs">
    <slot />
  </option>
</template>

<script setup lang="ts" generic="T">
import {useDefaults} from '../../composables/useDefaults'
import type {BFormSelectOptionProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BFormSelectOptionProps<T>>(), {
  disabled: false,
  optionsAttrs: undefined,
  value: undefined,
})
const props = useDefaults<BFormSelectOptionProps<T>>(_props, 'BFormSelectOption')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
