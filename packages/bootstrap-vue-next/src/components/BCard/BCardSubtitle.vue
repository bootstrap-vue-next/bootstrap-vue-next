<template>
  <component :is="tag" class="card-subtitle mb-2" :class="coomputedClasses">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {TextColorVariant} from '../../types'
import {computed} from 'vue'

interface BCardSubtitleProps {
  text?: string
  tag?: string
  textVariant?: TextColorVariant | null
}

const props = withDefaults(defineProps<BCardSubtitleProps>(), {
  tag: 'h6',
  textVariant: 'muted',
  text: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const coomputedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
}))
</script>
