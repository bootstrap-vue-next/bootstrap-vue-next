<template>
  <b-card-head-foot class="card-footer" v-bind="props">
    <slot>
      {{ text }}
    </slot>
  </b-card-head-foot>
</template>

<script setup lang="ts">
// import type {BCardHeaderProps} from '../../types/components'
import type {ColorVariant} from '../../types'
import BCardHeadFoot from './BCardHeadFoot.vue'

interface BCardFooterProps {
  text?: string
  bgVariant?: ColorVariant.BgColorVariant
  borderVariant?: ColorVariant.BorderColorVariant
  html?: string
  tag?: string
  textVariant?: ColorVariant.TextColorVariant
}

const props = withDefaults(defineProps<BCardFooterProps>(), {
  tag: 'div',
})
</script>
