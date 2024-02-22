<template>
  <component :is="tag" :class="cardTypeClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'

const props = withDefaults(
  defineProps<{
    columns?: boolean
    deck?: boolean
    tag?: string
  }>(),
  {
    columns: false,
    deck: false,
    tag: 'div',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const columnsBoolean = computed(() => props.columns)
const deckBoolean = computed(() => props.deck)

const cardTypeClass = toRef(() =>
  deckBoolean.value ? 'card-deck' : columnsBoolean.value ? 'card-columns' : 'card-group'
)
</script>
