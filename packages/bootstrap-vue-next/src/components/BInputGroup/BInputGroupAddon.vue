<template>
  <b-input-group-text v-if="isTextBoolean">
    <slot />
  </b-input-group-text>
  <slot v-else />
</template>

<script setup lang="ts">
import {useBooleanish} from '../../composables'
import type {Booleanish} from '../../types'
import BInputGroupText from './BInputGroupText.vue'

interface BInputGroupAddonProps {
  isText?: Booleanish
}

const props = withDefaults(defineProps<BInputGroupAddonProps>(), {
  isText: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const isTextBoolean = useBooleanish(() => props.isText)
</script>
