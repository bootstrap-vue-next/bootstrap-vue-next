<template>
  <component :is="tag" class="card-text">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BCardTextProps} from '../../types'

withDefaults(defineProps<BCardTextProps>(), {
  tag: 'p',
  text: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
