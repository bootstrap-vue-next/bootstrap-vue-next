<template>
  <BInputGroupText v-if="isTextBoolean">
    <slot />
  </BInputGroupText>
  <slot v-else />
</template>

<script setup lang="ts">
import {useBooleanish} from '../../composables'
import type {Booleanish} from '../../types'
import BInputGroupText from './BInputGroupText.vue'

const props = withDefaults(
  defineProps<{
    isText?: Booleanish
  }>(),
  {
    isText: false,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const isTextBoolean = useBooleanish(() => props.isText)
</script>
