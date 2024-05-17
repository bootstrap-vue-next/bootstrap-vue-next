<template>
  <component :is="props.tag" class="input-group-text">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BInputGroupTextProps} from '../../types'

const _props = withDefaults(defineProps<BInputGroupTextProps>(), {
  tag: 'div',
  text: undefined,
})
const props = useDefaults(_props, 'BInputGroupText')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
