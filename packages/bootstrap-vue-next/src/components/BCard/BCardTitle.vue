<template>
  <component :is="props.tag" class="card-title">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BCardTitleProps} from '../../types'

const _props = withDefaults(defineProps<BCardTitleProps>(), {
  tag: 'h4',
  text: undefined,
})
const props = useDefaults(_props, 'BCardTitle')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
