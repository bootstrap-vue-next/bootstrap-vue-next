<template>
  <component :is="tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    columns?: Booleanish
    deck?: Booleanish
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

const columnsBoolean = useBooleanish(() => props.columns)
const deckBoolean = useBooleanish(() => props.deck)

const cardTypeClass = computed(() =>
  deckBoolean.value ? 'card-deck' : columnsBoolean.value ? 'card-columns' : 'card-group'
)

const computedClasses = computed(() => [cardTypeClass.value])
</script>
