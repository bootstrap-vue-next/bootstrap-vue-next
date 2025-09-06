<template>
  <option :value="props.value" :disabled="props.disabled" :selected="props.selected">
    <slot />
  </option>
</template>

<script setup lang="ts" generic="T">
import type {BFormSelectOptionSlots} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import type {BFormSelectOptionProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BFormSelectOptionProps<T>>(), {
  disabled: false,
  selected: false,
  value: undefined,
})
const props = useDefaults<BFormSelectOptionProps<T>>(_props, 'BFormSelectOption')
defineSlots<BFormSelectOptionSlots>()
</script>
