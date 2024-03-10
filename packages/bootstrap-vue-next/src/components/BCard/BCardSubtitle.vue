<template>
  <component :is="tag" class="card-subtitle mb-2" :class="computedClasses">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BCardSubtitleProps} from '../../types'
import {computed} from 'vue'

const props = withDefaults(defineProps<BCardSubtitleProps>(), {
  tag: 'h6',
  text: undefined,
  textVariant: 'body-secondary',
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`text-${props.textVariant}`]: props.textVariant !== null,
}))
</script>
