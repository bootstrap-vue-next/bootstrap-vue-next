<template>
  <li class="navbar-text">
    <slot>
      {{ text }}
    </slot>
  </li>
</template>

<script setup lang="ts">
import type {BNavTextProps} from '../../types'

withDefaults(defineProps<BNavTextProps>(), {text: undefined})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
