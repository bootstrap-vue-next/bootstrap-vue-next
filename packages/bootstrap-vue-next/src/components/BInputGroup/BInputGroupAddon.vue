<template>
  <BInputGroupText v-if="props.isText">
    <slot />
  </BInputGroupText>
  <slot v-else />
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BInputGroupAddonProps} from '../../types'
import BInputGroupText from './BInputGroupText.vue'

const _props = withDefaults(defineProps<BInputGroupAddonProps>(), {
  isText: false,
})
const props = useDefaults(_props, 'BInputGroupAddon')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
