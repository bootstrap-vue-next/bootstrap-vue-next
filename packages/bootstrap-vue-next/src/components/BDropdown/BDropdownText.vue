<template>
  <li role="presentation" :class="wrapperClass" v-bind="wrapperAttrs">
    <component
      :is="props.tag"
      class="dropdown-item-text"
      :class="[colorClasses, props.textClass]"
      v-bind="attrs"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import {computed, useAttrs} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BDropdownTextProps} from '../../types/ComponentProps'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'

defineOptions({
  inheritAttrs: false,
})
const {class: wrapperClass, ...attrs} = useAttrs()

const _props = withDefaults(defineProps<BDropdownTextProps>(), {
  textClass: undefined,
  tag: 'span',
  variant: null,
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BDropdownText')

const colorClasses = useColorVariantClasses(
  computed(() => ({
    textVariant: props.variant,
  }))
)
defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
