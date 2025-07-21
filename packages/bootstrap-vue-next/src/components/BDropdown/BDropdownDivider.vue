<template>
  <li role="presentation" :class="processedAttrs.wrapperClass" v-bind="wrapperAttrs">
    <component
      :is="props.tag"
      class="dropdown-divider"
      :class="props.dividerClass"
      role="separator"
      aria-orientation="horizontal"
      v-bind="processedAttrs.dividerAttrs"
    />
  </li>
</template>

<script setup lang="ts">
import {computed, useAttrs} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BDropdownDividerProps} from '../../types/ComponentProps'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BDropdownDividerProps>(), {
  dividerClass: undefined,
  tag: 'hr',
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BDropdownDivider')
const attrs = useAttrs()

const processedAttrs = computed(() => {
  const {class: wrapperClass, ...dividerAttrs} = attrs
  return {wrapperClass, dividerAttrs}
})
</script>
