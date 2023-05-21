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
  bgVariant?: ColorVariant | null
  borderVariant?: ColorVariant | null
  html?: string
  tag?: string
  textVariant?: TextColorVariant | null
}

const props = withDefaults(defineProps<BCardHeaderProps>(), {
  tag: 'div',
  text: undefined,
  bgVariant: null,
  borderVariant: null,
  html: undefined,
  textVariant: null,
})

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
  [`bg-${props.bgVariant}`]: props.bgVariant !== null,
  [`border-${props.borderVariant}`]: props.borderVariant !== null,
}))
</script>
