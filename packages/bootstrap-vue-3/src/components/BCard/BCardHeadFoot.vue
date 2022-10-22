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
// Internal component that decomposes the internals of BCardHeader & BCardFooter
// (they do the same thing, with the only difference of one static class)

// import type {BCardHeaderProps} from '../../types/components'
import {computed} from 'vue'
import type {ColorVariant, TextColorVariant} from '../../types'

interface BCardHeaderProps {
  text?: string
  bgVariant?: ColorVariant
  borderVariant?: ColorVariant
  html?: string
  tag?: string
  textVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BCardHeaderProps>(), {
  tag: 'div',
})

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== undefined,
  [`bg-${props.bgVariant}`]: props.bgVariant !== undefined,
  [`border-${props.borderVariant}`]: props.borderVariant !== undefined,
}))
</script>
