<template>
  <component :is="props.tag" class="card-text">
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BCardTextProps} from '../../types'

const _props = withDefaults(defineProps<BCardTextProps>(), {
  tag: 'p',
  text: undefined,
})
const props = useDefaults(_props, 'BCardText')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
