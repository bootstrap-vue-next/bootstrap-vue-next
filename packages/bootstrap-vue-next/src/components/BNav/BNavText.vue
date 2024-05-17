<template>
  <li class="navbar-text">
    <slot>
      {{ props.text }}
    </slot>
  </li>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BNavTextProps} from '../../types'

const _props = withDefaults(defineProps<BNavTextProps>(), {text: undefined})
const props = useDefaults(_props, 'BNavText')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
