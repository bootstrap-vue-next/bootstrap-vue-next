<template>
  <BInputGroupAddon :is-text="isText">
    <slot />
  </BInputGroupAddon>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'
import BInputGroupAddon from './BInputGroupAddon.vue'

withDefaults(
  defineProps<{
    isText?: Booleanish
  }>(),
  {
    isText: false,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
