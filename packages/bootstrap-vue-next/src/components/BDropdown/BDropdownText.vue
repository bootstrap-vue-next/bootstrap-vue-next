<template>
  <li role="presentation">
    <span class="dropdown-item-text" v-bind="$attrs">
      <slot>
        {{ props.text }}
      </slot>
    </span>
  </li>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BDropdownTextProps} from '../../types'

const _props = withDefaults(defineProps<BDropdownTextProps>(), {
  text: '',
})
const props = useDefaults(_props, 'BDropdownText')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
