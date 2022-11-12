<template>
  <b-icon-base v-bind="props">
    <slot>
      <use :xlink:href="computedXLink" />
    </slot>
  </b-icon-base>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Animation, ColorVariant, IconSize} from '../../types'
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg'
import BIconBase from './BIconBase.vue'

interface Props {
  animation?: Animation
  flipH?: boolean
  flipV?: boolean
  fontScale?: number | string
  icon?: string
  rotate?: string | number
  scale?: number | string
  shiftH?: number | string
  shiftV?: number | string
  size?: IconSize
  stacked?: boolean
  title?: string
  variant?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  flipH: false,
  flipV: false,
  fontScale: 1,
  scale: 1,
  shiftH: 0,
  shiftV: 0,
  stacked: false,
})

const svgSprite = computed(() => BootstrapIcons)

const computedXLink = computed(() => `${svgSprite.value}#${props.icon}`)
</script>
