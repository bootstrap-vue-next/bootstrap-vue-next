<template>
  <component :is="props.tag" class="row d-flex flex-wrap">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BFormRowProps} from '../../types'

const _props = withDefaults(defineProps<BFormRowProps>(), {
  tag: 'div',
})
const props = useDefaults(_props, 'BFormRow')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
