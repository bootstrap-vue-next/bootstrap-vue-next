<template>
  <component :is="props.tag" :class="cardTypeClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BCardGroupProps} from '../../types'
import {toRef} from 'vue'

const _props = withDefaults(defineProps<BCardGroupProps>(), {
  columns: false,
  deck: false,
  tag: 'div',
})
const props = useDefaults(_props, 'BCardGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const cardTypeClass = toRef(() =>
  props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
)
</script>
