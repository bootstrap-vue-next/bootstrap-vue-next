<template>
  <component :is="props.tag" :class="cardTypeClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BCardGroupProps} from '../../types/ComponentProps'
import type {BCardGroupSlots} from '../../types'

const _props = withDefaults(defineProps<BCardGroupProps>(), {
  columns: false,
  deck: false,
  tag: 'div',
})
const props = useDefaults(_props, 'BCardGroup')
defineSlots<BCardGroupSlots>()

const cardTypeClass = computed(() =>
  props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
)
</script>
