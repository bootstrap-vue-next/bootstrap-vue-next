<template>
  <BInputGroupText v-if="props.isText">
    <slot />
  </BInputGroupText>
  <slot v-else />
</template>

<script setup lang="ts">
import type {BInputGroupAddonProps} from '../../types'
import BInputGroupText from './BInputGroupText.vue'

const props = withDefaults(defineProps<BInputGroupAddonProps>(), {
  isText: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
