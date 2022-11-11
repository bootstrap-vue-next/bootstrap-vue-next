<template>
  <b-icon-base class="b-icon-stack" v-bind="props">
    <slot />
  </b-icon-base>
</template>

<script setup lang="ts">
import type {Animation, ColorVariant, IconSize} from '../../types'
import BIconBase from './BIconBase.vue'

interface Props {
  animation?: Animation
  flipH?: boolean
  flipV?: boolean
  fontScale?: number | string
  rotate?: string | number
  scale?: number | string
  shiftH?: number | string
  shiftV?: number | string
  size?: IconSize
  title?: string
  variant?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  shiftH: 0,
  shiftV: 0,
  scaale: 1,
  fontScale: 1,
  flipV: false,
  flipH: false,
})
</script>
