<template>
  <b-card-head-foot class="card-footer" v-bind="props">
    <slot>
      {{ text }}
    </slot>
  </b-card-head-foot>
</template>

<script setup lang="ts">
// import type {BCardHeaderProps} from '../../types/components'
import type {ColorVariant, TextColorVariant} from '../../types'
import BCardHeadFoot from './BCardHeadFoot.vue'

interface BCardFooterProps {
  text?: string
  bgVariant?: ColorVariant
  borderVariant?: ColorVariant
  html?: string
  tag?: string
  textVariant?: TextColorVariant
}

const props = withDefaults(defineProps<BCardFooterProps>(), {
  tag: 'div',
})
</script>
