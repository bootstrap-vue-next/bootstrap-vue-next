<template>
  <component :is="props.tag" :class="cardTypeClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BCardGroupProps} from '../../types/ComponentProps'

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

const cardTypeClass = computed(() =>
  props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
)
</script>
