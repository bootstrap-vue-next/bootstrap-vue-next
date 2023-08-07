<template>
  <BInputGroupAddon v-bind="$props">
    <slot />
  </BInputGroupAddon>
</template>

<script setup lang="ts">
import type {BInputGroupAddonProps} from '../../types'
import BInputGroupAddon from './BInputGroupAddon.vue'

withDefaults(defineProps<BInputGroupAddonProps>(), {
  isText: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
