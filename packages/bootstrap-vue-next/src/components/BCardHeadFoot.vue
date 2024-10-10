<template>
  <component :is="tag" :class="computedClasses">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="!!html" v-html="html" />
    <slot v-else>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BCardHeadFootProps} from '../types/ComponentProps'
import {useColorVariantClasses} from '../composables/useColorVariantClasses'

const props = withDefaults(defineProps<BCardHeadFootProps>(), {
  borderVariant: null,
  html: undefined,
  tag: 'div',
  text: undefined,
  // ColorExtendables props
  bgVariant: null,
  textVariant: null,
  variant: null,
  // End ColorExtendables props
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = useColorVariantClasses(props)
</script>
