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
  text: undefined,
  bgVariant: undefined,
  borderVariant: undefined,
  html: undefined,
  textVariant: undefined,
})

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== undefined,
  [`bg-${props.bgVariant}`]: props.bgVariant !== undefined,
  [`border-${props.borderVariant}`]: props.borderVariant !== undefined,
}))
</script>
