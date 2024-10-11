<template>
  <li role="presentation" :class="wrapperClass" v-bind="props.wrapperAttrs">
    <form class="dropdown-item-text" :class="props.formClass" v-bind="attrs">
      <slot />
    </form>
  </li>
</template>

<script setup lang="ts">
import {useAttrs} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BDropdownFormProps} from '../../types/ComponentProps'

defineOptions({
  inheritAttrs: false,
})
const {class: wrapperClass, ...attrs} = useAttrs()

const _props = withDefaults(defineProps<BDropdownFormProps>(), {
  formClass: undefined,
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BDropdownForm')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
