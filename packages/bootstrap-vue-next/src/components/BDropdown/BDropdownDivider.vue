<template>
  <li role="presentation" :class="wrapperClass" v-bind="wrapperAttrs">
    <component
      :is="props.tag"
      class="dropdown-divider"
      :class="props.innerClass"
      role="separator"
      aria-orientation="horizontal"
      v-bind="attrs"
    />
  </li>
</template>

<script setup lang="ts">
import {useAttrs} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BDropdownDividerProps} from '../../types/ComponentProps'

defineOptions({
  inheritAttrs: false,
  innerClass: undefined,
})

const {class: wrapperClass, ...attrs} = useAttrs()

const _props = withDefaults(defineProps<BDropdownDividerProps>(), {
  tag: 'hr',
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BDropdownDivider')
</script>
