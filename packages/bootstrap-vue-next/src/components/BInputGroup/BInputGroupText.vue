<template>
  <component :is="tag" class="input-group-text">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import type {BInputGroupTextProps} from '../../types'

withDefaults(defineProps<BInputGroupTextProps>(), {
  tag: 'div',
  text: undefined,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
