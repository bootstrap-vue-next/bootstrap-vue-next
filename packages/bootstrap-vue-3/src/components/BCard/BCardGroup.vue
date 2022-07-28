<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BCardGroupProps} from '../../types/components'
import {computed} from 'vue'

interface BCardGroupProps {
  columns?: boolean
  deck?: boolean
  tag?: string
}

const props = withDefaults(defineProps<BCardGroupProps>(), {
  columns: false,
  deck: false,
  tag: 'div',
})

const classes = computed(() =>
  props.deck ? 'card-deck' : props.columns ? 'card-columns' : 'card-group'
)
</script>
