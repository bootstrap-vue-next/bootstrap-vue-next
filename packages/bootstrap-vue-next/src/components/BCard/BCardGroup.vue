<template>
  <component :is="tag" :class="cardTypeClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {BCardGroupProps} from '../../types'
import {toRef} from 'vue'

const props = withDefaults(defineProps<BCardGroupProps>(), {
  columns: false,
  deck: false,
  tag: 'div',
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const cardTypeClass = toRef(() =>
  props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
)
</script>
