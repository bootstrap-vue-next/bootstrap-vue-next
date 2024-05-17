<template>
  <BInputGroupAddon v-bind="props">
    <slot />
  </BInputGroupAddon>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BInputGroupAddonProps} from '../../types'
import BInputGroupAddon from './BInputGroupAddon.vue'

const _props = withDefaults(defineProps<BInputGroupAddonProps>(), {
  isText: false,
})
const props = useDefaults(_props, 'BInputGroupAppend')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
