<template>
  <option :value="props.value" :disabled="props.disabled" :selected="isSelected" :class="props.class" v-bind="props.attrs">
    <slot />
  </option>
</template>

<script setup lang="ts" generic="T">
import type {BFormSelectOptionSlots} from '../../types'
import {computed, inject} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BFormSelectOptionProps} from '../../types/ComponentProps'
import {formSelectKey} from '../../utils/keys'

const _props = withDefaults(defineProps<BFormSelectOptionProps<T>>(), {
  disabled: false,
  value: undefined,
  class: undefined,
  attrs: undefined,
})
const props = useDefaults<BFormSelectOptionProps<T>>(_props, 'BFormSelectOption')
defineSlots<BFormSelectOptionSlots>()

// Inject the form select context to determine if this option is selected
const formSelectContext = inject(formSelectKey, null)

const isSelected = computed(() => {
  if (!formSelectContext) return false
  return formSelectContext.modelValue.value === props.value
})
</script>
